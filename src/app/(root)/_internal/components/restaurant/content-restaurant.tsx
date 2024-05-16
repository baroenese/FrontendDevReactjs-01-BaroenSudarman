import type { Restaurant } from "../../usecases/restaurant"
import { ListItem } from "./list-item"

interface ContentRestaurantProps {
    restaurants: Restaurant[]
}

export const ContentRestaurant = ({ restaurants }: ContentRestaurantProps) => {
    return (
        <>
            <div className="p-8">
                <h2 className="text-2xl text-slate-700 leading-5 font-normal">All Restaurant</h2>

                <ListItem items={restaurants} />

                <div className="flex justify-center py-8">
                    <button
                        type="button"
                        className="relative flex items-center justify-center rounded-md border border-transparent bg-slate-100 px-8 py-2 text-sm font-medium uppercase text-slate-600 hover:bg-slate-200"
                    >
                        Load More
                    </button>
                </div>
            </div>
        </>
    )
}