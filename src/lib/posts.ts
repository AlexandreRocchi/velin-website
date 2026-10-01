import { getCollection } from "astro:content";

/** Articles publiés (brouillons visibles seulement en développement), du plus récent au plus ancien. */
export async function getPosts() {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/** Temps de lecture estimé à 220 mots par minute. */
export const readingTime = (body = "") => Math.max(1, Math.round(body.split(/\s+/).length / 220));
