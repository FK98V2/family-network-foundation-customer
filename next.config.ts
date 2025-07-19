import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      '27.254.134.159',
      'upload.wikimedia.org',
      'upload.wikimedia.org',
      'i.ytimg.com',
      'example.com',
    ], // อนุญาต hostname ของรูปภาพ
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '27.254.134.159',
        port: '9000',
        pathname: '/articles/**',
      },
    ],
  },
};

export default nextConfig;
