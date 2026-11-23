import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    author: z.string().default('老探实测组'),
  }),
});

const brands = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    updatedDate: z.coerce.date(),
  }),
});

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    updatedDate: z.coerce.date(),
  }),
});

export const collections = { blog, brands, topics };
