import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const app = express();
const port = Number(process.env.PORT || 3001);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');

app.use(cors());
app.use(express.json());

app.get('/api/profile', (_req, res) => {
  res.json({
    name: 'Alex Morgan',
    title: 'Full-Stack Product Engineer',
    location: 'Remote • Austin, TX',
    email: 'alex.morgan.dev@gmail.com',
    website: 'alexmorgan.dev',
    summary:
      'Product-minded engineer with 7+ years building resilient web products, dashboard tooling, and internal platforms for growing teams.',
    headline: 'I design and ship reliable digital experiences that help teams move faster and work smarter.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Astro', 'Svelte', 'Node.js', 'Express', 'SQL', 'UX Design'],
    experience: [
      {
        role: 'Senior Product Engineer',
        company: 'Northstar Labs',
        period: '2022 — Present',
        description: 'Led frontend architecture for internal analytics tools, improved deployment reliability, and shipped dashboard experiences that cut reporting time by 42%.'
      },
      {
        role: 'Frontend Engineer',
        company: 'BluePeak Studio',
        period: '2019 — 2022',
        description: 'Built scalable marketing and SaaS interfaces with a focus on performance, design consistency, and accessibility.'
      }
    ],
    education: [
      {
        school: 'University of Texas at Austin',
        degree: 'B.S. in Computer Science',
        period: '2013 — 2017'
      }
    ],
    projects: [
      {
        name: 'Ops Pulse',
        description: 'A real-time operations dashboard for internal incident response and service health monitoring.'
      },
      {
        name: 'Portfolio Builder',
        description: 'A configurable portfolio generator for creatives and freelancers that simplified personal brand publishing.'
      }
    ]
  });
});

if (existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('*', (_req, res) => {
    res.json({ message: 'Build not ready yet. Run npm run build before previewing the static site.' });
  });
}

app.listen(port, () => {
  console.log(`Express API listening on http://localhost:${port}`);
});
