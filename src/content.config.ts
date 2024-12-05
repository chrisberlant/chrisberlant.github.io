import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectLinkSchema = z.object({
	url: z.string(),
	text: z.string(),
	title: z.string(),
	type: z.enum(['repo', 'app']),
});

const projectTagsSchema = z.object({
	front: z.array(z.string()).optional(),
	back: z.array(z.string()).optional(),
	fullStack: z.array(z.string()).optional(),
	appType: z.array(z.string()).optional(),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		images: z.array(z.string()).optional(),
		links: z.array(projectLinkSchema),
		tags: projectTagsSchema,
	}),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { projects };
