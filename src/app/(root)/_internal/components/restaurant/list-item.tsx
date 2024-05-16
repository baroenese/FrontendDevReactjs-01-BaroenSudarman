import { IMAGES_RESTAURANT_URL } from "@/config"
import type { Restaurant } from "../../usecases/restaurant"
import { RestaurantImage } from "./restaurant-image"
import Link from "next/link"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface ListItemProps {
    items: Restaurant[]
}

export const ListItem = ({ items }: ListItemProps) => {
    return (
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {items.map((item) => (
                <div key={item.id} className="p-4 rounded-xl shadow-sm hover:shadow">
                    <div className="relative">
                        <div className="relative h-72 w-full overflow-hidden rounded-lg">
                            <RestaurantImage
                                src={`${IMAGES_RESTAURANT_URL}/medium/${item.pictureId}`}
                                alt={item.name}
                            />
                        </div>
                        <div className="relative mt-4">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <svg
                                            key={rating}
                                            className={classNames(
                                                item.rating > rating ? "text-yellow-400" : "text-gray-200",
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
                                <h3 className="text-sm font-medium text-slate-900">{item.rating}</h3>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="mt-1 text-sm text-slate-500">{item.name}</p>
                                {item.is_close ? (
                                    <p className="mt-1 text-sm text-red-500">Close</p>
                                ) : (
                                    <p className="mt-1 text-sm text-green-500">Open</p>
                                )}
                            </div>
                            <p className="mt-1 text-sm text-slate-500">💲{item.price}</p>
                        </div>
                        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                            />
                            <p className="relative text-lg font-semibold text-white">{item.city}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Link
                            href={`${item.id}`}
                            className="relative flex items-center justify-center rounded-md border border-transparent bg-slate-100 px-8 py-2 text-sm font-medium uppercase text-slate-600 hover:bg-slate-200"
                        >
                            Learn More<span className="sr-only">, {item.name}</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}