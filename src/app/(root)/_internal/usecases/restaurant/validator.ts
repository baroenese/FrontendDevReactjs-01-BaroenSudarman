import { RestaurantListSuccessResponsesSchema } from "./schema"

export const validationRestaurantListSuccessResponses = (input: unknown) => {
    return RestaurantListSuccessResponsesSchema.safeParse(input)
}