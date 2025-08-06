//# Call to action de WhatsApp
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  return (
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-lora-bold-italic text-amber-800 mb-6">
          Estás a un paso de transformar tu vida
        </h2>
        
        <p className="text-lg md:text-xl font-lora text-amber-700 mb-8 leading-relaxed">
          El cambio empieza dentro de ti. Escucha a tu alma, honra tu proceso y permítete sanar con amor y conciencia.
        </p>
        
        <a
          href="https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20una%20sesion%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-normal-style"
        >
          <FaWhatsapp className="text-2xl" />
          Hablemos por WhatsApp
        </a>
      </div>
    </div>
  );
}