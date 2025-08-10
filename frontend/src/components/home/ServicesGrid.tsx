//Grid de servicios
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "psicoterapia-integrativa",
    title: "Psicoterapia Integrativa Holística",
    description: "Combina las técnicas psicológicas tradicionales con la terapia de radiestesia con péndulo hebreo y el Tarot terapéutico.",
    image: "/images/terapia1.jpg",
    link: "/servicios/psicoterapia-integrativa"
  },
  {
    id: "registros-akashicos", 
    title: "Lectura de Registros Akáshicos",
    description: "Conecta con tu alma para comprender tus aprendizajes y caminos.",
    image: "/images/akashicos.jpg",
    link: "/servicios/registros-akashicos"
  },
  {
    id: "tarot-predictivo",
    title: "Tarot Predictivo Terapeutico", 
    description: "Sesiones de Tarot para orientación, toma de decisiones y guía espiritual.",
    image: "/images/psicotarot.jpg",
    link: "/servicios/tarot-predictivo"
  },
  {
            id: "psicoeducacion",
          title: "Psicoeducación",
    description: "Talleres y cursos orientados a lograr la comprensión de la consciencia de unidad. La conexión con el ciclo cósmico y comprensión de la unidad universal.",
    image: "/images/psicoteria.png", 
            link: "/psicoeducacion"
  },
  {
    id: "pendulo-hebreo",
    title: "Péndulo Hebreo",
            description: "La terapia del péndulo hebreo es una técnica avanzada de radiestesia. Utiliza este péndulo para diagnosticar y tratar, trabajando específicamente sobre el cuerpo electromagnético (aura).",
    image: "/images/pendelo-hebreo.png",
    link: "/servicios/pendulo-hebreo"
  }
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          {/* Imagen */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          
          {/* Contenido */}
          <div className="p-6">
            <h3 className="text-xl font-lora-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              {service.title}
            </h3>
            
            <p className="text-purple-600 mb-4 leading-relaxed">
              {service.description}
            </p>
            
            <Link
              href={service.link}
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors group"
            >
              Ver más información
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}