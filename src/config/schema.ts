import { z } from "zod"

export const EnvSchema = z.object({
    NODE_ENV: z.enum(["production", "development", "test"] as const),
    NEXT_PUBLIC_RESTAURANT_INSTANCE_URL: z.string(),
})