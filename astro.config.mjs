import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import UnoCSS from 'unocss/astro';


// https://astro.build/config
export default defineConfig({
  site: 'https://Frank-III.github.io',
  base: '/personal_site',
  integrations: [
    react(), 
    UnoCSS({injectReset: true}),
  ],
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      langs: ["julia", "python", "bash"],
      wrap: true,
    },
  },
});