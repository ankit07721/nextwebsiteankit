/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  experimental: {
    appDir: true,
  },
  turbopack: {
    root: "./src", // tell Next.js that your "src" folder is the root
  },

};

export default nextConfig;
