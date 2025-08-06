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
        <h2 className="text-3xl md:text-4xl font-lora-bold text-amber-800 mb-2">
          Lic Psic. Dahiana Velásquez G
        </h2>
        
        <h3 className="text-xl md:text-2xl font-lora-medium text-amber-600 mb-6">
          Psicóloga y psicoterapeuta holística
        </h3>
        
        <p className="text-lg font-lora text-amber-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Soy Dahiana Velasquez de Lima – Perú
        </p>

        {/* Lista de herramientas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-amber-100">
            <h4 className="font-lora-semibold text-amber-800 mb-3">Psicoterapia Holística</h4>
            <p className="font-lora text-amber-700 text-sm">
              Integración de técnicas tradicionales y alternativas para el bienestar integral
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-amber-100">
            <h4 className="font-lora-semibold text-amber-800 mb-3">Tarot Terapéutico</h4>
            <p className="font-lora text-amber-700 text-sm">
              Herramienta de autoconocimiento y desarrollo personal
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-amber-100">
            <h4 className="font-lora-semibold text-amber-800 mb-3">Sanación Energética</h4>
            <p className="font-lora text-amber-700 text-sm">
              Limpieza y armonización de campos energéticos
            </p>
          </div>
        </div>

        {/* Mensaje personal */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
          <p className="font-lora-italic text-lg text-amber-800 leading-relaxed">
            &ldquo;Mi misión es acompañarte en tu proceso de sanación y crecimiento personal, 
            proporcionándote herramientas para que puedas vivir una vida más plena y auténtica.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}