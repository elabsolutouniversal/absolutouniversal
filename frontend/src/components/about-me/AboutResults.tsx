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

  const levelColors = {
    mental: 'from-purple-500 to-purple-600',
    physical: 'from-indigo-500 to-indigo-600',
    spiritual: 'from-purple-500 to-indigo-600'
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {results.title}
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(results.levels).map(([key, level], index) => (
            <div key={index} className="group">
              <div className={`rounded-2xl bg-gradient-to-br ${levelColors[key as keyof typeof levelColors]} p-1 transition-all hover:shadow-xl`}>
                <div className="h-full rounded-2xl bg-white p-6">
                  <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${levelColors[key as keyof typeof levelColors]} text-white`}>
                    {levelIcons[key as keyof typeof levelIcons]}
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold text-gray-900">{level.title}</h3>
                  
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutResults;