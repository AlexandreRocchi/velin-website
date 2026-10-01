import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Un article = un fichier Markdown dans src/content/blog/.
// Les fichiers commençant par « _ » (comme _modele.md) sont ignorés.
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default("Alexandre Rocchi"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
