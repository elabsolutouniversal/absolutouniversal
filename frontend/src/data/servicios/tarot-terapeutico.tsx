// Servicio Tarot

import React from 'react';
import { Heart, Eye, Users, Star, Triangle, Sparkles, Target, Compass, RotateCcw, Scale } from 'lucide-react';



export const serviciosDataTarotTerapeutico = [
  {
    id: 1,
    icon: <Sparkles className="w-6 h-6" />,
    titulo: "Detección de patrones, bucles y bloqueos",
    descripcion: "Identifica energías emocionales repetitivas que interfieren en tu vida y evita repetir errores o ciclos inconscientes."
  },
  {
    id: 2,
    icon: <Scale className="w-6 h-6" />,
    titulo: "Fortalecimiento del libre albedrío",
    descripcion: "El tarot no impone un destino, te muestra escenarios y te empodera para transformarlos."
  },
  {
    id: 3,
    icon: <Heart className="w-6 h-6" />,
    titulo: "Acompañamiento emocional",
    descripcion: "El Tarot te muestra; la psicoterapia te sostiene. Si emergen heridas o tensiones, se abordan con técnicas psicológicas."
  },
  {
    id: 4,
    icon: <Eye className="w-6 h-6" />,
    titulo: "Visión clara del presente y escenarios futuros",
    descripcion: "Explora opciones, caminos y obstáculos para tomar decisiones con claridad."
  },
  {
    id: 5,
    icon: <Users className="w-6 h-6" />,
    titulo: "Identificación de patrones internos y sucesos externos",
    descripcion: "Desde un enfoque Junguiano y Gestáltico, comprende cómo tu mundo interno influye en tu realidad."
  }
];

// Datos de audiencia objetivo
export const audienciaDataTarotTerapeutico = [
  {
    id: 1,
    icon: <Scale className="w-5 h-5" />,
    texto: "Frente a una decisión importante (relación, trabajo, cambio de vida)"
  },
  {
    id: 2,
    icon: <Target className="w-5 h-5" />,
    texto: "Si sientes incertidumbre sobre tu futuro"
  },
  {
    id: 3,
    icon: <RotateCcw className="w-5 h-5" />,
    texto: "Estás repitiendo situaciones sin entender por qué"
  },
  {
    id: 4,
    icon: <Triangle className="w-5 h-5" />,
    texto: "Si estás frente a cambios que te abruman y no sabes qué camino tomar"
  },
  {
    id: 5,
    icon: <Heart className="w-5 h-5" />,
    texto: "Si atraes al mismo tipo de pareja sin entender por qué: personas casadas, celosas o violentas"
  },
  {
    id: 6,
    icon: <Star className="w-5 h-5" />,
    texto: "Si no conoces tu misión de alma o la razón de estar en esta vida"
  },
  {
    id: 7,
    icon: <Sparkles className="w-5 h-5" />,
    texto: "O si simplemente deseas desarrollarte, ser alguien más coherente y estar en paz con tu pasado y tu presente"
  },
  {
    id: 8,
    icon: <Compass className="w-5 h-5" />,
    texto: "Si buscas claridad sin desconectarte de tu proceso emocional y espiritual"
  }
];