import { z } from "zod";

export const RestaurantSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    pictureId: z.string(),
    city: z.string(),
    rating: z.number(),
    price: z.number(),
    is_close: z.boolean(),
})

export const RestaurantListSuccessResponsesSchema = z.object({
    error: z.literal(false),
    message: z.literal("success"),
    count: z.number(),
    restaurants: z.array(RestaurantSchema),
})