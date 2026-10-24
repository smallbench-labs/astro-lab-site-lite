import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), kind: z.enum(['paper', 'award', 'people', 'field']).default('people') }),
});
export const collections = { news };
