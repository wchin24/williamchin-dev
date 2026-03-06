import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: 'William Chin',
    description: 'Thoughts on product building, shipping apps, and the indie developer life.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map((post) => ({
        title:       post.data.title,
        pubDate:     post.data.publishDate,
        description: post.data.description,
        link:        `/blog/${post.slug}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}
