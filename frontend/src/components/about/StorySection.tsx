// components/about/StorySection.tsx
import React from 'react';
import Image from 'next/image';
import { aboutData } from '@/data/about/aboutdata';

export const StorySection: React.FC = () => {
  const { story, images } = aboutData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-20 text-gray-900">
            Mi Historia: <span className="text-purple-700">{story.title}</span>
          </h2>
          
          {/* Story Content with Images */}
          <div className="space-y-16">
            {/* First paragraph with image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {story.content[0]}
                </p>
                <div className="w-16 h-1 bg-purple-200 rounded"></div>
              </div>
              <div className="relative">
                <Image
                  src={images.profile}
                  alt="Momento de transformación personal"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
                />
              </div>
            </div>

            {/* Second paragraph with image on left */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <Image
                  src={images.therapy}
                  alt="Terapia integrativa holística"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {story.content[1]}
                </p>
                <div className="w-16 h-1 bg-purple-200 rounded"></div>
              </div>
            </div>

            {/* Third paragraph */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg leading-relaxed text-gray-700 mb-12">
                {story.content[2]}
              </p>
            </div>
          </div>
          
          {/* Quote Section */}
          <div className="relative my-20">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12 text-center relative">
              <div className="absolute top-4 left-8 text-6xl text-purple-300 font-serif opacity-50"> &quot;</div>
              <div className="absolute bottom-4 right-8 text-6xl text-purple-300 font-serif opacity-50">&quot;</div>
              
              <blockquote className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed relative z-10 max-w-4xl mx-auto">
                {story.quote}
              </blockquote>
            </div>
          </div>
          
          {/* Conclusion with final image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                {story.conclusion}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-700">15+</div>
                  <div className="text-sm text-gray-600">Años de experiencia</div>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-700">3000+</div>
                  <div className="text-sm text-gray-600">Sesiones realizadas</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src={images.therapy2}
                alt="Enfoque terapéutico profesional"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};