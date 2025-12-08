// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss()
    ]
  },
  site: 'https://alphawelders.netlify.app',

  integrations: [react(), sitemap()]
});