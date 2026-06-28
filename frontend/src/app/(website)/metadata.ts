import { Metadata } from 'next';
import { SITE_LOGO_ALT, SITE_LOGO_URL } from '@/constants/siteLogo';

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
        url: SITE_LOGO_URL,
        width: 1200,
        height: 630,
        alt: SITE_LOGO_ALT,
      },
    ],
  },
};
