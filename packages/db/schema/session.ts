import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "./user";
import { relations } from "drizzle-orm";

export const sessionsTable = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("userId").references(() => usersTable.id, {
    onDelete: "cascade",
  }),
  expiresAt: timestamp("expiresAt").notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
});

export const sessionsRelations = relations(sessionsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [sessionsTable.userId],
    references: [usersTable.id],
  }),
}));
