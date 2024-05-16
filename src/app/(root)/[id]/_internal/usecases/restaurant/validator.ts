import { RestaurantItemSuccessResponseSchema } from "./schema"

export const validationRestaurantItemSuccessResponse = (input: unknown) => {
    return RestaurantItemSuccessResponseSchema.safeParse(input)
}