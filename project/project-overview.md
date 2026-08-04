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

- `src/views/` — Main page entry points and layout templates
- `src/components/` — Reusable UI blocks and small interactive widgets (currently empty)
- `server/` — Express API server and local preview logic
  - `server/controllers/` — Request handlers
  - `server/database/` — Database configuration (if needed)
  - `server/middleware/` — Express middleware
  - `server/models/` — Data models
  - `server/routes/` — API route definitions
  - `server/utils/` — Helper utilities
- `public/` — Static assets for branding, icons, and images
  - `public/css/` — Global styles organized by layer (tokens, base, components, utilities)
  - `public/assets/` — Images, JSON data, and other static files
- `scripts/` — Helper scripts for setup and validation (not yet created)

---

# 4. Important Files

| File | Purpose |
|------|---------|
| `README.md` | Project documentation and usage notes |
| `astro.config.mjs` | Astro app configuration and integrations |
| `package.json` | Scripts and dependencies |
| `src/views/index.astro` | Main resume page (currently empty) |
| `server/server.js` | Express API and production preview server |
| `public/css/main.css` | Main CSS entry point with layer imports |
| `public/css/tokens/` | Design tokens (colors, variables, fonts) - currently placeholders |
| `public/css/base/` | Reset and base element styles |
| `public/css/components/` | Component-specific styles |
| `public/css/utilities/` | Utility classes |

**Note:** Some files referenced in the original plan (like `src/data/resume.js`) have not yet been created. The resume content is currently hardcoded in `server/server.js`.

---

# 5. Current Progress

### Completed

- Stack selection is defined and aligned to the requested Astro + Svelte + Express setup
- Initial project structure exists with proper directory organization
- Express server is functional with API endpoint and static file serving
- CSS architecture is set up with proper layer organization (@layer tokens, base, components, utilities)
- Basic CSS reset and token file structure are in place

### In Progress

- Populating CSS token files with actual design values (colors, fonts, variables)
- Building out the main resume page in `src/views/index.astro`
- Creating reusable components in `src/components/`
- Deciding on data flow strategy (static vs API-driven content)
- Adding actual resume content and personal details

### Planned

- Create `src/data/` directory with structured resume data file
- Add finer content sections such as certifications, achievements, or contact CTA
- Improve accessibility and dark/light theme flexibility
- Add a stronger personal branding aesthetic if desired
- Implement Svelte components for interactive elements (if needed)
- Add print-friendly styles for PDF export
- Set up deployment pipeline and hosting target

---

# 6. Known Issues

### High Priority

- No production deployment pipeline or hosting target has been chosen yet
- Main resume page (`src/views/index.astro`) needs to be built out
- CSS token files need actual design values
- Resume content needs to be replaced with personal details

### Medium Priority

- The project is intentionally generic right now and needs custom content soon
- Express server could benefit from health route and logging enhancements
- Need to decide on data flow: static generation vs API-driven content
- `src/components/` directory needs initial components

### Low Priority

- There is no advanced animation or motion design yet
- Additional personalization and portfolio sections may be added later
- Theme toggle functionality could be added for dark/light mode

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
