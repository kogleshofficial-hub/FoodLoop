# FoodLoop 🍱

> **Rescue surplus food. Reduce waste.**

FoodLoop is a web application exploring a simple idea: make it easier for surplus food to reach people who can use it instead of becoming waste.

## 🚀 Live app

**https://food-loop-app.vercel.app/**

## The problem

Usable food can become waste simply because there is no convenient way to let someone nearby know it is available.

FoodLoop turns that problem into a practical product workflow: publish surplus food, discover available listings, and request a pickup.

## 🔄 How it works

```text
Surplus food available
        ↓
Donor creates listing
        ↓
People discover it
        ↓
Someone requests pickup
        ↓
Donor accepts or declines
```

## ✨ Features

- 🔎 Discover available surplus food
- 📍 Browse listings by location
- 🍱 Publish surplus food with pickup details
- 🙋 Request food from another user
- ✅ Donors can accept or decline requests
- 🗑️ Owners can manage their own listings
- 🔐 Authentication with Supabase
- 🛡️ Row Level Security
- 📱 Responsive interface

## 🧠 Built as a real application

FoodLoop is more than a static landing page. Accounts, listings, and requests are backed by a real database and protected by access rules.

The project is intentionally an evolving MVP. The hard part is not only building the software — it is figuring out how a food-rescue system could work safely and practically in real communities.

## 🛠️ Tech stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL
- Supabase Row Level Security
- Vercel

## 💻 Run locally

```bash
npm install
npm run dev
```

Configure the required Supabase environment variables in `.env.local`.

**Never commit secrets or private credentials to GitHub.**

## 🌍 Production & discoverability

The application includes production metadata and search-engine configuration such as a sitemap and robots configuration.

## 🚧 Roadmap

Potential improvements include:

- Better trust and safety systems
- Moderation workflows
- Accessibility improvements
- Improved location discovery
- Notifications
- More practical tools for local food rescue

## 👨‍💻 Creator

Built independently by **Koglesh R. Murugan**, a 16-year-old developer from Malaysia.

I built FoodLoop to turn a real-world problem into something people can actually interact with, test, and improve.

## ⭐ Try it

**Live:** https://food-loop-app.vercel.app/

If you have ideas for making food rescue more useful or trustworthy, feedback is welcome.
