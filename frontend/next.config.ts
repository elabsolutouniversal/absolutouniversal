import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dhhjcvwll/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; img-src * data: blob:; sandbox;",
  },
};

export default nextConfig;
