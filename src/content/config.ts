import { defineCollection, z } from "astro:content";

const pages = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

const products = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        price: z.number(),
        currency: z.string().default("USD"),
        image: z.string().min(1),
        topics: z.array(z.string()).default([]),
        related: z.array(z.string()).default([]),
        featureImage: z.string().min(1).optional(),
        featureImageAlt: z.string().optional(),
        nutritionTitle: z.string().default("Nutrition"),
        nutritionServing: z.string().default("per 50 g"),
        nutrition: z
            .array(
                z.object({
                    key: z.string(),
                    value: z.string(),
                })
            )
            .default([]),
    }),
});

export const collections = {
    pages,
    products,
};
