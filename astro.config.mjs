// Astro settings. "static" means the site is built into plain HTML files
// (in the dist/ folder), which Vercel can host with zero configuration.
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
});
