import { z } from 'astro:content';

export const blogschema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    modified: z.string(),
    image: z.string(),
    pined: z.boolean()
  })

export const portfolioschema = z.object({
    title: z.string(),
    description: z.string(),
    started: z.string(),
    finished: z.string().optional(),
    image: z.string(),
    projectLink: z.string().url(),
    language: z.enum(["Ocaml", "Julia", "Python", "Typescript", "C++"]).optional()
  })


export interface blogg {
  title: string;
  date: string;
  description: string;
  url: string;
  image: string;
  pined: boolean;
};