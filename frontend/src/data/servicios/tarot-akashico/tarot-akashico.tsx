// @/data/servicios/tarot-akashico.ts
import { Heart, Eye, Users, Star, Triangle, Sparkles, Target, Compass, RotateCcw, Scale } from 'lucide-react'
import { Servicio, AudienciaItem } from '@/types/servicios/tarot-terapeutico'
import { ImageData } from '@/types/servicios/tarot-terapeutico';

// Datos de servicios del Tarot Akáshico
export const serviciosDataTarotAkashico: Servicio[] = [
  {
    id: 1,
    icon: <Sparkles className="w-6 h-6" />,
    titulo: "Conexión con los Registros Akáshicos",
    descripcion: "Accede a la sabiduría de tus vidas pasadas y tu propósito actual a través del tarot como llave a los registros."
  },
  {
    id: 2,
    icon: <Scale className="w-6 h-6" />,
    titulo: "Sanación de patrones kármicos",
    descripcion: "Identifica y libera patrones y deudas kármicas que afectan tu presente para avanzar con mayor libertad."
  },
  {
    id: 3,
    icon: <Heart className="w-6 h-6" />,
    titulo: "Guía para tu misión de vida",
    descripcion: "Recibe orientación clara sobre tu propósito de alma y los pasos a seguir para alinearte con él."
  },
  {
    id: 4,
    icon: <Eye className="w-6 h-6" />,
    titulo: "Claridad en relaciones y vínculos del alma",
    descripcion: "Comprende la naturaleza de tus conexiones álmicas y sana las relaciones importantes en tu vida."
  },
  {
    id: 5,
    icon: <Users className="w-6 h-6" />,
    titulo: "Integración de dones y talentos",
    descripcion: "Descubre y activa los dones y talentos de vidas pasadas para enriquecer tu experiencia actual."
  }
]

// Datos de audiencia objetivo del Tarot Akáshico
export const audienciaDataTarotAkashico: AudienciaItem[] = [
  {
    id: 1,
    icon: <Scale className="w-5 h-5" />,
    texto: "Sientes un llamado a comprender tu propósito de vida a un nivel más profundo."
  },
  {
    id: 2,
    icon: <Target className="w-5 h-5" />,
    texto: "Buscas sanar patrones repetitivos que no logras resolver por otros medios."
  },
  {
    id: 3,
    icon: <RotateCcw className="w-5 h-5" />,
    texto: "Deseas conectar con la sabiduría de tu alma y tus guías espirituales."
  },
  {
    id: 4,
    icon: <Triangle className="w-5 h-5" />,
    texto: "Necesitas claridad sobre tus relaciones y los contratos álmicos que las rigen."
  },
  {
    id: 5,
    icon: <Heart className="w-5 h-5" />,
    texto: "Estás listo para liberar bloqueos energéticos y kármicos que limitan tu potencial."
  },
  {
    id: 6,
    icon: <Star className="w-5 h-5" />,
    texto: "Quieres integrar tus dones espirituales y talentos de una manera práctica y consciente."
  },
  {
    id: 7,
    icon: <Sparkles className="w-5 h-5" />,
    texto: "Buscas una herramienta de autoconocimiento que combine la estructura del tarot con la profundidad de los Registros Akáshicos."
  },
  {
    id: 8,
    icon: <Compass className="w-5 h-5" />,
    texto: "Deseas recibir mensajes y guía de tus ancestros y maestros espirituales."
  }
]


export const tarotAkashicoImages: ImageData[] = [
    {
      src: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154045/tarot-predictivo-terapeutico_blkb6c.jpg",
      alt: "Sesión de Tarot Akáshico",
      title: "",
      subtitle: ""
    },
    {
      src: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442586/IMG_3680_klmwz2.jpg",
      alt: "Terapia con Tarot Akáshico",
      title: "",
      subtitle: ""
    },
    {
      src: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3665_s4whct.jpg",
      alt: "",
      title: "",
      subtitle: ""
    },
    {
      src: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442586/IMG_3670_baozpb.jpg",
      alt: "Profesional en Tarot Akáshico",
      title: "",
      subtitle: ""
    }
     
  ]
