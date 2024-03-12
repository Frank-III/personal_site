import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://Frank-III.github.io",
  base: "/personal_site",
  integrations: [react(), UnoCSS({
    injectReset: true
  }), db()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      langs: ["julia", "python", "bash", "ocaml", "scala"],
      wrap: true
    }
  }
});