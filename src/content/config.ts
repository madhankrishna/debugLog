import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    readTime: z.string(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blogs };
