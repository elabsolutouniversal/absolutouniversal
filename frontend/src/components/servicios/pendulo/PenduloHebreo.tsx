"use client";

import React, { useState } from 'react';
import { MessageCircle, Sparkles, Cross, EyeOff, HeartPulse, Brain, Shield, RefreshCw, Zap, Sun, Moon, ChevronDown } from 'lucide-react';
import AccordionItem from './AccordionItem';
import { penduloData, galleryData } from '@/data/servicios/pendulo';
import SimpleGallery from './SimpleGalery';
import TherapyPricing from '@/components/therapy/TherapyPricing';

const BenefitIcon = ({ index }: { index: number }) => {
  const icons = [
    <Sparkles key="sparkles" className="text-pink-500" />,
    <RefreshCw key="refresh" className="text-purple-500" />,
    <Shield key="shield" className="text-red-500" />,
    <Zap key="zap" className="text-yellow-500" />,
    <HeartPulse key="heart" className="text-green-500" />,
    <Cross key="cross" className="text-blue-500" />,
    <Sun key="sun" className="text-orange-500" />,
    <Brain key="brain" className="text-indigo-500" />,
    <EyeOff key="eye" className="text-rose-500" />,
    <Moon key="moon" className="text-violet-500" />,
    <HeartPulse key="heart2" className="text-pink-400" />
  ];
  
  return icons[index % icons.length];
};

export default function PenduloHebreo() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [benefitsOpen, setBenefitsOpen] = useState(false);

  const toggleSection = (id: string) => {
    setActiveSection(curr => (curr === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 mb-3">
          <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
          <span className="text-sm font-medium text-pink-700">Terapia Energética</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {penduloData.title}
        </h1>
        
        <p className="text-gray-700 text-lg mx-auto max-w-2xl leading-relaxed">
          {penduloData.description}
        </p>
      </div>

      {/* Gallery */}
      <SimpleGallery data={galleryData} />

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-sm">
        <div 
          className="cursor-pointer"
          onClick={() => setBenefitsOpen(!benefitsOpen)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <HeartPulse className="w-6 h-6 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-pink-800">
                {penduloData.benefitsSection.title}
              </h2>
            </div>
            <ChevronDown 
              className={`w-6 h-6 text-pink-600 transition-transform ${benefitsOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
        
        {benefitsOpen && (
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {penduloData.benefitsSection.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white/80 rounded-lg">
                <div className="mt-1">
                  <BenefitIcon index={index} />
                </div>
                <p className="text-gray-700">{benefit.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {penduloData.accordionSections.map((sec) => (
          <AccordionItem
            key={sec.id}
            id={sec.id}
            title={sec.title}
            content={
              <div className="prose prose-pink max-w-none text-gray-700">
                {sec.content}
              </div>
            }
            iconType={sec.iconType}
            isOpen={activeSection === sec.id}
            onClick={() => toggleSection(sec.id)}
          />
        ))}
      </div>
      <TherapyPricing category="pendulo"/>
      {/* CTA Section */}
      <div className="text-center py-8">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl max-w-2xl mx-auto">
          <p className="mb-6 opacity-90">
            Agenda una sesión y comienza tu camino hacia el equilibrio y sanación integral.
          </p>
          <button
            onClick={() => window.open(penduloData.ctaButton.link, '_blank')}
            className="inline-flex items-center gap-3 bg-white text-pink-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            {penduloData.ctaButton.text}
          </button>
        </div>
      </div>
    </div>
  );
}