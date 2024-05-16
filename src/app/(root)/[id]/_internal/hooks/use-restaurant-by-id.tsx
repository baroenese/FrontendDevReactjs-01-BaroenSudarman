import useSWR from "swr"
import { mutationKey } from "@/config"
import { useRestaurantByIdMutation } from "../usecases/restaurant"

const keyMutation = `${mutationKey.DETAIL_RESTAURANT_URL}`

export const useRestaurantById = (id: string) => {
    const { data, isLoading, ...rest } = useSWR(`${keyMutation}/${id}`, useRestaurantByIdMutation)

    return {
        data,
        isLoading,
        ...rest
    }
}