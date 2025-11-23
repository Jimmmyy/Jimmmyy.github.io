# Jimmy Nguyen Portfolio 🚀

[![Deploy to GitHub Pages](https://github.com/Jimmmyy/Jimmmyy.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Jimmmyy/Jimmmyy.github.io/actions/workflows/deploy.yml)

A modern, responsive portfolio built with [Next.js](https://nextjs.org/) 15, Tailwind CSS, and Radix UI.

## ✨ Features

- 👤 **Hero section**: Portrait, intro, call-to-action.
- 🛠️ **Projects**: Category filter, animated grid, modal details.
- 📚 **History**: Experience & Education timeline.
- 💡 **About**: Profile, tech stack, CV download.
- 📬 **Contact**: Dialog modal with Formspree integration.
- 🌗 **Theme toggle**: Light/dark mode.
- 📱 **Responsive design**: Mobile & desktop friendly.
- 🎬 **Animations**: Framer Motion for smooth transitions.

## ⚡ Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## 🚢 Static Export & Deployment

To build and export for GitHub Pages:

```bash
pnpm build
pnpm run deploy
```

- The site is deployed from the `out` folder to the `gh-pages` branch.

## 📨 Contact Form

- Uses [Formspree](https://formspree.io/) for secure email submissions.
- Messages open in a new tab, keeping the portfolio open.

## 🖌️ Customization

- Update project data in [`src/components/Projects/data.ts`](src/components/Projects/data.ts).
- Add images/icons in [`public/images`](public/images) and [`public/icons`](public/icons).
- Change theme styles in [`src/styles/theme.css`](src/styles/theme.css).

## 📄 License

MIT © Jimmy Nguyen

---

## 📜 Changelog

See [`CHANGELOG.md`](CHANGELOG.md) for release history.

---

Made with ❤️ using Next.js & Tailwind CSS.
