import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.scss';
import "../styles/globals.css";

export default function Home() {
  const [difficulty, setDifficulty] = useState('easy');

  return (
    <div className={styles.container}>
      <h1>Select Difficulty</h1>
      <div className={styles.buttonsWrapper}>
        <button className={styles.difficultyButton} onClick={() => setDifficulty('easy')}>Easy</button>
        <button className={styles.difficultyButton} onClick={() => setDifficulty('medium')}>Medium</button>
        <button className={styles.difficultyButton} onClick={() => setDifficulty('hard')}>Hard</button>
      </div>
      <Link href={`/${difficulty}`} className={styles.startButton}>
        Start
      </Link>
    </div>
  );
}