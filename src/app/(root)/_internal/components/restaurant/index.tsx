"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useListRestaurant } from "../../hooks/use-list-restaurant"
import { ContentRestaurant } from "./content-restaurant"
import type { Restaurant } from "../../usecases/restaurant"

function getUniqueCategories(restaurants?: Restaurant[]): string[] {
    if (!restaurants) return []
    const categoriesSet: Set<string> = new Set();

    restaurants.forEach((restaurant) => {
        const words = restaurant.description.split(' ');
        words.forEach((word) => {
            if (word[0] === word[0].toUpperCase()) {
                categoriesSet.add(word);
            }
        });
    });
    return Array.from(categoriesSet);
}

export default function Restaurant() {
    const searchParams = useSearchParams();
    const vlc = searchParams.get("category")

    const pathname = usePathname();
    const { replace } = useRouter();

    const { data } = useListRestaurant(vlc)
    const restaurants = data?.restaurants
    const categories: string[] = getUniqueCategories(restaurants);

    function handleSearchCategory(value: string) {
        const params = new URLSearchParams(searchParams);
        if (value.length > 0) {
            params.set("category", value);
        } else {
            params.delete("category");
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="container mx-auto">
            <div className="py-2">
                <div className="border-t border-slate-300"></div>
                <div className="flex items-center space-x-6 py-4">
                    <div>Filter By:</div>
                    <div className="flex-1 flex items-center justify-between">
                        <div className="flex-1">
                            <form>
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <div className="relative flex gap-x-2">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="form-checkbox h-4 w-4 rounded-full border-gray-300 text-pink-600 focus:ring-pink-600"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="comments" className="font-medium text-gray-900">
                                                    Open Now
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="country" className="sr-only block text-sm font-medium leading-6 text-gray-900">
                                                Country
                                            </label>
                                            <div>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country-name"
                                                    className="form-select block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                >
                                                    <option>Price</option>
                                                    <option>Max</option>
                                                    <option>Min</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="category" className="sr-only block text-sm font-medium leading-6 text-gray-900">
                                                Category
                                            </label>
                                            <div>
                                                <select
                                                    value={vlc?.toString() || ""}
                                                    id="category"
                                                    name="category"
                                                    autoComplete="category-name"
                                                    className="form-select block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    onChange={(event) => {
                                                        handleSearchCategory(event.target.value)
                                                    }}
                                                >
                                                    <option value="">Categories</option>
                                                    {categories.map((item) => {
                                                        return (
                                                            <option key={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="w-32 py-2 rounded-lg bg-slate-200 hover:bg-slate-200/80 uppercase inline-flex justify-center text-center text-sm text-slate-600 hover:text-slate-500 font-medium"
                            >
                                Clear All
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-b border-slate-300"></div>
            </div>

            {Array.isArray(restaurants) && restaurants.length > 0 ? (
                <ContentRestaurant restaurants={restaurants} />
            ) : null}
        </div>
    )
}