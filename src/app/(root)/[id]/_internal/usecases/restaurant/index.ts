import type { Fetcher } from "swr"
import type { RestaurantItemResponse } from "./interface";
import { validationRestaurantItemSuccessResponse } from "./validator";

export type * from "./interface"

export const useRestaurantByIdMutation: Fetcher<RestaurantItemResponse, string> = async (url: string) => {
    const headers = new Headers();
    headers.append("Accept", "application/json");

    const requestOptions = {
        headers,
        method: "GET",
    } satisfies RequestInit

    const res = await fetch(url, requestOptions)
    // Baris ini akan menghasilkan "Error langsung" pada client
    if (!res.ok) throw new Error("Data tidak ditemukan")
    const validation = validationRestaurantItemSuccessResponse(await res.json())
    if (!validation.success) throw new Error("Data tidak ditemukan")
    return validation.data
}