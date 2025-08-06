// components/about/AboutTestimonials.tsx
import React from 'react';

interface TestimonialsData {
  title: string;
  items: {
    text: string;
    author: string;
    age: number;
  }[];
}

interface AboutTestimonialsProps {
  testimonials: TestimonialsData;
}

const AboutTestimonials: React.FC<AboutTestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-lora-bold text-gray-900 md:text-4xl">
            {testimonials.title}
          </h2>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.items.map((testimonial, index) => (
              <div key={index} className="relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <blockquote className="mb-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    {testimonial.text}
                  </p>
                </blockquote>
                
                <div className="flex items-center">
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-300 to-indigo-300"></div>
                  <div className="mx-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}, {testimonial.age} años
                    </p>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-indigo-300 to-purple-300"></div>
                </div>
              </div>
            ))}
          </div>n
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;