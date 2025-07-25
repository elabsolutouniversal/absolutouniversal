"use client";

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { AccordionItem } from '@/components/servicios/pendulo/AccordionItem';
import { SimpleGallery } from '@/components/servicios/pendulo/SimpleGalery';
import { penduloData } from '@/data/servicios/pendulo';

export default function PenduloHebreo() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [benefitsOpen, setBenefitsOpen] = useState<boolean>(false);

  const handleAccordionClick = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleWhatsAppClick = () => {
    window.open(penduloData.ctaButton.link, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {penduloData.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {penduloData.description}
        </p>
      </div>

      {/* Gallery Section */}
      <SimpleGallery />

      {/* Benefits Section */}
      <div className="space-y-4">
        <AccordionItem
          title={penduloData.benefitsSection.title}
          content=""
          iconType={penduloData.benefitsSection.iconType}
          isOpen={benefitsOpen}
          onClick={() => setBenefitsOpen(!benefitsOpen)}
        />

        {benefitsOpen && (
          <div className="bg-white rounded-lg border border-pink-200 shadow-sm">
            <div className="p-6">
              {/* Benefits List */}
              <ul className="space-y-3">
                {penduloData.benefitsSection.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {benefit.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {penduloData.accordionSections.map((section) => (
          <AccordionItem
            key={section.id}
            title={section.title}
            content={section.content}
            iconType={section.iconType}
            isOpen={openAccordion === section.id}
            onClick={() => handleAccordionClick(section.id)}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center pt-8">
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          {penduloData.ctaButton.text}
        </button>
      </div>

      {/* Decorative Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
}