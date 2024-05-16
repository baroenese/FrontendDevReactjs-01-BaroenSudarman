import { z } from "zod";

export const RestaurantSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    pictureId: z.string(),
    city: z.string(),
    rating: z.number(),
})

export const RestaurantListSuccessResponsesSchema = z.object({
    error: z.literal(false),
    message: z.literal("success").optional(),
    count: z.number().optional(),
    founded: z.number().optional(),
    restaurants: z.array(RestaurantSchema),
})