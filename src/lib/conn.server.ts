import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { pets } from './schema';

export const conn = drizzle(sql);
export { pets };
