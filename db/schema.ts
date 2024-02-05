import { sql } from "drizzle-orm";
import { integer,text, sqliteTable, } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
    id: integer('id').primaryKey(),
    fullName: text("fullName").notNull(),
    email: text("email").notNull().unique(),
    role: text("role",{ enum:[ "user","admin","editor" ] }).notNull().unique(),
    password: text("password").notNull(),
    createdAt: text("createAt").default(sql`CURRENT_TIMESTAMP`).notNull()
});

export const books = sqliteTable('books',{
    id: integer("id").primaryKey(),
    title: text("title").notNull(),
    byUserId: integer("byUserId").notNull().references(()=> users.id)
})