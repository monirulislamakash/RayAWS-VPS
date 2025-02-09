import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
      },
      {
        protocol: 'https',
        hostname: 'kqenfstzpxtowvuhsbht.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint during production builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during build
  },
};

export default nextConfig;
