import Image from "next/image"
import type { RestaurantItem } from "../../usecases/restaurant"

interface CustomerReviewsProps {
    restaurant: RestaurantItem
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

export const CustomerReviews = ({ restaurant }: CustomerReviewsProps) => {
    return (
        <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <div>
                <div className="border-b border-gray-200">
                    <ul className="-mb-px flex space-x-8">
                        <li
                            className="border-pink-600 text-slate-600 whitespace-nowrap border-b-2 py-6 text-sm font-semibold"
                        >
                            Customer Reviews
                        </li>
                    </ul>
                </div>

                <div className="-mb-10">
                    <h3 className="sr-only">Customer Reviews</h3>

                    {restaurant.customerReviews.map((item, reviewIdx) => (
                        <div key={item.name} className="flex space-x-4 text-sm text-gray-500">
                            <div className="flex-none py-10">
                                <Image
                                    src="/images/photo-1502685104226-ee32379fefbe.jpeg"
                                    className="h-10 w-10 rounded-full bg-gray-100"
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                                <h3 className="font-medium text-gray-900">{item.name}</h3>
                                <p>
                                    <time>{item.date}</time>
                                </p>

                                <div
                                    className="prose prose-sm mt-4 max-w-none text-gray-500"
                                    dangerouslySetInnerHTML={{ __html: item.review }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}