import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* config options here */
  images: {
    domains: ['plus.unsplash.com','images.unsplash.com','undraw.co','images.remotePatterns'],
  },
};

export default nextConfig;
