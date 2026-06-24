export const Footer = () => {
  // 🎨 COLORES CONFIGURABLES - Cambia solo aquí
  const footerBgColor = "bg-white";                    // Fondo del footer
  const footerShadow = "shadow-lg";                    // Sombra del footer
  const footerBorder = "border-t border-gray-200";     // Borde superior
  const textPrimaryColor = "text-gray-700";            // Color texto principal
  const linkColor = "text-brand-medium";
  const linkHoverColor = "hover:text-brand-dark";
  const linkUnderline = "hover:underline";             // Subrayado hover
  const fontWeightPrimary = "font-medium";             // Peso fuente principal
  const spacing = "py-8 px-6";                         // Espaciado interno
  const marginTop = "mt-12";                           // Margen superior

  return (
    <footer className={`${footerBgColor} ${footerShadow} ${footerBorder} ${spacing} ${marginTop}`}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Línea principal */}
        <p className={`${textPrimaryColor} ${fontWeightPrimary} mb-2 text-sm sm:text-base`}>
          Todos los Derechos Reservados –{" "}
          <a
            href="https://absolutouniversal.com"
            className={`${linkColor} ${linkHoverColor} ${linkUnderline} ${fontWeightPrimary} transition-colors`}
            target="_blank"
            rel="noopener noreferrer"
          >
            El Absoluto Universal - Tarot de Osho Zen
          </a>
        </p>

        {/* Línea decorativa opcional */}
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-brand-light to-brand-dark rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};