'use client';

import { Footer } from '@/components/ui/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/ui/Navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col relative">
      {/* Fondo con imagen */}
      <div 
        className="absolute top-0 left-0 right-0 h-[100vh] z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dhhjcvwll/image/upload/v1754843228/bosque_orquideas_luminoso_1_rc734f.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Header con efecto glassmorphism mejorado */}
      <header className="relative z-20 bg-white/40 backdrop-blur-md border-b border-white/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753151623/logo_vwzf9j.png"
              alt="Logo El Absoluto Universal"
              width={65}
              height={65}
              className="w-[65px] h-[65px] object-contain rounded-full"
              priority
            />
            <span className="text-2xl font-lora-bold-normal text-[#9D6BFF]">
              EL ABSOLUTO UNIVERSAL
            </span>
          </Link>

          {/* NAVBAR DESKTOP */}
          <Navbar isMobile={false} isTransparent={true} />

          {/* HAMBURGUESA MÓVIL */}
          <button
            className="md:hidden text-[#9D6BFF]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* NAVBAR MÓVIL */}
        {isOpen && <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} isTransparent={true} />}
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