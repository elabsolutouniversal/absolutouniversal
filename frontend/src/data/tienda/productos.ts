export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  precioOriginal?: number;
  categoria: 'cuarzos' | 'vestidos' | 'pendulos' | 'tarots' | 'herramientas' | 'libros';
  imagen: string;
  stock: number;
  destacado?: boolean;
  tags: string[];
}

export const productos: Producto[] = [
  // CUARZOS
  {
    id: 'cuarzo-1',
    nombre: 'Cuarzo Cristal Natural',
    descripcion: 'Cuarzo cristal natural de alta vibración para meditación y sanación energética',
    precio: 25.00,
    precioOriginal: 35.00,
    categoria: 'cuarzos',
    imagen: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 15,
    destacado: true,
    tags: ['meditación', 'sanación', 'energía']
  },
  {
    id: 'cuarzo-2',
    nombre: 'Cuarzo Rosa',
    descripcion: 'Cuarzo rosa para el amor propio y la sanación emocional',
    precio: 30.00,
    categoria: 'cuarzos',
    imagen: 'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 12,
    tags: ['amor', 'sanación emocional', 'armonía']
  },
  {
    id: 'cuarzo-3',
    nombre: 'Amatista Natural',
    descripcion: 'Amatista para protección espiritual y conexión con lo divino',
    precio: 45.00,
    categoria: 'cuarzos',
    imagen: 'https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 8,
    tags: ['protección', 'espiritualidad', 'paz']
  },

  // PÉNDULOS
  {
    id: 'pendulo-1',
    nombre: 'Péndulo Hebreo',
    descripcion: 'Péndulo hebreo tradicional para consultas y radiestesia',
    precio: 55.00,
    categoria: 'pendulos',
    imagen: 'https://res.cloudinary.com/dhhjcvwll/image/upload/v1753153968/pendulo-hebreo_fnvk0o.jpg',
    stock: 5,
    destacado: true,
    tags: ['radiestesia', 'consultas', 'tradicional']
  },
  {
    id: 'pendulo-2',
    nombre: 'Péndulo de Cuarzo',
    descripcion: 'Péndulo de cuarzo cristal para consultas energéticas',
    precio: 40.00,
    categoria: 'pendulos',
    imagen: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 10,
    tags: ['energía', 'consultas', 'cuarzo']
  },

  // TAROTS
  {
    id: 'tarot-1',
    nombre: 'Tarot Egipcio Kier',
    descripcion: 'Mazo de tarot egipcio Kier para lecturas terapéuticas',
    precio: 85.00,
    categoria: 'tarots',
    imagen: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 3,
    destacado: true,
    tags: ['egipcio', 'terapéutico', 'profesional']
  },
  {
    id: 'tarot-2',
    nombre: 'Tarot Rider Waite',
    descripcion: 'Tarot clásico Rider Waite para principiantes y expertos',
    precio: 65.00,
    categoria: 'tarots',
    imagen: 'https://images.pexels.com/photos/6992752/pexels-photo-6992752.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 7,
    tags: ['clásico', 'universal', 'iniciación']
  },

  // VESTIDOS
  {
    id: 'vestido-1',
    nombre: 'Vestido de Ceremonia',
    descripcion: 'Vestido ceremonial para rituales y meditaciones',
    precio: 120.00,
    categoria: 'vestidos',
    imagen: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 4,
    tags: ['ceremonial', 'ritual', 'meditación']
  },
  {
    id: 'vestido-2',
    nombre: 'Túnica de Meditación',
    descripcion: 'Túnica cómoda para sesiones de meditación y yoga',
    precio: 95.00,
    categoria: 'vestidos',
    imagen: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 6,
    tags: ['meditación', 'yoga', 'comodidad']
  },

  // HERRAMIENTAS
  {
    id: 'herramienta-1',
    nombre: 'Incienso de Sándalo',
    descripcion: 'Incienso natural de sándalo para purificación y meditación',
    precio: 15.00,
    categoria: 'herramientas',
    imagen: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 20,
    tags: ['purificación', 'meditación', 'aroma']
  },
  {
    id: 'herramienta-2',
    nombre: 'Vela Aromática',
    descripcion: 'Vela aromática de lavanda para relajación y armonía',
    precio: 12.00,
    categoria: 'herramientas',
    imagen: 'https://images.pexels.com/photos/6478102/pexels-photo-6478102.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 25,
    tags: ['relajación', 'armonía', 'lavanda']
  },

  // LIBROS
  {
    id: 'libro-1',
    nombre: 'Guía de Tarot Terapéutico',
    descripcion: 'Manual completo para aprender tarot con enfoque terapéutico',
    precio: 45.00,
    categoria: 'libros',
    imagen: 'https://images.pexels.com/photos/159872/book-address-book-learning-learn-159872.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 10,
    tags: ['aprendizaje', 'terapéutico', 'manual']
  },
  {
    id: 'libro-2',
    nombre: 'Los Secretos del Péndulo',
    descripcion: 'Aprende radiestesia y el arte del péndulo desde cero',
    precio: 38.00,
    categoria: 'libros',
    imagen: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 8,
    tags: ['radiestesia', 'péndulo', 'guía']
  },
  {
    id: 'libro-3',
    nombre: 'Cristales y Chakras',
    descripcion: 'Guía completa sobre el uso de cristales para equilibrar chakras',
    precio: 42.00,
    categoria: 'libros',
    imagen: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 12,
    destacado: true,
    tags: ['cristales', 'chakras', 'sanación']
  },

  // MÁS CUARZOS
  {
    id: 'cuarzo-4',
    nombre: 'Cuarzo Citrino',
    descripcion: 'Cuarzo citrino para abundancia y prosperidad',
    precio: 35.00,
    categoria: 'cuarzos',
    imagen: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 9,
    tags: ['abundancia', 'prosperidad', 'éxito']
  },
  {
    id: 'cuarzo-5',
    nombre: 'Obsidiana Negra',
    descripcion: 'Obsidiana negra para protección y purificación energética',
    precio: 28.00,
    categoria: 'cuarzos',
    imagen: 'https://images.pexels.com/photos/1029619/pexels-photo-1029619.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 14,
    tags: ['protección', 'purificación', 'energía']
  },
  {
    id: 'cuarzo-6',
    nombre: 'Cuarzo Verde',
    descripcion: 'Cuarzo verde para la sanación del corazón y equilibrio emocional',
    precio: 32.00,
    categoria: 'cuarzos',
    imagen: 'https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 11,
    tags: ['corazón', 'equilibrio', 'emocional']
  },

  // MÁS PÉNDULOS
  {
    id: 'pendulo-3',
    nombre: 'Péndulo de Amatista',
    descripcion: 'Péndulo de amatista para consultas espirituales profundas',
    precio: 48.00,
    categoria: 'pendulos',
    imagen: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 7,
    tags: ['espiritual', 'consultas', 'amatista']
  },
  {
    id: 'pendulo-4',
    nombre: 'Péndulo Espiral Dorado',
    descripcion: 'Péndulo en espiral dorado para consultas avanzadas',
    precio: 65.00,
    categoria: 'pendulos',
    imagen: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 4,
    destacado: true,
    tags: ['avanzado', 'dorado', 'espiral']
  },

  // MÁS TAROTS
  {
    id: 'tarot-3',
    nombre: 'Tarot de Marsella',
    descripcion: 'Tarot tradicional de Marsella para lecturas clásicas',
    precio: 58.00,
    categoria: 'tarots',
    imagen: 'https://images.pexels.com/photos/6992752/pexels-photo-6992752.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 6,
    tags: ['tradicional', 'marsella', 'clásico']
  },
  {
    id: 'tarot-4',
    nombre: 'Tarot Angelical',
    descripcion: 'Cartas angelicales para guía espiritual y protección',
    precio: 72.00,
    categoria: 'tarots',
    imagen: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 5,
    tags: ['angelical', 'guía', 'protección']
  },
  {
    id: 'tarot-5',
    nombre: 'Oracle de los Chakras',
    descripcion: 'Cartas oracle para trabajar con los centros energéticos',
    precio: 55.00,
    categoria: 'tarots',
    imagen: 'https://images.pexels.com/photos/6992752/pexels-photo-6992752.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 8,
    tags: ['oracle', 'chakras', 'energía']
  },

  // MÁS VESTIDOS
  {
    id: 'vestido-3',
    nombre: 'Capa Ritual Negra',
    descripcion: 'Capa negra tradicional para ceremonias y rituales de luna nueva',
    precio: 85.00,
    categoria: 'vestidos',
    imagen: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 3,
    tags: ['ritual', 'ceremonia', 'luna nueva']
  },
  {
    id: 'vestido-4',
    nombre: 'Túnica Blanca Ceremonial',
    descripcion: 'Túnica blanca para rituales de purificación y sanación',
    precio: 110.00,
    categoria: 'vestidos',
    imagen: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 4,
    destacado: true,
    tags: ['purificación', 'sanación', 'ceremonial']
  },

  // MÁS HERRAMIENTAS
  {
    id: 'herramienta-3',
    nombre: 'Sahumerio de Palo Santo',
    descripcion: 'Palo santo peruano para limpieza energética y meditación',
    precio: 18.00,
    categoria: 'herramientas',
    imagen: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 15,
    tags: ['limpieza', 'palo santo', 'energía']
  },
  {
    id: 'herramienta-4',
    nombre: 'Cuenco Tibetano',
    descripcion: 'Cuenco tibetano artesanal para meditación y terapia de sonido',
    precio: 95.00,
    categoria: 'herramientas',
    imagen: 'https://images.pexels.com/photos/6478102/pexels-photo-6478102.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 6,
    destacado: true,
    tags: ['meditación', 'sonido', 'tibetano']
  },
  {
    id: 'herramienta-5',
    nombre: 'Aceite Esencial de Lavanda',
    descripcion: 'Aceite esencial puro de lavanda para aromaterapia y relajación',
    precio: 22.00,
    categoria: 'herramientas',
    imagen: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 18,
    tags: ['aromaterapia', 'relajación', 'lavanda']
  },
  {
    id: 'herramienta-6',
    nombre: 'Vara de Selenita',
    descripcion: 'Vara de selenita para limpieza y recarga de otros cristales',
    precio: 35.00,
    categoria: 'herramientas',
    imagen: 'https://images.pexels.com/photos/6478102/pexels-photo-6478102.jpeg?auto=compress&cs=tinysrgb&w=400',
    stock: 12,
    tags: ['limpieza', 'recarga', 'selenita']
  }
];

export const categorias = [
  { id: 'cuarzos', nombre: 'Cuarzos', icono: '💎' },
  { id: 'pendulos', nombre: 'Péndulos', icono: '🔮' },
  { id: 'tarots', nombre: 'Tarots', icono: '🎴' },
  { id: 'vestidos', nombre: 'Vestidos', icono: '👗' },
  { id: 'herramientas', nombre: 'Herramientas', icono: '🕯️' },
  { id: 'libros', nombre: 'Libros', icono: '📚' }
];

export const obtenerProductosPorCategoria = (categoria: string) => {
  return productos.filter(producto => producto.categoria === categoria);
};

export const obtenerProductosDestacados = () => {
  return productos.filter(producto => producto.destacado);
};

