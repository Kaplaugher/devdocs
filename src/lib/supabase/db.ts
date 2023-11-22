import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not set");

const client = postgres(process.env.DATABASE_URL as string);
const db = drizzle(client, schema);
const migrateDb = async () => {
  try {
    console.log("migrating client");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("migrated client");
  } catch (error) {
    console.log("error migrating client");
  }
};
migrateDb();
export default db;