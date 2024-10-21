import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
const db = drizzle({
  connection: {
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "postgres",
  },
  schema,
});

export { schema, db };
