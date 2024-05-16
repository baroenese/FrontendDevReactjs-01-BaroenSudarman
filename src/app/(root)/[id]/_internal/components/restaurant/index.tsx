"use client"

import Image from "next/image"
import { useRestaurantById } from "../../hooks/use-restaurant-by-id"
import { IMAGES_RESTAURANT_URL } from "@/config"
import Link from "next/link"
import { CustomerReviews } from "./cs-reviews"
import { DrinkItems } from "./drink-items"
import { FoodItems } from "./food-items"

interface RestaurantProps {
    id: string
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Restaurant({ id }: RestaurantProps) {
    const { data } = useRestaurantById(id)
    const restaurant = data?.restaurant

    if (!restaurant) {
        return (
            <div className="container mx-auto">
                <p>Please loading...</p>
            </div>
        )
    }
    return (
        <>
            <div className="container mx-auto mb-4">
                <ul role="link" className="flex space-x-3 text-sm text-slate-500 text-normal font-normal">
                    <li>
                        <Link
                            href="/"
                        >Home</Link>
                    </li>
                    <li>/</li>
                    <li>
                        <span className="">{restaurant.name}</span>
                    </li>
                </ul>
            </div>

            <div className="container mx-auto">
                <div className="flex space-x-4">
                    <div className="flex-shrink-0 overflow-hidden rounded-md border border-slate-200">
                        <Image
                            src={`${IMAGES_RESTAURANT_URL}/medium/${restaurant.pictureId}`}
                            alt={restaurant.name}
                            width={500}
                            height={500}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{restaurant.name}</h1>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <svg
                                key={rating}
                                className={classNames(
                                    restaurant.rating > rating ? "text-yellow-400" : "text-slate-200",
                                    "h-4 w-4 flex-shrink-0"
                                )}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                        ))}
                    </div>
                    <h3 className="text-sm font-medium text-slate-900">{3}</h3>
                </div>


                <p className="mt-4 text-slate-500">{restaurant.description}</p>
            </div>

            <div className="bg-slate-300 py-4 my-6">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-6">
                            <div className="text-sm text-slate-600 leading-6 font-normal">{restaurant.city}</div>
                            <div className="text-sm text-slate-600 leading-6 font-normal">{restaurant.address}</div>
                        </div>

                        <div className="flex">
                            <div className="flex gap-3">
                                {restaurant.categories.map((item) => {
                                    return (
                                        <div key={item.name} className="px-4 py-1 rounded-full bg-pink-500 text-xs text-white leading-5 font-medium">{item.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <FoodItems menus={restaurant.menus} />

                <div className="py-4"></div>

                <DrinkItems menus={restaurant.menus} />
            </div>

            <div className="container mx-auto mt-12">
                <CustomerReviews restaurant={restaurant} />
            </div>

            <div className="pb-12"></div>
        </>
    )
}