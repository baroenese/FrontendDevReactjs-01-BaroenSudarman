import Image from "next/image"

interface RestaurantImageProps {
    src: string
    alt: string
}

export const RestaurantImage = ({ src, alt }: RestaurantImageProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
        />
    )
}