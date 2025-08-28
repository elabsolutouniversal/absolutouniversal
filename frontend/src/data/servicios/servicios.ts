// types/servicio.ts
export interface Servicio {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export const servicios: Servicio[] = [
  {
          title: "Sanación integrativa holística",
    slug: "sanacion-integrativa-holistica",
    image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1754076008/IMG_3626_xznh7g.jpg",
    description: "El Metodo SATHAYA  combina recursos de la psicología moderna, terapias holisticas y los registros akashicos.",
  },
  // {
  //   title: "Lectura de Registros Akáshicos",
  //   slug: "registros-akashicos",
  //   image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg",
  //   description: "Conecta con tu alma para comprender tus aprendizajes y caminos.",
  // },
  {
    title: "Tarot Predictivo con Enfoque Terapéutico",
    slug: "tarot-predictivo",
   image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442586/IMG_3680_klmwz2.jpg",
    description: "Sesiones de Tarot para orientación, toma de decisiones y guía espiritual.",
  },
  {
    title: "El Askasha",
    slug: "tarot-akashico",
    image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3724_bpugkm.jpg",
    description: "Acceso a la memoria universal, las cartas actuan como puertas simbolicas que facilita el acceso a la memorias profunda explorando aprendizajes karmicos y bloqueos transpersonales.",
  },
  // {
  //   title: "Lectura de Registros Akáshicos",
  //   slug: "lectura-registros-akashicos",
  //   image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153757/terapia-integrativa-holistica_czqzhs.jpg",
  //   description: "A traves de este proceso se logra sanaciòn de patrones destructivos generacionales ",
  // },
  {
          title: "Psicoeducación Consciente",
            slug: "psicoeducacion-consciente",
    image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753442587/IMG_3608_ug76nv.jpg",
    description: "Talleres y cursos orientados a lograr la comprensión de la consciencia de unidad. La conexión con el ciclo cósmico y comprensión de la unidad universal.",
  },
  {
    title: "Péndulo Hebreo",
    slug: "pendulo-hebreo",
        image: "https://res.cloudinary.com/dhhjcvwll/image/upload/v1753154206/pendulo-hebreo-1_n1lavx.jpg",

            description: "La terapia del péndulo hebreo es una técnica avanzada de radiestesia. Utiliza este péndulo para diagnosticar y tratar, trabajando específicamente sobre el cuerpo electromagnético (aura).",
   }
  // {
  //   title: "Entretenimiento y Eventos Sociales",
  //   slug: "entrenimiento-sociales",
  //   image: "/images/evento-social.jpg",
  //   description: "Lleva el misterio del tarot a tus eventos. Lecturas divertidas y reveladoras para entretener a tus invitados con un toque mágico y personalizado.",
  // }
];