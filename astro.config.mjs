import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://williamchin.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
