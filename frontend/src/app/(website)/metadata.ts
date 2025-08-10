import { Metadata } from 'next';

export const metadata: Metadata = {
  icons: '/favicon.ico',
  metadataBase: new URL('https://www.absolutouniversal.com'),
  openGraph: {
    title: 'El Absoluto Universal',
    description: 'Psicoterapia Holística y Servicios Espirituales.',
    url: 'https://www.absolutouniversal.com',
    siteName: 'El Absoluto Universal',
    images: [
      {
        url: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753151623/logo_vwzf9j.png?v=20250723',
        width: 1200,
        height: 630,
        alt: 'El Absoluto Universal',
      },
    ],
  },
};
