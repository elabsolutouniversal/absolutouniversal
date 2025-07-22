//Presentación de Dahiana

import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Foto de Dahiana */}
        <div className="mb-8">
          <Image
            src="https://res.cloudinary.com/dhhjcvwll/image/upload/v1753150894/about-profile_kuacih.jpg"
            alt="Psicoterapeuta Dahiana Velásquez"
            width={300}
            height={300}
            className="mx-auto rounded-full border-4 border-amber-300 shadow-xl"
          />
        </div>

        {/* Información profesional */}
        <h2 className="text-3xl md:text-4xl font-serif text-amber-800 mb-2">
          Lic Psic. Dahiana Velásquez G
        </h2>
        
        <h3 className="text-xl md:text-2xl text-amber-600 mb-6">
          Psicóloga y psicoterapeuta holística
        </h3>
        
        <p className="text-lg text-amber-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Soy Dahiana Velasquez de Lima – Perú
        </p>

        {/* Lista de herramientas */}
        <div className="bg-amber-50 rounded-lg p-8 max-w-3xl mx-auto">
          <h4 className="text-xl font-semibold text-amber-800 mb-6">
            Herramientas terapéuticas:
          </h4>
          <ul className="space-y-3 text-amber-700">
            <li className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Psicoterapia Integrativa Holística
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Registros akáshicos
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Psico Educación
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Tarot Predictivo con Enfoque Terapéutico
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}