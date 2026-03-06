import { z, defineCollection } from 'astro:content';

// ─── Blog Collection ──────────────────────────────────────────────────────────
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:        z.string(),
    description:  z.string(),
    publishDate:  z.coerce.date(),
    updatedDate:  z.coerce.date().optional(),
    tags:         z.array(z.string()).default([]),
    draft:        z.boolean().default(false),
    readingTime:  z.number().optional(), // minutes, auto-calc if not set
    featured:     z.boolean().default(false),
  }),
});

// ─── Apps Collection ──────────────────────────────────────────────────────────
const apps = defineCollection({
  type: 'content',
  schema: z.object({
    name:           z.string(),
    tagline:        z.string(),
    description:    z.string(),
    appStoreUrl:    z.string().url().optional(),
    websiteUrl:     z.string().url().optional(),
    status:         z.enum(['live', 'beta', 'development', 'discontinued']).default('live'),
    platform:       z.array(z.string()).default([]),   // e.g. ['iOS', 'Android', 'Web']
    category:       z.string(),
    tags:           z.array(z.string()).default([]),
    launchDate:     z.coerce.date().optional(),
    featured:       z.boolean().default(false),
    icon:           z.string().optional(), // path to icon in public/
    screenshots:    z.array(z.string()).default([]), // paths in public/
    accentColor:    z.string().default('#5B4FCF'), // hex for app theming
    // Legal — if false, generic policy pages are used
    hasCustomPrivacy: z.boolean().default(false),
    hasCustomTerms:   z.boolean().default(false),
  }),
});

export const collections = { blog, apps };
