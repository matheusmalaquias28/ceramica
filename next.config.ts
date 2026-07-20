import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@vercel/analytics", "@vercel/speed-insights"],
};

export default nextConfig;
