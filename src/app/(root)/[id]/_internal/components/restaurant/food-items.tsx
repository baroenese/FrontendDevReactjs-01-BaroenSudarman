import { RestaurantItem } from "../../usecases/restaurant"

interface FoodItemsProps {
    menus: RestaurantItem["menus"]
}

export const FoodItems = ({
    menus
}: FoodItemsProps) => {
    return (
        <div className="flex flex-col gap-6">
            {Array.isArray(menus.foods) && menus.foods.length > 0 ? (
                <div>
                    <div className="text-xl text-slate-700 leading-5 font-semibold">Makanan</div>
                    <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {menus.foods.map((item) => {
                            return (
                                <div key={item.name} className="p-8 rounded-xl shadow-sm hover:shadow border border-slate-200">
                                    <div className="text-sm text-slate-600 leading-5 font-medium">{item.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : null}

        </div>
    )
}