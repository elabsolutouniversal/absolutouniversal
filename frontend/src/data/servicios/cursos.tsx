import { Course } from "@/types/servicios/cursos";
// import { BookOpen } from "lucide-react";

export const courses: Course[] = [
  {
    id: '1',
    title: 'Curso de Tarot Terapéutico Egipcio Kier',
    slug: 'tarot-predictivo-terapeutico',
    description: 'Aprende a interpretar el Tarot con enfoque terapéutico para el autoconocimiento.',
    resumen: 'Dominio profesional del Tarot Egipcio Kier aplicado al desarrollo personal y al acompañamiento terapéutico.',
    contenido: [
      'Arcanos mayores y menores (significado terapéutico)',
      'Tiradas para el autoconocimiento',
      'Protocolos de consulta terapéutica',
      'Ética profesional en lecturas',
      'Casos prácticos y supervisiones'
    ],
    fechaInicio: 'Próximamente',
    duracion: '5 meses',
    image: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1754677952/El-ojo-de-Ra_sbdeqb.jpg',
    icon: 'BookOpen',
    price: '$500.00',
    precioOriginal: '$500.00',
    incluye: []
  }
];