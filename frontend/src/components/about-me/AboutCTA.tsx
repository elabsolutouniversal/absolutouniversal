// components/about/AboutCTA.tsx
import React from 'react';

interface CTAData {
  title: string;
  subtitle: string;
  quote: string;
  author: string;
}

interface AboutCTAProps {
  cta: CTAData;
}

const AboutCTA: React.FC<AboutCTAProps> = ({ cta }) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            {cta.title}
          </h2>
          
          <p className="mb-12 text-xl text-purple-100">
            {cta.subtitle}
          </p>
          
          <div className="mb-12">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-600 transition-all hover:scale-105">
              <span className="relative z-10">Agenda tu Consulta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-10"></div>
            </button>
          </div>
          
          {/* Quote */}
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <blockquote className="text-center">
              <svg className="mx-auto mb-4 h-10 w-10 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 text-lg text-white italic md:text-xl">
                {cta.quote}
              </p>
              <footer className="text-purple-200">
                — {cta.author}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;