// @ts-check
import { defineConfig } from "astro/config";

// Publication sur GitHub Pages : https://alexandrerocchi.github.io/velin-website/
// Avec un domaine personnalisé, remplacer `site` et retirer `base`.
export default defineConfig({
  site: "https://alexandrerocchi.github.io",
  base: "/velin-website",
  trailingSlash: "ignore",
});
