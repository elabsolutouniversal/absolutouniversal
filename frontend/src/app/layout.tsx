
// app/layout.tsx (RAÍZ)
import { Lora } from 'next/font/google'
import type { Metadata } from 'next';
import './globals.css'
import { SITE_LOGO_ALT, SITE_LOGO_URL } from '@/constants/siteLogo';

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: '/favicon.ico',
  metadataBase: new URL('https://www.absolutouniversal.com'),
   title: 'El Absoluto Universal',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${lora.variable} font-lora`}>
        {children}
      </body>
    </html>
  )
}