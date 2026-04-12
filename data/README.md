# Portfolio Data Directory

This directory contains structured data exports from Juno Kim's professional portfolio for easy access by automated tools, LLMs, and recruiting bots.

## Available Data Formats

### JSON Endpoints (Machine Readable)
- `/projects.json` - Complete project data with technologies, achievements, and links
- `/profile.json` - Professional profile with skills, education, and contact information  
- `/resume.json` - Structured resume in JSON Resume format

### Markdown Documentation (Human + Machine Readable)
- `professional-summary.md` - Comprehensive professional overview
- Source data available at: `src/data/projects.ts` in the repository

## Data Structure

The portfolio uses a well-structured data model:

```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  github?: string;
  demo?: string;
  twitter?: string;
  slides?: string;
  video1?: string;
  video2?: string;
}
```

## Usage for Automated Tools

### For LLMs and AI Agents
- **Primary Source**: `/projects.json` and `/profile.json` contain complete structured data
- **Context**: `professional-summary.md` provides human-readable overview
- **Schema**: JSON-LD structured data embedded in HTML `<head>` of main site

### For Recruiting Tools
- **Resume Format**: `/resume.json` follows JSON Resume standard
- **Project Portfolio**: `/projects.json` with detailed achievements and tech stacks
- **Contact Info**: Available in both JSON endpoints and markdown summary

### For Search Engines
- **Sitemap**: `/sitemap.xml` lists all discoverable resources
- **Robots**: `/robots.txt` specifically allows access to JSON endpoints

## Data Updates

This data is manually curated and updated as projects are completed. The source of truth is the TypeScript data files in the repository:
- `src/data/projects.ts` - Project information
- `src/data/about.tsx` - Personal/professional details
- `src/constants/links.ts` - Contact information

## Repository Information

- **Live Site**: https://neontus.github.io
- **Source Code**: https://github.com/Neontus/Neontus.github.io
- **Technology**: Next.js static export with TypeScript
- **Deployment**: GitHub Pages

---

*Last Updated: April 8, 2026*