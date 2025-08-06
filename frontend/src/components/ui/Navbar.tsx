"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  isMobile: boolean;
  closeMenu?: () => void;
};

export default function Navbar({ isMobile, closeMenu }: Props) {
  const pathname = usePathname();

  // 🎨 COLORES CONFIGURABLES - Cambia solo aquí
  const activeTextColor = "text-purple-700";           // Color texto activo
  const activeBorderColor = "border-purple-700";       // Color borde activo
  const inactiveTextColor = "text-gray-800";           // Color texto inactivo
  const hoverTextColor = "hover:text-purple-700";      // Color hover
  const mobileBgColor = "bg-white";                    // Fondo móvil
  const mobileActiveBg = "bg-purple-100";              // Fondo activo móvil
  const mobileActiveText = "text-purple-700";          // Texto activo móvil
  const mobileHoverBg = "hover:bg-purple-100";         // Hover fondo móvil
  const mobileHoverText = "hover:text-purple-700";     // Hover texto móvil

  const links = [
    { href: "/home", label: "Inicio" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/servicios", label: "Servicios" },
    { href: "/psico-educacion", label: "Psico Educacion" },
    { href: "/tienda", label: "Tienda" },
     { href: "/intranet", label: "Intranet" },
  ];

  // 🔧 FUNCIÓN PARA VERIFICAR SI EL LINK ESTÁ ACTIVO
  const isActive = (href: string) => {
    // Para "Inicio", activar tanto en "/" como en "/home"
    if (href === "/") {
      return pathname === "/" || pathname === "/home";
    }
    // Para otros links, comparación exacta
    return pathname === href;
  };

  const baseClass = "transition font-lora-semibold tracking-wide";
  const activeClass = `${activeTextColor} border-b-2 ${activeBorderColor}`;
  const inactiveClass = `${inactiveTextColor} ${hoverTextColor}`;

  return isMobile ? (
    <nav className={`md:hidden flex flex-col items-center px-6 pb-4 text-lg ${mobileBgColor}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={closeMenu}
          className={`w-full text-center py-2 rounded ${
            isActive(link.href) ? `${mobileActiveBg} ${mobileActiveText} font-lora-bold` : `${mobileHoverBg} ${mobileHoverText}`
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  ) : (
    <nav className="hidden md:flex space-x-8 text-lg">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${baseClass} ${
            isActive(link.href) ? activeClass : inactiveClass
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}