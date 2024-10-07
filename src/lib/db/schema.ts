// CADA VEZ QUE SE CAMBIE EL SCHEMA
// CORRER EN TERMINAL 
// NPM RUN MIGRATE

// LA CARPETA 'DRIZZLE' ES UN HISTORIAL DE TODAS LAS 
// MIGRACIONES HECHAS

import { integer, pgTable, serial } from "drizzle-orm/pg-core";

export const PageInsights = pgTable("page_insights", {
    id: serial("id").notNull(),
    views: integer("views").notNull(),
});