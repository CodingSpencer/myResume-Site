# SYSTEM OVERVIEW: My Resume Site

**System Purpose:** Present a professional resume and personal profile in a polished, easy-to-read website format while keeping the content maintainable and structured.

**Architecture Type:** Supervisor-Worker with lightweight content and presentation layers.

**Communication Protocol:** Shared JSON data between resume content, Astro page rendering, and Express API support.

## 1. GLOBAL CONSTRAINTS & RULES

Every agent interacting with this project must follow these rules:

1. **Prioritize readability:** The resume must remain easy to scan quickly by recruiters and hiring managers.
2. **Keep content structured:** Resume data should live in a clear source file rather than being embedded in scattered markup.
3. **Favor maintainability:** Updates should be simple without requiring deep refactoring.
4. **Respect performance:** Keep the page fast and light, especially for mobile viewing.
5. **Do not over-engineer:** This site should remain a clean personal portfolio rather than a full app ecosystem.

## 2. AGENT REGISTRY

- **Content Strategist:** Keeps the resume content concise, relevant, and current.
- **Design Agent:** Maintains a clean, professional visual system and strong responsive layout.
- **Frontend Agent:** Builds the Astro page structure and Svelte UI enhancements.
- **API Agent:** Provides express-backed data access and local preview support.
- **Quality Agent:** Reviews accessibility, speed, and content consistency.

## 3. DETAILED AGENT PROFILES

### Agent: Content Strategist

- **Role:** Owns the actual resume content and narrative.

- **Capabilities:**
  - Update profile summary, skills, and job history
  - Refine headline and value proposition
  - Keep the content objective and recruiter-friendly

- **Expected Input Format:**

```json
{
  "name": "Alex Morgan",
  "title": "Full-Stack Product Engineer",
  "experience": ["role", "company", "period"],
  "skills": ["JavaScript", "Astro"]
}
```

- **Expected Output Format:**

```json
{
  "headline": "I design and ship reliable digital experiences.",
  "summary": "Product-minded engineer with practical product and engineering experience.",
  "updatedSections": ["experience", "skills"]
}
```

- **Triggers:** Use this agent when resume facts, phrasing, or project details need updating.

---

### Agent: Design Agent

- **Role:** Shapes the website’s visual feel and readability.

- **Capabilities:**
  - Define typography and spacing
  - Structure sections for quick scanning
  - Keep layout polished on different screen sizes

- **Expected Input Format:**

```json
{
  "theme": "professional dark",
  "sections": ["profile", "experience", "skills", "projects"],
  "layout": "single-page"
}
```

- **Expected Output Format:**

```json
{
  "designSystem": {
    "colors": ["dark theme", "accent blue"],
    "typeScale": "large heading with calm body text"
  },
  "layoutNotes": "Strong hierarchy and readable spacing"
}
```

- **Triggers:** Use this agent when adjusting page polish, layout, or visual style.

---

### Agent: Frontend Agent

- **Role:** Builds pages and UI composition with Astro and Svelte.

- **Capabilities:**
  - Render the resume page from structured content
  - Add reusable UI components
  - Support responsive behavior and accessibility

- **Expected Input Format:**

```json
{
  "page": "resume",
  "dataSource": "src/data/resume.js",
  "components": ["header", "experience", "skills"]
}
```

- **Expected Output Format:**

```json
{
  "renderedPage": "resume page complete",
  "status": "success",
  "notes": ["responsive layout", "accessible markup"]
}
```

- **Triggers:** Use this agent when building or updating the page structure or UI elements.

---

### Agent: API Agent

- **Role:** Exposes a lightweight API for the project and local preview support.

- **Capabilities:**
  - Serve resume data through a simple endpoint
  - Provide local preview support for the app
  - Offer a reliable dev setup for testing and iteration

- **Expected Input Format:**

```json
{
  "resource": "profile",
  "endpoint": "/api/profile"
}
```

- **Expected Output Format:**

```json
{
  "status": "ok",
  "data": {
    "name": "Alex Morgan",
    "title": "Full-Stack Product Engineer"
  }
}
```

- **Triggers:** Use this agent when exposing data, wiring backend routes, or supporting local preview.

---

### Agent: Quality Agent

- **Role:** Reviews for polish, clarity, and technical consistency.

- **Capabilities:**
  - Check mobile responsiveness
  - Review for spacing and readability issues
  - Ensure content remains recruiter-friendly and concise

- **Expected Input Format:**

```json
{
  "page": "resume",
  "focus": ["accessibility", "readability", "speed"]
}
```

- **Expected Output Format:**

```json
{
  "issues": [],
  "passedChecks": ["responsive layout", "semantic markup"],
  "recommendations": ["Add print CSS"]
}
```

- **Triggers:** Use this agent before finalizing content or before release.

## 4. INTER-AGENT WORKFLOWS (Standard Operating Procedures)

### Workflow: Resume Content Update

1. **Step 1:** The Content Strategist updates experience, skills, or summary details.
2. **Step 2:** The Frontend Agent updates the layout in the page or data source.
3. **Step 3:** The Design Agent reviews readability and visual balance.
4. **Step 4:** The Quality Agent checks mobile and content clarity before sign-off.

### Workflow: Local Site Preview

1. **Step 1:** The API Agent starts the Express server.
2. **Step 2:** Astro serves the frontend in local dev mode.
3. **Step 3:** The Frontend Agent verifies the layout visually.
4. **Step 4:** The Quality Agent validates responsiveness and copy.

## 5. ERROR HANDLING & FALLBACKS

- **If the page data is missing:** Display a safe fallback and keep the layout intact.
- **If the API is unavailable:** Keep the static resume page rendering without breaking the site.
- **If a section lacks content:** Hide it gracefully or show a minimal placeholder.
- **If a design change creates clutter:** Reduce spacing and simplify structure before adding more content.
- **If mobile layout becomes cramped:** Collapse sections and reduce width-heavy elements.

---

## 6. MVP SUCCESS CRITERIA

This project is successful when it can:

- Present a professional, readable one-page resume
- Work cleanly on desktop and mobile screens
- Show career history, summary, skills, and projects clearly
- Be easy to update with a single structured content file
- Run locally with minimal setup friction

This site should feel polished and credible while remaining simple enough to update often.
