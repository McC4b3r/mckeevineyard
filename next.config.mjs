/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "d2gryjkdo4kdmg.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
