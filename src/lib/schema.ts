import { pgTable, varchar } from 'drizzle-orm/pg-core';

export const pets = pgTable('pets', {
  name: varchar('name', { length: 255 }).notNull(),
  owner: varchar('owner', { length: 255 }).notNull(),
});
