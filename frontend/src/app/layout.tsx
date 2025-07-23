
// app/layout.tsx (RAÍZ)
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  icons: '/favicon.ico',
  openGraph: {
    images: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753151623/logo_vwzf9j.png?v=20250723',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}