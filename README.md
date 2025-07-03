# 🌞 Solar Survey App
A responsive and accessible web application that guides users through a solar suitability survey. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**.



## ✨ Features
- Multi-step survey with real-time progress
- Dynamic question rendering from data source
- Optional contact form with validation
- Responsive design (mobile-first)
- Built-in API endpoint for mock submission
- Clean and modular folder structure


## 🛠 Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons

## 📦 Installation
```bash
git clone https://github.com/your-username/solar-survey-app.git
cd solar-survey-app
npm install
```


## 🚀 Development

```bash
npm run dev
```


## 🧩 Folder Structure

```bash
/app
  └─ /form                     → form components
  └─ /api                      → mock submission API
/components
  └─ Button.tsx                → reusable button
  └─ ContactForm.tsx           → contact info input section
/data
  └─ surveyQuestions.ts        → static list of questions
