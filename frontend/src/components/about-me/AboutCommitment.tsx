// components/about/AboutCommitment.tsx
import React from 'react';

interface CommitmentData {
  title: string;
  points: string[];
  modalities: {
    title: string;
    options: string[];
  };
}

interface AboutCommitmentProps {
  commitment: CommitmentData;
}

const AboutCommitment: React.FC<AboutCommitmentProps> = ({ commitment }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-dark md:text-4xl">
              {commitment.title}
            </h2>
            <p className="mt-4 text-lg font-semibold text-brand-medium">
              Como profesional, me comprometo a:
            </p>
          </div>
          
          <div className="mb-12 grid gap-4">
            {commitment.points.map((point, index) => (
              <div key={index} className="flex items-center rounded-lg bg-white p-4 shadow-lg transition-all hover:shadow-xl">
                <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-brand-medium">{point}</p>
              </div>
            ))}
          </div>
          
          {/* Modalidades de Trabajo */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-center text-2xl font-bold text-brand-dark">
              {commitment.modalities.title}
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {commitment.modalities.options.map((option, index) => (
                <div key={index} className="rounded-lg bg-yellow-200/90 p-4 text-center shadow-md transition-all hover:bg-yellow-300/90 hover:shadow-lg border border-yellow-300/60">
                  <p className="font-lora-semibold text-brand-dark">{option}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCommitment;