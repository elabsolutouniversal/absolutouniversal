// types/servicio.ts
export interface Servicio {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export const servicios: Servicio[] = [
  {
    title: "Sanacion integrativa holística",
    slug: "sanacion-integrativa-holistica",
    image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154284/terapiaIntegrativa-holiticia-2_itvxcj.jpg",
    description: "Combino recursos de la psicología moderna con radiestesia mediante péndulo hebreo y Tarot terapéutico para liberar bloqueos y guiarte hacia una sanación integral.",
  },
  // {
  //   title: "Lectura de Registros Akáshicos",
  //   slug: "registros-akashicos",
  //   image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg",
  //   description: "Conecta con tu alma para comprender tus aprendizajes y caminos.",
  // },
  {
    title: "Tarot Predictivo Terapéutico",
    slug: "tarot-predictivo",
   image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154045/tarot-predictivo-terapeutico_blkb6c.jpg",
    description: "Sesiones de Tarot para orientación, toma de decisiones y guía espiritual.",
  },
  {
    title: "Psico educación Consciente",
    slug: "psico-educacion-consciente",
    image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg",
    description: "Talleres y cursos orientados a lograr la comprensión de la consciencia de unidad. La conexión con el ciclo cósmico y comprensión de la unidad universal.",
  },
  {
    title: "Péndulo Hebreo",
    slug: "pendulo-hebreo",
        image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154206/pendulo-hebreo-1_n1lavx.jpg",

    description: "La terapia del péndulo hebreo es una técnica avanzada de radioestesia. Utiliza este péndulo para diagnosticar y tratar, trabajando específicamente sobre el cuerpo electromagnético (aura).",
   }
  // {
  //   title: "Entretenimiento y Eventos Sociales",
  //   slug: "entrenimiento-sociales",
  //   image: "/images/evento-social.jpg",
  //   description: "Lleva el misterio del tarot a tus eventos. Lecturas divertidas y reveladoras para entretener a tus invitados con un toque mágico y personalizado.",
  // }
];