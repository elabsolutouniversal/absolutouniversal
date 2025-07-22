export const Footer = () => {
  // 🎨 COLORES CONFIGURABLES - Cambia solo aquí
  const footerBgColor = "bg-white";                    // Fondo del footer
  const footerShadow = "shadow-lg";                    // Sombra del footer
  const footerBorder = "border-t border-gray-200";     // Borde superior
  const textPrimaryColor = "text-gray-700";            // Color texto principal
  const textSecondaryColor = "text-gray-600";          // Color texto secundario
  const linkColor = "text-purple-700";                 // Color enlaces
  const linkHoverColor = "hover:text-purple-900";      // Hover enlaces
  const linkUnderline = "hover:underline";             // Subrayado hover
  const fontWeightPrimary = "font-medium";             // Peso fuente principal
  const fontWeightSecondary = "font-normal";           // Peso fuente secundario
  const spacing = "py-8 px-6";                         // Espaciado interno
  const marginTop = "mt-12";                           // Margen superior

  return (
    <footer className={`${footerBgColor} ${footerShadow} ${footerBorder} ${spacing} ${marginTop}`}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Línea principal */}
        <p className={`${textPrimaryColor} ${fontWeightPrimary} mb-2 text-sm sm:text-base`}>
          Todos los Derechos Reservados –{" "}
          <a
            href="https://elabsolutouniversal.com"
            className={`${linkColor} ${linkHoverColor} ${linkUnderline} ${fontWeightPrimary} transition-colors`}
            target="_blank"
            rel="noopener noreferrer"
          >
            El Absoluto Universal - Tarot de Osho Zen
          </a>
        </p>

        {/* Línea secundaria */}
        <p className={`${textSecondaryColor} ${fontWeightSecondary} text-xs sm:text-sm`}>
          Diseño y Desarrollo por{" "}
          <span className={`${linkColor} ${fontWeightPrimary}`}>
            Tu Equipo de Desarrollo Carlos Gonzalez
          </span>
        </p>

        {/* Línea decorativa opcional */}
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};