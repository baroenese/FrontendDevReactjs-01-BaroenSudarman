import { z } from "zod";
import { RestaurantItemSuccessResponseSchema, RestaurantItemSchema } from "./schema";

export type RestaurantItemResponse = z.infer<typeof RestaurantItemSuccessResponseSchema>

export type RestaurantItem = z.infer<typeof RestaurantItemSchema>