import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.kirlosyousef.com',
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
