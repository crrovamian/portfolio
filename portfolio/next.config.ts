import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  // assetPrefix: `/${repoName}`,
};

export default nextConfig;
