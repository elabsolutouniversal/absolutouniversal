'use client';

import { Footer } from '@/components/ui/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import { FLORAL_BACKGROUND_URL } from '@/constants/floralBackground';
import { SITE_LOGO_ALT, SITE_LOGO_MARK_URL } from '@/constants/siteLogo';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col relative">
      {/* Fondo con imagen */}
      <div 
        className="absolute top-0 left-0 right-0 h-[100vh] z-0"
        style={{
          backgroundImage: `url('${FLORAL_BACKGROUND_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Header con efecto glassmorphism mejorado */}
      <header className="relative z-20 bg-white/40 backdrop-blur-md border-b border-white/30">
        <span className="absolute top-1 right-3 text-[10px] sm:text-xs text-gray-400/70 select-none pointer-events-none">
          71427321893
        </span>
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 py-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Image
              src={SITE_LOGO_MARK_URL}
              alt={SITE_LOGO_ALT}
              width={96}
              height={96}
              className="h-16 w-16 sm:h-[84px] sm:w-[84px] lg:h-24 lg:w-24 shrink-0 rounded-xl object-contain"
              priority
            />
            <span className="flex flex-col text-lg sm:text-2xl 2xl:text-3xl font-lora-bold-normal leading-tight whitespace-nowrap text-brand-dark">
              <span>EL ABSOLUTO</span>
              <span>UNIVERSAL</span>
            </span>
          </Link>

          {/* NAVBAR DESKTOP */}
          <Navbar isMobile={false} />

          {/* HAMBURGUESA MÓVIL */}
          <button
            className="xl:hidden shrink-0 text-brand-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* NAVBAR MÓVIL */}
        {isOpen && <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />}
      </header>

      {/* Contenido principal */}
      <main className="relative z-20">
        {children}
      </main>

      {/* Contenido después de la imagen de fondo */}
      <div className="relative bg-white">
        <Footer />
        <WhatsappButton />
      </div>
    </div>
  );
}