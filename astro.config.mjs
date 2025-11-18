import tailwindcss from "@tailwindcss/vite";
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://weighmybru.com', // Update with your actual domain
  integrations: [mdx(), sitemap()],
  
  // Build configuration for ESP32 Web Tools
  build: {
    format: 'directory',
  },

  vite: {
    plugins: [tailwindcss()],
    // Handle ESP32 Web Tools assets
    assetsInclude: ['**/*.bin', '**/*.json'],
  },
});
