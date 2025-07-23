// app/(public)/layout.tsx
import Header from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';

export const metadata = {
  icons: '/favicon.ico',
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