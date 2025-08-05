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
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {approach.title}
          </h2>
          <p className="text-xl font-semibold text-purple-600">{approach.subtitle}</p>
        </div>
        
        {/* Comparisons */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold text-gray-900">{approach.comparisons.traditional.title}:</h3>
            <p className="text-gray-600">{approach.comparisons.traditional.description}</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold text-gray-900">{approach.comparisons.spiritual.title}:</h3>
            <p className="text-gray-600">{approach.comparisons.spiritual.description}</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 font-semibold text-gray-900">{approach.comparisons.coaching.title}:</h3>
            <p className="text-gray-600">{approach.comparisons.coaching.description}</p>
          </div>
        </div>
        
        {/* Mi Método Integrado */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-purple-700">Mi Método Integrado:</h3>
        </div>
        
        {/* Dimensions */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Scientific Dimension */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-purple-100 opacity-50 blur-2xl"></div>
            <div className="relative">
              <div className="mb-4 text-4xl">{approach.dimensions.scientific.icon}</div>
              <h4 className="mb-4 text-xl font-bold text-gray-900">{approach.dimensions.scientific.title}</h4>
              <ul className="space-y-3">
                {approach.dimensions.scientific.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Transpersonal Dimension */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-indigo-100 opacity-50 blur-2xl"></div>
            <div className="relative">
              <div className="mb-4 text-4xl">{approach.dimensions.transpersonal.icon}</div>
              <h4 className="mb-4 text-xl font-bold text-gray-900">{approach.dimensions.transpersonal.title}</h4>
              <ul className="space-y-3">
                {approach.dimensions.transpersonal.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Integrative Dimension */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-purple-100 opacity-50 blur-2xl"></div>
            <div className="relative">
              <div className="mb-4 text-4xl">{approach.dimensions.integrative.icon}</div>
              <h4 className="mb-4 text-xl font-bold text-gray-900">{approach.dimensions.integrative.title}</h4>
              <ul className="space-y-3">
                {approach.dimensions.integrative.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
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