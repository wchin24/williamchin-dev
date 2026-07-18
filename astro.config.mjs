import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readFileSync, readdirSync } from 'node:fs';

// Legal pages that redirect to an external privacyUrl/termsUrl must stay out
// of the sitemap — Google flags sitemap entries that resolve to redirects.
const redirectOnlyPages = readdirSync('./src/content/apps').flatMap((file) => {
  const slug = file.replace(/\.mdx?$/, '');
  const frontmatter = readFileSync(`./src/content/apps/${file}`, 'utf8');
  const pages = [];
  if (/^privacyUrl:/m.test(frontmatter)) pages.push(`https://williamchin.dev/apps/${slug}/privacy/`);
  if (/^termsUrl:/m.test(frontmatter)) pages.push(`https://williamchin.dev/apps/${slug}/terms/`);
  return pages;
});

export default defineConfig({
  output: 'static',
  site: 'https://williamchin.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({ filter: (page) => !redirectOnlyPages.includes(page) }),
  ],
});
