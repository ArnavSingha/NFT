# NFT Marketplace Landing Page

A modern NFT marketplace landing page built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Features

- **Home** - Hero section with NFT showcase, trending artworks, and popular artists
- **About** - Team members, company story, and statistics
- **Features** - Product features and category showcase
- **Pricing** - 3-tier pricing plans with FAQ section
- **Contact** - Contact form, info cards, and social links

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend_ass
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:5173/](http://localhost:5173/)

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🗂️ Project Structure

```
src/
├── components/
│   ├── layout/          # Shared layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageLayout.tsx
│   └── ui/              # Reusable UI components
├── screens/
│   ├── NftLandingPage/  # Home page
│   ├── AboutPage/       # About page
│   ├── FeaturesPage/    # Features page
│   ├── PricingPage/     # Pricing page
│   └── ContactPage/     # Contact page
├── App.tsx              # Main app with routing
└── index.tsx            # Entry point
```

## 🛣️ Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/features` | Features |
| `/pricing` | Pricing |
| `/contact` | Contact |

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Lucide React** - Icons