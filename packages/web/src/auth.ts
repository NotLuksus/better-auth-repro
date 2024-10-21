import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db, schema } from "db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.usersTable,
      session: schema.sessionsTable,
      account: schema.accountsTable,
      verificationsTable: schema.verificationsTable,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
});
