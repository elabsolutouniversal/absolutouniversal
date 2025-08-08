import { courses } from '@/data/servicios/cursos';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Users, Award, CheckCircle, BookOpen } from 'lucide-react';
import Image from 'next/image';


// Función auxiliar para obtener el curso (compartida)
async function fetchCourse(slug: string) {
  // Simulamos una operación asíncrona aunque los datos sean locales
  return await new Promise<typeof courses[0] | undefined>((resolve) => {
    resolve(courses.find((c) => c.slug === slug));
  });
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await fetchCourse(slug);

  if (!course) return notFound();
    return (
        <main className="bg-pink-50 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header del curso */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Imagen principal */}
                        <div className="md:w-1/2 relative">
                            <Image
                                src={course.image}
                                alt={course.title}
                                  width={400}         // ancho en px
                             height={240}    
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <h1 className="text-3xl font-bold text-white">
                                    {course.title}
                                </h1>
                            </div>
                        </div>

                        {/* Información básica */}
                        <div className="md:w-1/2 p-6 space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center text-pink-600">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    <span className="font-medium">
                                        Inicia: {course.fechaInicio}
                                    </span>
                                </div>
                                <div className="flex items-center text-pink-600">
                                    <Clock className="w-5 h-5 mr-2" />
                                    <span className="font-medium">
                                        Duración: {course.duracion}
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4">
                                {course.precioOriginal && (
                                    <span className="text-gray-400 line-through mr-2">
                                        {course.precioOriginal}
                                    </span>
                                )}
                                <span className="text-3xl font-bold text-pink-600">
                                    {course.price}
                                </span>
                            </div>

                            <p className="text-gray-700">{course.resumen}</p>

                            <a
                                href="https://wa.me/51962305362?text=Hola%20deseo%20inscribirme%20en%20el%20curso"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg hover:from-pink-700 hover:to-pink-600 transition-colors font-medium text-center"
                            >
                                Inscribirse ahora
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contenido detallado */}
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                    {/* Contenido del curso */}
                    <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center">
                            <BookOpen className="w-6 h-6 mr-2" />
                            Contenido del Curso
                        </h2>
                        <ul className="space-y-3">
                            {course.contenido.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Lo que incluye */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center">
                            <Award className="w-6 h-6 mr-2" />
                            ¿Qué incluye?
                        </h2>
                        <ul className="space-y-3">
                            {course.incluye?.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="bg-pink-100 text-pink-600 rounded-full p-1 mr-2">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Beneficios adicionales */}
                        <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                            <h3 className="font-medium text-pink-600 mb-2">
                                Beneficios adicionales:
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                                    Soporte durante el curso
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                                    Acceso a la Comunidad de Estudiantes para asesorías
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </main>
    );
}

// Generación de rutas estáticas
export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

// Metadata (Server Component)
// También recibe params como Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await fetchCourse(slug);

  return {
    title: `${course?.title} | Escuela Holística`,
    description: course?.resumen,
    openGraph: {
      images: [course?.image],
    },
  };
}
