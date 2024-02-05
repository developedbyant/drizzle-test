import type { Config } from "drizzle-kit";

export default {
    schema: "./db/schema.ts",
    out: "./db/drizzle",
    driver:"better-sqlite",
    dbCredentials:{
        url:"./db/$.db"
    }
} satisfies Config;