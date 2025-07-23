// app/(public)/layout.tsx
import Header from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import type { Metadata } from 'next';
import WhatsappButton from '@/components/ui/WhatsappButton';

export const metadata: Metadata = {
  icons: '/favicon.ico',
  openGraph: {
    images: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753151623/logo_vwzf9j.png?v=20250723',
  },
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}