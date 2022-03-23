import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

process.on("SIGINT", () =>
  dt.close(() => {
    console.log("Closed database.");
    process.exit(0);
  })
);

export default db;
