import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: `postgresql://postgres:postgres@localhost:5432/postgres`,
  },
  // Pick up all our schema files
  schema: ["./schema/**/*.ts"],
  out: "./migrations",
});
