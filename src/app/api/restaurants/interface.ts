import { z } from "zod";
import { RestaurantSchema, RestaurantListSuccessResponsesSchema } from "./schema";

export type Restaurant = z.infer<typeof RestaurantSchema>

export type RestaurantListResponses = z.infer<typeof RestaurantListSuccessResponsesSchema>