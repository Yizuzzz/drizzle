import { conn } from "$lib/db/conn.server";
import { PageInsights } from "$lib/db/schema";
import { eq } from "drizzle-orm";

export const load = () => {
    return { views: fetchViews() };
};

const fetchViews = async () => {
    const insights = await conn
        .select()
        .from(PageInsights)
        .where(eq(PageInsights.id, 1));

    const views = ++insights[0].views;

    await conn.update(PageInsights).set({ views }).where(eq(PageInsights.id, 1));

    return views;
}