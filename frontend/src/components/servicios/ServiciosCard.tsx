import Image from 'next/image';
import Link from 'next/link';

interface ServicioCardProps {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export default function ServicioCard({ title, slug, image, description }: ServicioCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-100">
      {/* Imagen */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-pink-700 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Botón */}
        <Link
          href={`/servicios/${slug}`}
          className="inline-block w-full text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Conocer más
        </Link>
      </div>
    </div>
  );
}