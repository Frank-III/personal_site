import { z, defineCollection } from 'astro:content';
import {blogschema, portfolioschema} from '../schemas'
const blogCollection = defineCollection({
  schema: blogschema
});

const portfolioCollection = defineCollection({
  schema: portfolioschema
})

export const collections = {
  'blogs': blogCollection,
  'portfolio': portfolioCollection
};