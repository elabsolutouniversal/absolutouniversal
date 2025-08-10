'use client';

import Header from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/home';

  // Si estamos en la página de inicio, solo renderizamos el contenido
  if (isHomePage) {
    return children;
  }

  // Para todas las demás páginas, mostramos el layout completo
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
