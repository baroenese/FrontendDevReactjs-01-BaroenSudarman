import type { Fetcher } from "swr"
import type { RestaurantListResponses } from "./interface"
import { validationRestaurantListSuccessResponses } from "./validator"

export type * from "./interface"

export const getListRestaurantMutation: Fetcher<RestaurantListResponses, string> = async (url: string) => {
    const headers = new Headers()
    headers.append("Accept", "application/json")

    const requestOptions = {
        headers,
        method: "GET",
    } satisfies RequestInit

    const res = await fetch(url, requestOptions)
    // Baris ini akan menghasilkan "Error langsung" pada client
    if (!res.ok) throw new Error("Data tidak ditemukan")
    // Validatio success data
    const validation = validationRestaurantListSuccessResponses(await res.json())
    if (!validation.success) throw new Error("Data tidak ditemukan")
    return validation.data
}