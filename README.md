# DevAssist

DevAssist is an AI assistant for developers built with Next.js + TypeScript. It combines multiple productivity tools into a single platform, helping developers learn, prepare for interviews, improve resumes, and stay updated with the latest technology trends.

## Features

### AI Developer Assistant

* Ask programming and software development questions.
* Get concise and structured answers powered by Google's Gemini API.
* Supports coding, debugging, interview preparation, and general tech topics.

### Resume Analyzer

* Analyze resumes using AI.
* Receive ATS score evaluation.
* Identify strengths, weaknesses, and missing skills.
* Get actionable suggestions to improve resume quality.

### Tech News

* Browse the latest technology news.
* Automatically refreshed using Incremental Static Regeneration (ISR).
* Clean and responsive card-based interface.

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js Route Handlers
* Gemini API

### External APIs

* Gemini 2.5 Flash
* NewsAPI

## Rendering Strategies

| Page            | Rendering Type                        |
| --------------- | ------------------------------------- |
| Home            | Static Site Generation (SSG)          |
| AI Assistant    | Client Side Rendering (CSR)           |
| Resume Analyzer | Client Side Rendering (CSR)           |
| Tech News       | Incremental Static Regeneration (ISR) |

## Installation

```bash
git clone https://github.com/Nazrulali10/DevAssist.git
cd DevAssist
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file and add:

```env
GEMINI_API_KEY1=your_gemini_api_key1
GEMINI_API_KEY2=your_gemini_api_key2
NEWS_API_KEY=your_news_api_key
```

## Project Structure

```txt
src/
├── app/
├── components/
├── lib/
├── types/
└── assets/
```

## Future Improvements

* PDF Resume Upload
* Authentication
* Personalized News Categories

## Author

Nazrul Ali

Built as a portfolio project to demonstrate modern full-stack development using Next.js, TypeScript, AI integration, and responsive UI design.
