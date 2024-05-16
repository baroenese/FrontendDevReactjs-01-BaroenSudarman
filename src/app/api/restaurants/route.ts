import { validationRestaurantListSuccessResponses } from "./validator"

const GET_LIST_RESTAURANT = `https://restaurant-api.dicoding.dev/list`

function generateRandomPrice(min: number, max: number): number {
    const randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(2));
}

function generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
}

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const querySearch = searchParams.get("q")

    const headers = new Headers()
    headers.append("Accept", "application/json")

    const requestOptions = {
        headers,
        method: "GET",
    } satisfies RequestInit

    const res = await fetch(`${GET_LIST_RESTAURANT}?q=${querySearch}`, requestOptions)
    // Baris ini akan menghasilkan "Error langsung" pada client
    if (!res.ok) throw new Error("Data tidak ditemukan")
    // Validatio success data
    const validation = validationRestaurantListSuccessResponses(await res.json())
    if (!validation.success) throw new Error("Data tidak ditemukan")
    const { restaurants, ...itemWithoutRestaurants } = validation.data

    const result = restaurants.map((item) => {
        return {
            ...item,
            price: generateRandomPrice(100, 200),
            is_close: generateRandomBoolean(),
        }
    })    
    return Response.json({
        ...itemWithoutRestaurants,
        restaurants: result,
    })
}