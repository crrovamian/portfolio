import type { NextConfig } from "next";

const repoName = "portfolio" // cambia si tu repo tiene otro nombre
const nextConfig: NextConfig = {

  /* config options here */
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
