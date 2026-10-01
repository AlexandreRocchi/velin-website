import rss from "@astrojs/rss";
import { getPosts } from "../lib/posts";
import { SITE } from "../lib/site";

export async function GET(context) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return rss({
    title: "Blog Vélin",
    description: SITE.description,
    site: new URL(`${base}/`, context.site),
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `${base}/blog/${p.id}/`,
    })),
    customData: "<language>fr-fr</language>",
  });
}
