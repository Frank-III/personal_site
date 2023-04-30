import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    modified: z.string(),
    image: z.string(),
    tag: z.string().array().optional()
  }),
});

const portfolioCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    started: z.string(),
    finished: z.string().optional(),
    image: z.string(),
    projectLink: z.string().url(),
    language: z.enum(["Ocaml", "Julia", "Python", "Typescript", "C++"]).optional()
  }),
})

export const collections = {
  'blogs': blogCollection,
  'portfolio': portfolioCollection
};