import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { difficulty } = req.query;

  try {
    const filePath = path.join(process.cwd(), 'data', 'texts.json'); // Corrected file path
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const allTexts = JSON.parse(fileContents);
    const texts = allTexts[difficulty]; // Directly access the difficulty level in the JSON file

    if (!texts || texts.length === 0) {
      console.log(`No texts found for difficulty: ${difficulty}`);
      return res.status(404).json({ error: 'No texts found for the specified difficulty' });
    }

    const randomIndex = Math.floor(Math.random() * texts.length);
    const selectedText = texts[randomIndex];

    console.log(`Selected text for difficulty '${difficulty}': ${selectedText}`);
    res.status(200).json({ text: selectedText });
  } catch (error) {
    console.error(`Error fetching text for difficulty '${difficulty}':`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}