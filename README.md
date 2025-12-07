# Olas Farm Shop

A small Next.js (App Router) + Tailwind CSS site for selling farm fresh eggs, ready to deploy on Vercel.

## Stack
- Next.js (App Router)
- React
- Tailwind CSS

## Setup
```powershell
cd "c:\Websites\Olas Creations"
npm install
npm run dev
```

## Build
```powershell
npm run build
npm start
```

## Deploy to Vercel
- Create a Git repository and push.
- Import the repo on Vercel or use the Vercel CLI:
```powershell
npm i -g vercel
vercel login
vercel
```

- Note: During initial deployment we relaxed some pinned dependency versions and removed a custom `vercel.json` so Vercel can auto-detect Next.js. This resolved an `npm install` build error caused by unavailable package versions.

# Adding products
Edit `data/products.js` to add or modify products. Each product requires: `id`, `slug`, `name`, `description`, `price`, `unit`, `image`, `inStock`, and `category`.
