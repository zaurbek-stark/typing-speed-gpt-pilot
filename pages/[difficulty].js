import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/TypingTest.module.scss';
import Link from 'next/link';
import "../styles/globals.css";

const TypingTest = () => {
  const router = useRouter();
  const { difficulty } = router.query;

  const [textToType, setTextToType] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [comments, setComments] = useState('Ready to start typing? Let the fun begin!');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (difficulty) {
      setIsLoading(true);
      axios.get(`/api/texts?difficulty=${difficulty}`)
        .then(response => {
          setTextToType(response.data.text);
        })
        .catch(error => {
          console.error('Failed to fetch text:', error);
          setError('Failed to load text. Please try again.');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [difficulty]);

  useEffect(() => {
    if (userInput.length > 5 && startTime) { // Start calculating WPM after 5 characters to avoid early jitter
      const elapsedTime = (new Date() - startTime) / 60000; // Convert milliseconds to minutes
      const wordsTyped = userInput.replace(/ /g, '').length / 5; // Assuming an average word is 5 characters
      const currentWpm = Math.round(wordsTyped / elapsedTime);
      setWpm(currentWpm);

      // Update comments based on typing speed with internet humor
      if (currentWpm < 20) {
        setComments('Are you typing with one finger? 😂');
      } else if (currentWpm < 40) {
        setComments('Not bad, but I bet your cat could type faster!');
      } else if (currentWpm < 60) {
        setComments('Wow, look at those fingers go! 🔥');
      } else {
        setComments('You must be a keyboard wizard! 🧙‍♂️');
      }
    }
  }, [userInput, startTime]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
    if (!startTime && input.length === 5) {
      setStartTime(new Date());
    }
  };

  const renderTextToType = () => {
    return textToType.split('').map((char, index) => {
      let charClass = '';
      if (index < userInput.length) {
        charClass = char === userInput[index] ? styles.correct : styles.incorrect;
      }
      return <span key={index} className={charClass}>{char}</span>;
    });
  };

  if (error) {
    return (
      <div className={styles.container}>
        <p>{error}</p>
        <Link href="/"><a>Go back</a></Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={styles.textToType}>{renderTextToType()}</div>
          <input
            className={styles.input}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Start typing..."
          />
          <div>Words per minute (WPM): {wpm}</div>
          <div className={styles.comments}>{comments}</div>
        </>
      )}
    </div>
  );
};

export default TypingTest;