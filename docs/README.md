# Netflix GPT 🎬🤖  

A Netflix-inspired movie browsing app powered by **React, TailwindCSS, Firebase, TMDB API, and OpenAI GPT**.  
It allows users to sign up, log in, browse movies, watch trailers, and get **AI-powered movie recommendations**.  

---

## 🚀 Features  

### 🔐 Authentication  
- Login / Sign up with Firebase  
- Form validation using `useRef`  
- Profile update (display name & profile picture)  
- Auto-redirect:  
  - Logged-in users → `/browse`  
  - Not logged-in users → `/login`  

### 🎥 Browse Page  
- Responsive header with navigation  
- Main Movie Section:  
  - Trailer autoplay in background  
  - Title & description  
- Movie Suggestions Section:  
  - Multiple carousels for categories (Now Playing, Popular, etc.)  
  - Movie cards powered by TMDB CDN  

### 🤖 Netflix GPT  
- GPT-powered search bar  
- Movie suggestions fetched from TMDB API via GPT results  
- Reuses existing `MovieList` & `MovieCard` components  
- Multi-language support  

### ⚙️ Tech Stack  
- React (vite)
- TailwindCSS  
- Firebase Authentication  
- Redux Toolkit (user & movie slices)  
- TMDB API for movie data  
- OpenAI GPT API for recommendations  

---

## 🛠 Project Setup  

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt
