import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "./user";
import { relations } from "drizzle-orm";
export const accountsTable = pgTable("accounts", {
  id: text("id").primaryKey(),
  userId: text("userId").references(() => usersTable.id, {
    onDelete: "cascade",
  }),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  expiresAt: timestamp("expiresAt"),
  passwordHash: text("password"),
});

export const accountsRelations = relations(accountsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [accountsTable.userId],
    references: [usersTable.id],
  }),
}));
