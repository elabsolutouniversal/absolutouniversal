// components/about/AboutIsForYou.tsx
import React from 'react';

interface IsForYouData {
  title: string;
  points: string[];
}

interface AboutIsForYouProps {
  isThisForYou: IsForYouData;
}

const AboutIsForYou: React.FC<AboutIsForYouProps> = ({ isThisForYou }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
              {isThisForYou.title}
            </h2>
            <p className="mt-4 text-lg font-semibold text-brand-medium">
              Este trabajo puede ser especialmente beneficioso si:
            </p>
          </div>
          
          <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="grid gap-4 md:grid-cols-2">
              {isThisForYou.points.map((point, index) => (
                <div key={index} className="flex items-start group">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-brand-medium group-hover:text-brand-dark transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIsForYou;