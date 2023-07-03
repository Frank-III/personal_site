import { z } from 'astro:content';

export const blogschema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  modified: z.string(),
  isdraft: z.boolean(),
  image: z.string(),
  pined: z.boolean(),
  tags: z.string().array()
})

export const portfolioschema = z.object({
  title: z.string(),
  description: z.string(),
  started: z.string(),
  finished: z.string().optional(),
  image: z.string(),
  projectLink: z.string().url(),
  language: z.enum(["Ocaml", "Julia", "Python", "Typescript", "C++"]).optional(),
  status: z.string().emoji()
})


export interface blogg {
  title: string;
  date: string;
  description: string;
  url: string;
  image: string;
  pined: boolean;
  isdraft: boolean;
};