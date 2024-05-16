import { z } from "zod"
import { EnvSchema } from "./schema"

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof EnvSchema> { }
    }
}

export function getEnv() {
    return {
        MODE: process.env.NODE_ENV,
    }
}

type ENV = ReturnType<typeof getEnv>

declare global {
    var ENV: ENV
    interface Window {
        ENV: ENV
    }
}

export const mutationKey = {
    LIST_RESTAURANT_URL: `${process.env.NEXT_PUBLIC_RESTAURANT_INSTANCE_URL}/list`,
    DETAIL_RESTAURANT_URL: `${process.env.NEXT_PUBLIC_RESTAURANT_INSTANCE_URL}/detail`,
    SEARCH_RESTAURANT_URL: `${process.env.NEXT_PUBLIC_RESTAURANT_INSTANCE_URL}/search`,
    REVIEW_RESTAURANT_URL: `${process.env.NEXT_PUBLIC_RESTAURANT_INSTANCE_URL}/review`,
} as const

export const IMAGES_RESTAURANT_URL = `${process.env.NEXT_PUBLIC_RESTAURANT_INSTANCE_URL}/images` as const

