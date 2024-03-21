# Typing Speed App

The Typing Speed App is a modern web application designed to measure a user's typing speed in words per minute (wpm). It presents users with a short text which they need to type as quickly and accurately as possible. The application provides real-time visual feedback, marking correct characters in green and incorrect ones in red, and displays witty comments based on the user's typing speed. Built with a dark theme, the app offers a minimalistic and engaging user experience.

## Overview

This application is developed using Next.js for both its frontend and backend, leveraging React for the UI components. The architecture primarily focuses on client-side processing, with server-side rendering utilized for initial page loads. The application's styling is achieved using CSS with SASS/SCSS for a modern look and feel. Texts for typing tests are served based on the chosen difficulty level, stored in a simple JSON file.

## Features

- **Difficulty Selection**: Users can select the text difficulty before starting the typing test.
- **Typing Test**: Real-time feedback with a visually appealing interface showing typing speed and accuracy.
- **Witty/Funny Comments**: Dynamic comments that change based on typing speed.
- **Dark Theme UI**: A modern and cool aesthetic that reduces eye strain.

## Getting started

### Requirements

- Node.js
- npm or yarn

### Quickstart

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### License

Copyright (c) 2024.