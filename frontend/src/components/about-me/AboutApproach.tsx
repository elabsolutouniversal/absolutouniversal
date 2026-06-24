// components/about/AboutApproach.tsx
import React from 'react';

interface ApproachData {
  title: string;
  subtitle: string;
  comparisons: {
    traditional: { title: string; description: string };
    spiritual: { title: string; description: string };
    coaching: { title: string; description: string };
  };
  dimensions: {
    scientific: { title: string; icon: string; points: string[] };
    transpersonal: { title: string; icon: string; points: string[] };
    integrative: { title: string; icon: string; points: string[] };
  };
}

interface AboutApproachProps {
  approach: ApproachData;
}

const AboutApproach: React.FC<AboutApproachProps> = ({ approach }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-lora-bold text-brand-dark uppercase tracking-wide leading-tight not-italic">
            {approach.title}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
            <span className="text-xl md:text-2xl lg:text-3xl font-lora-semibold text-brand-medium not-italic">
              Mi Método
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-lora-bold not-italic uppercase tracking-wider bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              SATHYA
            </span>
          </div>
        </div>
        
      
        

        
        {/* Dimensions */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Scientific Dimension */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-brand-light/25 transition-all hover:shadow-xl hover:border-brand-medium/30">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-amber-100/70 opacity-60 blur-2xl"></div>
            <div className="relative">
              <div className="mb-4 text-4xl">{approach.dimensions.scientific.icon}</div>
              <h4 className="mb-4 text-lg md:text-xl font-lora-bold text-brand-dark uppercase tracking-wide not-italic">{approach.dimensions.scientific.title}</h4>
              <ul className="space-y-3">
                {approach.dimensions.scientific.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-brand-dark/75" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-dark font-lora text-sm md:text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Transpersonal Dimension */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-brand-light/25 transition-all hover:shadow-xl hover:border-brand-medium/30">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-amber-100/70 opacity-60 blur-2xl"></div>
            <div className="relative">
              <div className="mb-4 text-4xl">{approach.dimensions.transpersonal.icon}</div>
              <h4 className="mb-4 text-lg md:text-xl font-lora-bold text-brand-dark uppercase tracking-wide not-italic">{approach.dimensions.transpersonal.title}</h4>
              <ul className="space-y-3">
                {approach.dimensions.transpersonal.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-brand-dark/75" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-dark font-lora text-sm md:text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Integrative Dimension */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-brand-light/25 transition-all hover:shadow-xl hover:border-brand-medium/30">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-amber-100/70 opacity-60 blur-2xl"></div>
            <div className="relative">
              <div className="mb-4 text-4xl">{approach.dimensions.integrative.icon}</div>
              <h4 className="mb-4 text-lg md:text-xl font-lora-bold text-brand-dark uppercase tracking-wide not-italic">{approach.dimensions.integrative.title}</h4>
              <ul className="space-y-3">
                {approach.dimensions.integrative.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-brand-dark/75" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-dark font-lora text-sm md:text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;