import React from 'react';
import { serviciosDataLecturaRegistros, audienciaDataLecturaRegistros, lecturaRegistrosImages } from '@/data/servicios/lectura-registros-akashicos/lectura-registros-akashicos';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const LecturaRegistrosAkashicos: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">Lectura de Registros Akáshicos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {lecturaRegistrosImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image src={image.src} alt={image.alt} width={500} height={300} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-600 mb-6">¿Qué puedes esperar de una sesión?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosDataLecturaRegistros.map(servicio => (
            <div key={servicio.id} className="bg-purple-50 p-6 rounded-lg flex items-start">
              <div className="text-purple-600 mr-4">{servicio.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{servicio.titulo}</h3>
                <p className="text-gray-700">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-pink-600 mb-6">¿Es para ti si...?</h2>
        <ul className="space-y-4">
          {audienciaDataLecturaRegistros.map(item => (
            <li key={item.id} className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-800">{item.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LecturaRegistrosAkashicos;
