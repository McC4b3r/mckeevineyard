/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2gryjkdo4kdmg.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
