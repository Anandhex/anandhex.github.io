/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // This is necessary as GitHub Pages doesn't support image optimization
  },
};

export default nextConfig;
