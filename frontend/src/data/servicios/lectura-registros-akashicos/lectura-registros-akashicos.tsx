// @/data/servicios/lectura-registros-akashicos.ts
import { Heart, Eye, Users, Star, Triangle, Sparkles, Target, Compass, RotateCcw, Scale } from 'lucide-react'
import { Servicio, AudienciaItem } from '@/types/servicios/tarot-terapeutico'
import { ImageData } from '@/types/servicios/tarot-terapeutico';

// Datos de servicios de Lectura de Registros Akáshicos
export const serviciosDataLecturaRegistros: Servicio[] = [
  {
    id: 1,
    icon: <Sparkles className="w-6 h-6" />,
    titulo: "Acceso Directo a tus Registros Akáshicos",
    descripcion: "Conexión profunda con la memoria de tu alma para obtener guía, claridad y sanación directamente de la fuente."
  },
  {
    id: 2,
    icon: <Scale className="w-6 h-6" />,
    titulo: "Liberación de Contratos y Votos Kármicos",
    descripcion: "Identifica y disuelve acuerdos de vidas pasadas que limitan tu crecimiento y bienestar en el presente."
  },
  {
    id: 3,
    icon: <Heart className="w-6 h-6" />,
    titulo: "Sanación de Heridas del Alma",
    descripcion: "Aborda y sana traumas profundos y heridas emocionales que arrastras a través del tiempo."
  },
  {
    id: 4,
    icon: <Eye className="w-6 h-6" />,
    titulo: "Claridad sobre tu Propósito de Vida",
    descripcion: "Recibe información clara y directa sobre tu misión, tus dones y cómo alinearte con tu verdadero propósito."
  },
  {
    id: 5,
    icon: <Users className="w-6 h-6" />,
    titulo: "Comprensión de Relaciones Kármicas",
    descripcion: "Entiende el propósito de las relaciones significativas en tu vida y resuelve conflictos desde una perspectiva espiritual."
  }
]

// Datos de audiencia objetivo de Lectura de Registros Akáshicos
export const audienciaDataLecturaRegistros: AudienciaItem[] = [
  {
    id: 1,
    icon: <Scale className="w-5 h-5" />,
    texto: "Buscas respuestas profundas y significativas que no has encontrado en otras terapias."
  },
  {
    id: 2,
    icon: <Target className="w-5 h-5" />,
    texto: "Sientes que hay bloqueos invisibles que te impiden avanzar en la vida."
  },
  {
    id: 3,
    icon: <RotateCcw className="w-5 h-5" />,
    texto: "Deseas conocer tu misión de alma y recibir guía directa de tus maestros y guías."
  },
  {
    id: 4,
    icon: <Triangle className="w-5 h-5" />,
    texto: "Quieres sanar relaciones conflictivas o patrones de conducta repetitivos."
  },
  {
    id: 5,
    icon: <Heart className="w-5 h-5" />,
    texto: "Estás en un proceso de despertar espiritual y buscas una conexión más profunda contigo mismo."
  },
  {
    id: 6,
    icon: <Star className="w-5 h-5" />,
    texto: "Necesitas liberar cargas del pasado para vivir un presente más pleno y consciente."
  },
  {
    id: 7,
    icon: <Sparkles className="w-5 h-5" />,
    texto: "Buscas claridad y paz interior frente a decisiones importantes o momentos de crisis."
  },
  {
    id: 8,
    icon: <Compass className="w-5 h-5" />,
    texto: "Deseas explorar y comprender la historia de tu alma a través de tus vidas pasadas."
  }
]


export const lecturaRegistrosImages: ImageData[] = [
    {
      src: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154045/tarot-predictivo-terapeutico_blkb6c.jpg",
      alt: "Sesión de Lectura de Registros Akáshicos",
      title: "",
      subtitle: ""
    },
    {
      src: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442586/IMG_3680_klmwz2.jpg",
      alt: "Terapia con Registros Akáshicos",
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
      alt: "Profesional en Registros Akáshicos",
      title: "",
      subtitle: ""
    }
     
  ]
