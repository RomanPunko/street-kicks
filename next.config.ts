import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sneakers.com.ua", 
      },
    ],
  },
};

export default nextConfig;
