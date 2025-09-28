import { PrismaClient } from "@/generated/prisma";
import { PrismaLibSQL } from "@prisma/adapter-libsql";

declare global { var prisma: PrismaClient | undefined; }

const adapter = new PrismaLibSQL({
  url: process.env.DATABASE_URL!,              // libsql://....turso.io
  authToken: process.env.DATABASE_AUTH_TOKEN,  // токен из Turso
});

export const prisma: PrismaClient =
  global.prisma || new PrismaClient({ adapter, log: ["error", "warn"] });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;