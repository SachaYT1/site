import { PrismaClient } from "@/generated/prisma";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

declare global { var prisma: PrismaClient | undefined; }

const databaseUrl = process.env.DATABASE_URL;

// If DATABASE_URL points to a local SQLite file, use the default SQLite engine.
// Otherwise (libsql:// or http(s)://), use the libSQL driver adapter.
const useLibsqlAdapter = databaseUrl && !databaseUrl.startsWith("file:");

export const prisma: PrismaClient =
  global.prisma ||
  (useLibsqlAdapter
    ? new PrismaClient({
        adapter: new PrismaLibSQL({
          url: databaseUrl!,
          authToken: process.env.DATABASE_AUTH_TOKEN,
        }),
        log: ["error", "warn"],
      })
    : new PrismaClient({ log: ["error", "warn"] }));

if (process.env.NODE_ENV !== "production") global.prisma = prisma;