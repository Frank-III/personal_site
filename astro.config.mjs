import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import UnoCSS from 'unocss/astro';


// https://astro.build/config
export default defineConfig({
  site: 'https://Frank-III.github.io',
  base: '/personal_site',
  integrations: [react(), UnoCSS()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'vitesse-dark',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["julia", "python", "bash"],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});