"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar"; // importas el nuevo componente
import { SITE_LOGO_ALT, SITE_LOGO_URL } from '@/constants/siteLogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // 🎨 COLORES CONFIGURABLES - Cambia solo aquí
  const headerBg = "bg-white/90";          // Fondo del header
  const logoTextColor = "text-brand-dark";
  const hamburgerColor = "text-brand-dark";

  return (
    <header className={`${headerBg} backdrop-blur-md shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={SITE_LOGO_URL}
            alt={SITE_LOGO_ALT}
            width={72}
            height={72}
            className="h-14 w-14 sm:h-[72px] sm:w-[72px] object-contain"
            priority
          />
          <span className={`text-xl font-lora-bold-normal ${logoTextColor}`}>
            EL ABSOLUTO UNIVERSAL
          </span>
        </Link>

        {/* NAVBAR DESKTOP */}
        <Navbar isMobile={false} />

        {/* HAMBURGUESA MÓVIL */}
        <button
          className={`md:hidden ${hamburgerColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* NAVBAR MÓVIL */}
      {isOpen && <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />}
    </header>
  );
}