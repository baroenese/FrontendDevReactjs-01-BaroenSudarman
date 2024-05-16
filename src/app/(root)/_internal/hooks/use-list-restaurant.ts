import useSWR from "swr"
import { getListRestaurantMutation } from "../usecases/restaurant"

const keyMutation = `/api/restaurants`

export const useListRestaurant = (search?: string | null) => {
    const { data, isLoading, ...rest } = useSWR(
        search ? `${keyMutation}?q=${search}` : keyMutation,
        getListRestaurantMutation
    )

    return {
        data,
        isLoading,
        ...rest
    }
}