# 🌾 Predictive Crop Recommendation System

> A data science web application that identifies the **single best soil feature** for crop prediction and runs a live AI-powered classifier — built with React + Vite + Claude API.

---

## 📋 Project Overview

This system answers a real-world agricultural constraint:
> *"A farmer can only afford to measure ONE soil attribute. Which one should they measure?"*

The app automatically runs full feature importance analysis on load, visualises results with animated charts, and provides a live AI crop recommender.

### Features
- ✅ Auto-runs analysis (charts, rankings, comparisons) on page load
- ✅ Animated background particles that change per selected feature
- ✅ Recharts-powered bar, radar & accuracy comparison charts
- ✅ Live crop prediction via Claude AI with confidence scores
- ✅ Agronomic reasoning + alternative crop suggestions
- ✅ Prediction history (session-based)
- ✅ Fully responsive — mobile, tablet, desktop
- ✅ Security-first API key handling

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9+ (bundled with Node)
- A free **Anthropic API key** — [Get one](https://console.anthropic.com/)

### 1 — Clone / Extract

If you received this as a ZIP, extract it:
```bash
unzip crop-recommender.zip
cd crop-recommender
```

### 2 — Install dependencies
```bash
npm install
```

### 3 — Set up your API key (IMPORTANT — read security section below)

Copy the example environment file:
```bash
cp .env.example .env
```

Open `.env` and paste your Anthropic API key:
```
VITE_ANTHROPIC_API_KEY=sk-ant-api03-YOUR_KEY_HERE
```

### 4 — Run the dev server
```bash
npm run dev
```

Open your browser at: **http://localhost:5173**

### 5 — Build for production (optional)
```bash
npm run build
npm run preview
```

---

## 🔐 Security Tips — READ BEFORE DEPLOYING

> ⚠️ **CRITICAL: Never expose your API key in a public repository or deployed frontend.**

### ✅ Safe for local / demo use
This project is configured for **local development and personal demos only**.
Your key lives in `.env` which is gitignored — it never leaves your machine when running `npm run dev`.

### ❌ NOT safe for public deployment as-is
If you deploy this to Vercel, Netlify, or any public URL, anyone who visits can:
- Open DevTools → Network tab
- See your API key in request headers
- Use your key to rack up charges on your account

### 🛡️ How to deploy safely (production checklist)

| Step | Action |
|------|--------|
| 1 | Create a **backend proxy** (Node/Express, Django, FastAPI) that holds the key server-side |
| 2 | Your frontend calls YOUR backend, not Anthropic directly |
| 3 | Add **rate limiting** per IP (e.g., 10 requests/min) |
| 4 | Add **authentication** so only logged-in users can call it |
| 5 | Set **API key usage limits** in Anthropic Console |
| 6 | Enable **spending alerts** in your Anthropic billing settings |
| 7 | Rotate your key immediately if you suspect exposure |

### 🔒 What's already protected in this project
- `.env` is listed in `.gitignore` — never committed
- `.env.example` only contains a placeholder, no real key
- Key is accessed via `import.meta.env.VITE_ANTHROPIC_API_KEY` — Vite inlines it at build time (dev only)
- A clear warning is shown in the UI if no key is detected

### 🧪 For this project (Data Science submission)
Run locally only. Share the `.zip` without your `.env` file. Your assessor can add their own key.

---

## 📁 Project Structure

```
crop-recommender/
├── README.md               ← You are here
├── package.json            ← Dependencies & scripts
├── vite.config.js          ← Vite configuration
├── index.html              ← HTML entry point
├── .env.example            ← Copy to .env and add your key
├── .gitignore              ← Keeps .env out of git
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← Root app component
    └── components/
        ├── Hero.jsx        ← Landing header
        ├── AnalysisDashboard.jsx  ← Auto-loaded charts
        ├── Predictor.jsx   ← Live AI predictor
        ├── SecurityPanel.jsx      ← Security tips UI
        └── data.js         ← Dataset constants
```

---

## 🌱 Dataset Reference

Based on the **Crop Recommendation Dataset** (Kaggle):
- **2,200 samples** · 22 crop classes · 4 soil features
- Features: Nitrogen (N), Phosphorus (P), Potassium (K), pH
- Labels: rice, wheat, maize, chickpea, kidneybeans, pigeonpeas, mothbeans, mungbean, blackgram, lentil, pomegranate, banana, mango, grapes, watermelon, muskmelon, apple, orange, papaya, coconut, cotton, jute, coffee

### Feature Selection Winner: **Soil pH**
pH scored highest across all 4 feature selection methods (Mutual Information, Random Forest Importance, ANOVA F-Score, Spearman Correlation) because it acts as a master regulator of nutrient availability across all 22 crop classes.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Charts | Recharts |
| AI / Classifier | Claude claude-sonnet-4-20250514 (Anthropic API) |
| Styling | CSS-in-JS (inline + global styles) |
| Animations | CSS keyframes + requestAnimationFrame canvas |
| Environment | Vite env variables |

---

## 👨‍💻 Author

**Tito Kilonzo Kinyambu**  
GitHub: [github.com/TitoKilonzo](https://github.com/TitoKilonzo)  
LinkedIn: [linkedin.com/in/titokinyambu](https://linkedin.com/in/titokinyambu)  
Company: SynthLink Technologies

---

*Built as part of a Predictive Modeling for Agriculture Data Science project.*
