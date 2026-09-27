# Portfolio — Setup Guide (বাংলায়)

## যা আছে
- React + Vite + Tailwind CSS দিয়ে বানানো একটা full portfolio
- তোমার ২টা ছবি (`src/assets/hero.jpeg`, `src/assets/about.jpeg`) আগে থেকেই বসানো আছে
- বাকি সব তথ্য (নাম, bio, skills, CP rating, projects) আপাতত **dummy data** — `src/data/data.js` ফাইলে

## কম্পিউটারে চালু করবে কীভাবে

```bash
npm install       # প্রথমবার, সব package ইন্সটল করবে
npm run dev       # local এ চালু হবে, browser এ http://localhost:5173 খোলো
```

কোড এডিট করলেই browser এ সাথে সাথে change দেখা যাবে (hot reload)।

## Deploy করবে কীভাবে
```bash
npm run build     # dist/ ফোল্ডারে production build বানাবে
```
এই `dist/` ফোল্ডারটা Vercel, Netlify বা GitHub Pages এ আপলোড করলেই সাইট live হয়ে যাবে।

## নিজের তথ্য বসাবে কোথায়

**একটাই ফাইল এডিট করলেই ৯০% কাজ শেষ — `src/data/data.js`**
- `profile` → নাম, role, bio, email, resume link, social links
- `stats` → top bar এর সংখ্যা গুলো (years, problems solved ইত্যাদি)
- `skills` → skill এর নাম আর percentage
- `competitiveProfiles` → Codeforces/AtCoder এর handle, rating, rank, solved count, profile link
- `projects` → প্রতিটা project এর নাম, description, tech, live link, github link

## ছবি বদলাতে চাইলে
- Hero section এর ছবি: `src/assets/hero-cutout.png` replace করো — এটা background-remove করা transparent PNG, তাই নতুন ছবি বসালে সেটাও background remove করে PNG আকারে রাখা ভালো, নাহলে dark background এর সাথে মিশবে না
- About section এর ছবি: `src/assets/about.jpeg` replace করো (এটা normal ছবি, background remove করা লাগবে না)

## Project screenshot যোগ করতে চাইলে
1. Screenshot ফাইলগুলো `src/assets/` এ রাখো (যেমন `project1.png`)
2. `src/App.jsx` বা `src/components/Projects.jsx` এ যেভাবে hero/about photo import করা আছে, ঠিক সেভাবে:
   ```js
   import project1 from '../assets/project1.png'
   ```
3. তারপর `src/data/data.js` এ সেই project এর `image` field এ `project1` বসাও (quote ছাড়া, কারণ এটা import করা variable)

## Resume PDF যোগ করতে চাইলে
- `public/` ফোল্ডার বানিয়ে তার ভেতরে `resume.pdf` রাখো (project root এ, `src/` এর বাইরে)
- `data.js` এ `resumeUrl: '/resume.pdf'` এমনিতেই ঠিক আছে

## Folder structure (সংক্ষেপে)
```
portfolio/
├── src/
│   ├── assets/          → ছবি রাখার জায়গা
│   ├── data/data.js     → সব তথ্য (এইটাই মূল edit করার ফাইল)
│   ├── components/      → প্রতিটা section আলাদা ফাইল (Hero, About, Projects...)
│   ├── App.jsx          → সব section একসাথে জোড়া লাগানো হয়েছে এখানে
│   └── index.css        → global style
├── index.html
└── package.json
```

কোনো section এর layout/design বদলাতে চাইলে সরাসরি সেই component ফাইলে গিয়ে JSX এডিট করবে (যেমন Hero section এর layout বদলাতে চাইলে `src/components/Hero.jsx`)।
