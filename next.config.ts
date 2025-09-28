import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@prisma/client",
    "prisma",
    "@prisma/adapter-libsql",
    "@libsql/client",
    "@libsql/isomorphic-ws",
    "@libsql/hrana-client",
    "@libsql/core",
    "libsql",
  ],
  webpack: (config) => {
    // Allow dependencies that ship README/LICENSE files to be imported by bundler patterns
    config.module.rules.push({
      test: /\.(md|txt|license)$/i,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
