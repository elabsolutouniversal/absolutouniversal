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
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent md:text-4xl">
              {commitment.title}
            </h2>
            <p className="mt-4 text-lg font-semibold text-purple-700">
              Como profesional, me comprometo a:
            </p>
          </div>
          
          <div className="mb-12 grid gap-4">
            {commitment.points.map((point, index) => (
              <div key={index} className="flex items-center rounded-lg bg-white p-4 shadow-lg transition-all hover:shadow-xl">
                <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-purple-700">{point}</p>
              </div>
            ))}
          </div>
          
          {/* Modalidades de Trabajo */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-center text-2xl font-bold text-purple-800">
              {commitment.modalities.title}
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {commitment.modalities.options.map((option, index) => (
                <div key={index} className="rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 p-4 text-center shadow-sm transition-all hover:shadow-md border border-purple-100">
                  <p className="font-medium text-purple-700">{option}</p>
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