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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-brand-light/20">
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
        <h3 className="text-xl font-lora-semibold text-brand-dark mb-3 leading-tight">
          {title}
        </h3>
        <p className="font-lora text-brand-medium mb-4 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Botón */}
        <Link
          href={`/servicios/${slug}`}
          className="inline-block w-full text-center bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] hover:from-[#14B8A6] hover:to-[#0F766E] text-white font-lora-semibold py-3 px-4 rounded-full shadow-md shadow-teal-400/35 transition-all duration-300 transform hover:scale-105 font-normal-style"
        >
          Conocer más
        </Link>
      </div>
    </div>
  );
}