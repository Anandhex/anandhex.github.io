/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/anandhex.github.io",
  images: {
    unoptimized: true, // This is necessary as GitHub Pages doesn't support image optimization
  },
};

export default nextConfig;
