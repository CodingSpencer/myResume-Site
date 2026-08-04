# My Resume Site

**Last Updated:** 2026-08-04

**Current Status:** Planning / Early Implementation

**Primary Goal:** Create a polished, personal resume website that presents experience, skills, and projects clearly while also being easy to maintain and customize.

---

# 1. Project Summary

My Resume Site is a personal portfolio and resume website intended to present a professional profile in a clean, modern format. The site is built to be easy to update as career details change and to look refined enough to share with recruiters, clients, and collaborators.

This project is meant for a single user who wants a lightweight personal website with strong typography, minimal friction, and a simple data model for resume content. It should feel modern and credible without becoming unnecessarily complex.

The main features include:

- One-page resume layout with sections for summary, experience, education, and projects
- Responsive design that works on desktop and mobile
- Fast static front-end generation via Astro
- Optional Svelte components for lightweight interactive pieces
- Express backend to expose a simple API and local preview server

---

# 2. Tech Stack

- **Frontend:** Astro + Svelte + CSS
- **Backend:** Express.js
- **Rendering Model:** Static site generation with optional dynamic API data
- **Hosting:** Local development and self-hosted deploy targets
- **Major Libraries & Frameworks:** Astro, Svelte, Express, Vite

---

# 3. Project Structure

- `src/pages/` — Main page entry points and layout templates
- `src/components/` — Reusable UI blocks and small interactive widgets
- `src/data/` — Resume content and structured profile data
- `src/styles/` — Shared design tokens and global styles
- `server/` — Express API server and local preview logic
- `public/` — Static assets for branding, icons, and images
- `scripts/` — Helper scripts for setup and validation

---

# 4. Important Files

| File | Purpose |
|------|---------|
| `README.md` | Project documentation and usage notes |
| `astro.config.mjs` | Astro app configuration and integrations |
| `package.json` | Scripts and dependencies |
| `src/pages/index.astro` | Main resume page |
| `src/data/resume.js` | Structured resume content |
| `src/styles/global.css` | Global layout and design styling |
| `server/index.js` | Express API and production preview server |

---

# 5. Current Progress

### Completed

- Stack selection is defined and aligned to the requested Astro + Svelte + Express setup
- Initial project structure exists and is ready for UI work
- Core resume content model has been created
- Base resume page layout is in place

### In Progress

- Refining the typography, spacing, and visual hierarchy for a polished profile page
- Deciding how much interactivity to add without making the page heavy
- Preparing the API and static content workflow for local preview and deployment

### Planned

- Add finer content sections such as certifications, achievements, or contact CTA
- Improve accessibility and dark/light theme flexibility
- Add a stronger personal branding aesthetic if desired
- Support profile data loading via API for easier future content updates

---

# 6. Known Issues

### High Priority

- No production deployment pipeline or hosting target has been chosen yet
- Static page is still using sample resume content rather than personal details

### Medium Priority

- The project is intentionally generic right now and needs custom content soon
- Express server is simple but could benefit from health route and logging enhancements

### Low Priority

- There is no advanced animation or motion design yet
- Additional personalization and portfolio sections may be added later

---

# 7. Next Steps

1. Replace the placeholder resume details with the real personal information.
2. Tighten the visual design to match a professional portfolio aesthetic.
3. Add a downloadable PDF or print-friendly resume view.
4. Add a contact section or call-to-action with social links.
5. Improve the API to serve the resume data from a real source if desired.
6. Validate the site on mobile and desktop before finalizing.

---

# 8. Development Guidelines

- Keep the site easy to edit from one structured data file.
- Prefer clean typography and generous whitespace over crowded layouts.
- Use Astro for page structure and keep Svelte for discrete interactive pieces only.
- Keep the API small and focused; it should support the site, not become a larger service.
- Maintain accessibility and readable contrast across all sections.
- Design for print and quick scanning by hiring managers.

---

# 9. Additional Notes

This project is meant to be a professional personal landing page rather than a full application. The best result is a crisp, impressive resume page that clearly communicates background, capability, and fit without unnecessary complexity.

A strong future enhancement would be a versioned content model, where each resume section is easy to update in one file and can be reused to generate both a web page and a print-ready resume. This keeps the project maintainable while still feeling lightweight and modern.
