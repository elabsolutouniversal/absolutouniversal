"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar"; // importas el nuevo componente

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // 🎨 COLORES CONFIGURABLES - Cambia solo aquí
  const headerBg = "bg-white/90";          // Fondo del header
  const logoTextColor = "text-purple-700"; // Color del texto del logo
  const hamburgerColor = "text-purple-700"; // Color del botón móvil

  return (
    <header className={`${headerBg} backdrop-blur-md shadow-md sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753151623/logo_vwzf9j.png"
            alt="Logo El Absoluto Universal"
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-contain rounded-full"
            priority
          />
          <span className={`text-xl font-display ${logoTextColor}`}>
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