# 🎵 Music Showcase Piece

A visually stunning, high-performance music showcase platform built with **Next.js** and **Aceternity UI**. This project serves as a cinematic digital portfolio for tracks, artists, and musical highlights.

---

## 🚀 Overview

This website focuses on a high-end user experience, utilizing modern UI libraries to create "wow" moments. It features a fully functional contact system powered by **Resend**, ensuring that fans or clients can reach out directly.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14/15** | Core Framework (App Router) |
| **Aceternity UI** | High-end animated components |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Complex interactions & animations |
| **Resend** | Email delivery service |
| **Lucide React** | Minimalist iconography |

---

## ✨ Key Features

*   **Aceternity UI Components:** Integrated professional-grade components like Bento Grids, Moving Borders, and Sparkles for a premium feel.
*   **Dynamic Music Display:** Optimized for showcasing album art, tracklists, and artist bios.
*   **Contact Form:** A seamless contact page that sends emails directly to your inbox via the Resend API.
*   **Responsive Design:** Fully fluid layout that looks great on mobile, tablet, and ultra-wide monitors.

---

## 🏁 Getting Started

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/music-showcase.git](https://github.com/your-username/music-showcase.git)
cd music-showcase

2. Install Dependencies
Bash
npm install
# or
yarn install

3. Set Up Environment Variables
Create a .env.local file in the root directory and add your Resend credentials:

Code snippet
RESEND_API_KEY=re_your_api_key_here
MY_MAIL=your-email@example.com
4. Run the Development Server
Bash
npm run dev
Open http://localhost:3000 to view your showcase.

📧 Email Integration (Resend)
The contact page uses an API route to handle submissions. Ensure you have verified your domain or used the default "onboarding" email provided by Resend to test functionality.

Path: app/api/send/route.ts

TypeScript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Logic to send contact details to your email

🐳 Docker Deployment
This project is fully "Dockerized," allowing you to run the entire showcase in a containerized environment. This ensures the Aceternity UI animations and Next.js features work consistently across all platforms.

1. Build the Image
Navigate to the project root and run:

Bash
docker build -t music-showcase .
2. Run the Container with Environment Variables
To keep your Resend API Key secure, you pass it at runtime using the -e flag. This allows anyone to run your project without hardcoding sensitive data.

Bash
docker run -p 3000:3000 \
  -e RESEND_API_KEY=your_resend_key_here \
  -e MY_MAil=your_email@example.com \
  music-showcase

OR

docker run -p 3000:3000 --env-file .env music-showcase

📄 License
This project is licensed under the MIT License.

🤝 Contributing
Feedback and contributions are welcome! Feel free to open an issue or submit a pull request.