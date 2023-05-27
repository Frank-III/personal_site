import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export async function get(context) {
  const blogs = await getCollection('blogs');
  return rss({
    title: 'Franks’s Blog',
    description: 'A hopeless man\'s daydream',
    site: context.site,
    customData: '<language>en-us</language>',
    items: blogs.map((post) => ({
      title: post.data.title,
      pubDate:  dayjs(post.data.date, "DD-MM-YYYY").format("YYYY-MM-DD").toString(),
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/personal_site/blogs/${post.slug}/`,
    })),
  });
}