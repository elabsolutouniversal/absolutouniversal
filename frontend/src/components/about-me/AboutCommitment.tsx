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
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {commitment.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Como profesional, me comprometo a:
            </p>
          </div>
          
          <div className="mb-12 grid gap-4">
            {commitment.points.map((point, index) => (
              <div key={index} className="flex items-center rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 p-4 transition-all hover:shadow-md">
                <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          
          {/* Modalidades de Trabajo */}
          <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              {commitment.modalities.title}
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {commitment.modalities.options.map((option, index) => (
                <div key={index} className="rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md">
                  <p className="font-medium text-gray-800">{option}</p>
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