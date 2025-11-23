# Changelog

## [1.2.2] - 2024-11-23

### Added

- GitHub Actions workflow for automatic deployment to GitHub Pages on push to `main`.
- Deploy status badge in README.
- LinkedIn icon in navbar with hover effect.

### Changed

- Forced dark mode theme across the entire site (removed light mode classes).
- Updated all components to use dark colors only (`bg-gray-900`, `text-white`, etc.).
- Improved navbar transparency and glassmorphism effect.
- Enhanced ProjectCard styling with consistent dark theme.
- Updated README with live site URL and deployment info.

### Fixed

- Fixed GitHub Actions artifact conflict by separating build and deploy jobs.
- Corrected border-radius on ProjectCard (was missing space in class).
- Removed all `dark:` classes for a unified dark theme.

---

## [1.0.0] - 2025-07-31

### Added

- Initial portfolio structure with Next.js 15 and App Router.
- Hero section with portrait and intro.
- Projects section with category filter, grid, modal details.
- History section (Experience & Education) with animated timeline.
- About section with profile, tech stack, CV download.
- Footer with dynamic version and release link.
- Responsive Navbar with logo, links, contact dialog (Radix UI).
- Theme toggle (light/dark mode).
- Custom Tailwind component styles.
- Integration of Framer Motion for animations.
- Contact dialog with Formspree integration.

### Changed

- Improved responsive design for mobile and desktop.
- Refined grid and card alignment in Projects.
- Updated About section with tech logos and download button.
- Enhanced Navbar with glassmorphism and subtle border.
- Added validation to contact form.

### Fixed

- Fixed asset paths for GitHub Pages deployment.
- Removed unnecessary basePath/assetPrefix for user repo.
- Corrected image and icon loading issues.
- Improved modal accessibility and scroll behavior.

---

## [0.9.0] - 2025-07-15

### Added

- Project cards and modal.
- Timeline component for history.
- Initial deployment scripts for GitHub Pages.

---

## [0.1.0] - 2025-07-01

### Added

- Project bootstrapped with create-next-app.
