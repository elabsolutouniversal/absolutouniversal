import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'ui-avatars.com'],
    dangerouslyAllowSVG: true, // ← Esto permite SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Seguridad adicional
  }
};

export default nextConfig;