import { z } from "zod"

export const RestaurantItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    city: z.string(),
    address: z.string(),
    pictureId: z.string(),
    categories: z.object({
        name: z.string(),
    }).array(),
    menus: z.object({
        foods: z.object({
            name: z.string(),
        }).array(),
        drinks: z.object({
            name: z.string(),
        }).array(),
    }),
    rating: z.number(),
    customerReviews: z.object({
        name: z.string(),
        review: z.string(),
        date: z.string(),
    }).array(),
})

export const RestaurantItemSuccessResponseSchema = z.object({
    error: z.literal(false),
    message: z.literal("success"),
    restaurant: RestaurantItemSchema,
})