// components/about/AboutResults.tsx
import React from 'react';

interface ResultsData {
  title: string;
  levels: {
    mental: { title: string; benefits: string[] };
    physical: { title: string; benefits: string[] };
    spiritual: { title: string; benefits: string[] };
  };
}

interface AboutResultsProps {
  results: ResultsData;
}

const AboutResults: React.FC<AboutResultsProps> = ({ results }) => {
  const levelIcons = {
    mental: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    physical: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    spiritual: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent md:text-4xl">
            {results.title}
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(results.levels).map(([key, level], index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-purple-100 opacity-50 blur-2xl"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
                  {levelIcons[key as keyof typeof levelIcons]}
                </div>
                
                <h3 className="mb-4 text-xl font-bold text-purple-800">{level.title}</h3>
                
                <ul className="space-y-3">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-purple-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutResults;