import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    modified: z.string(),
    image: z.string(),
  }),
});

const portfolioCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    started: z.string(),
    finished: z.string().optional(),
    image: z.string(),
    projectLink: z.string().url()
  }),
})

export const collections = {
  'blogs': blogCollection,
  'portfolio': portfolioCollection
};