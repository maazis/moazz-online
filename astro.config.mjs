// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.moazz.co",

  vite: {
    plugins: [tailwindcss()],
  },
});