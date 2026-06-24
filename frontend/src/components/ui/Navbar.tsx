"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  isMobile: boolean;
  closeMenu?: () => void;
};

export default function Navbar({ isMobile, closeMenu }: Props) {
  const pathname = usePathname();

  const links = [
    { href: "/home", label: "Inicio" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/servicios/sanacion-integrativa-holistica", label: "Metodo SATHYA" },
    { href: "/servicios", label: "Lecturas de Tarot" },
    { href: "/psicoeducacion", label: "Psicoeducación" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/tienda", label: "Tienda" },
   
  ];

  // 🔧 FUNCIÓN PARA VERIFICAR SI EL LINK ESTÁ ACTIVO
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/home";
    }
    return pathname === href;
  };

  return isMobile ? (
    <nav className="md:hidden flex flex-col items-center px-6 pb-6 text-xl bg-white/40 backdrop-blur-md">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={closeMenu}
          className={`w-full text-center py-4 font-lora-semibold ${
            isActive(link.href) 
              ? "text-brand-dark font-lora-bold"
              : "text-brand-medium hover:text-brand-dark"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  ) : (
    <nav className="hidden md:flex space-x-10 text-xl">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`font-lora-semibold tracking-wide ${
            isActive(link.href) 
              ? "text-brand-dark font-lora-bold border-b-2 border-brand-dark"
              : "text-brand-medium hover:text-brand-dark"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}