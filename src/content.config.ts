import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Zasebna kolekcija za poglavlja koja neće biti kontrolirana od strane Starlight-a
export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	chapters: defineCollection({
		schema: z.object({
			title: z.string(),
			chapterNumber: z.number().optional(),
			description: z.string().optional(),
			primaryColor: z.string().optional(),
			showBreadcrumb: z.boolean().optional(),
			breadcrumbPath: z.array(
				z.object({
					name: z.string(),
					url: z.string(),
				})
			).optional(),
		}),
	}),
};
