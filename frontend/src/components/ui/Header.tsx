"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar"; // importas el nuevo componente
import { SITE_LOGO_ALT, SITE_LOGO_MARK_URL } from '@/constants/siteLogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // 🎨 COLORES CONFIGURABLES - Cambia solo aquí
  const headerBg = "bg-white/90";          // Fondo del header
  const logoTextColor = "text-brand-dark";
  const hamburgerColor = "text-brand-dark";

  return (
    <header className={`${headerBg} backdrop-blur-md shadow-md sticky top-0 z-50`}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 py-3">
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
          <span className={`flex flex-col text-lg sm:text-2xl 2xl:text-3xl font-lora-bold-normal leading-tight whitespace-nowrap ${logoTextColor}`}>
            <span>EL ABSOLUTO</span>
            <span>UNIVERSAL</span>
          </span>
        </Link>

        {/* NAVBAR DESKTOP */}
        <Navbar isMobile={false} />

        {/* HAMBURGUESA MÓVIL */}
        <button
          className={`xl:hidden shrink-0 ${hamburgerColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* NAVBAR MÓVIL */}
      {isOpen && <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />}
    </header>
  );
}