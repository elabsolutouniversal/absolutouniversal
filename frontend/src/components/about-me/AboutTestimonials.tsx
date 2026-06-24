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
    <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-lora-bold text-brand-dark md:text-4xl">
            {testimonials.title}
          </h2>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.items.map((testimonial, index) => (
              <div key={index} className="relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <blockquote className="mb-4">
                  <p className="text-brand-medium italic leading-relaxed">
                    {testimonial.text}
                  </p>
                </blockquote>
                
                <div className="flex items-center">
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-light/40 to-brand-medium/40"></div>
                  <div className="mx-4">
                    <p className="font-semibold text-brand-dark">
                      {testimonial.author}, {testimonial.age} años
                    </p>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-medium/40 to-brand-light/40"></div>
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