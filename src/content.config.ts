import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    order: z.number().int().positive(),
    eyebrow: z.string(),
    role: z.string(),
    period: z.string(),
    platforms: z.array(z.string()).min(1),
    summary: z.string(),
    contribution: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    accent: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    technologies: z.array(z.string()).min(1),
    outcomes: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      }),
    ),
    challenges: z.array(z.string()).min(1),
    decisions: z.array(z.string()).min(1),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.url(),
        }),
      )
      .default([]),
    attribution: z.string(),
  }),
});

export const collections = { work };
