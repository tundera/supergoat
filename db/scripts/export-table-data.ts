#!/usr/bin/env node

import { paramCase } from "change-case";
import csv from "fast-csv";
import { promises as fs } from "fs";
import { join } from "path";
import { Pool, QueryResultRow } from "pg";
import prettier from "prettier";

const cwd = process.cwd();
const relativePathCsv = "services/db/backups/csv";
const relativePathJson = "services/db/backups/documents";

const tables = ["Team", "Coach", "Player", "ColorScheme"];

const pool = new Pool({
  host: process.env.PG_HOST as string,
  user: process.env.PG_USER as string,
  database: process.env.PG_DATABASE as string,
  port: Number(process.env.PG_PORT),
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

const exportAsCsv = async (data: QueryResultRow[], filePath: string) => {
  const csvData = await csv.writeToBuffer(data, { headers: true });
  await fs.writeFile(filePath, csvData, "utf8");
};

const exportAsJson = async (data: QueryResultRow[], filePath: string) => {
  const prettierConfig = await prettier.resolveConfig(
    join(process.cwd(), "./.prettierrc")
  );

  const formatted = prettier.format(JSON.stringify(data), {
    ...prettierConfig,
    parser: "json",
  });

  const jsonData = Buffer.from(formatted, "utf8");
  await fs.writeFile(filePath, jsonData, "utf8");
};

const exportTableData = async (name: string) => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(`SELECT * FROM "${name}"`);

    await exportAsCsv(
      rows,
      join(cwd, relativePathCsv, `${paramCase(name)}.csv`)
    );
    await exportAsJson(
      rows,
      join(cwd, relativePathJson, `${paramCase(name)}.json`)
    );
  } finally {
    client.release();
  }
};

const main = async () => {
  for (const table of tables) {
    try {
      await exportTableData(table);
      console.log(`Done exporting table "${table}"`);
    } catch (err) {
      console.log(err.stack);
    }
  }
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await pool.end();
    process.exit(0);
  });
