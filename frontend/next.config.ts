// next.config.js (o .ts si lo tienes así)
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',               // explícito
        pathname: '/dhhjcvwll/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/api/**',
      },
    ],
    dangerouslyAllowSVG: true,
    // contentSecurityPolicy puedes quitarlo si no lo necesitas:
    // contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;",
  },
};

module.exports = nextConfig;
