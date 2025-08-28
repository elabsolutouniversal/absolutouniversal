// src/components/TherapyPricing.tsx
"use client"
import React, { useState, useCallback, useMemo } from 'react';
import { therapiesData } from '@/data/pricingTerapies/therapies';

import type { 
  TherapyPricingProps, 
  SelectedPackage, 
  TherapyCategory,
  PackageCardProps,
  ConfirmationModalProps,
  TherapyPackage
} from '@/types/therapy.types';

// Utility functions remain the same
const formatPrice = (price: number, currency: string = "$ "): string => `${currency}${price}`;
const calculateSavings = (originalPrice?: number, currentPrice?: number): number => (!originalPrice || !currentPrice || originalPrice <= currentPrice) ? 0 : originalPrice - currentPrice;
const isValidTherapyCategory = (category: string): category is TherapyCategory => ['holistica', 'tarot', 'psico', 'pendulo'].includes(category);

// Enhanced Confirmation Modal
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ 
  isOpen, 
  selectedPackage, 
  onClose, 
  onConfirm 
}) => {
  if (!isOpen || !selectedPackage) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl transform transition-all">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center">Confirmar Reserva</h3>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-500">Terapia:</span>
              <span className="font-medium">{selectedPackage.therapyName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Paquete:</span>
              <span className="font-medium">{selectedPackage.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Duración:</span>
              <span className="font-medium">{selectedPackage.duration}</span>
            </div>
            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
              <span className="text-gray-500">Total:</span>
              <span className="text-2xl font-bold text-indigo-600">{formatPrice(selectedPackage.price)}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => onConfirm(selectedPackage)}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486"/>
              </svg>
              Confirmar por WhatsApp
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Volver atrás
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Package Card
const PackageCard: React.FC<PackageCardProps> = ({ 
  package: pkg, 
  therapyName, 
  therapyId,
  onSelect 
}) => {
  const hasDiscount = Boolean(pkg.originalPrice && pkg.originalPrice > pkg.price);
  const savings = calculateSavings(pkg.originalPrice, pkg.price);

  return (
    <div className={`relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 ${
      pkg.popular ? 'ring-2 ring-indigo-400 transform hover:scale-[1.02]' : ''
    }`}>
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          RECOMENDADO
        </div>
      )}

      <div className="p-6">
        <div className="text-center mb-4">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
            pkg.popular ? 'bg-gradient-to-br from-indigo-500 to-purple-500' : 'bg-gray-100'
          }`}>
            <svg className={`w-8 h-8 ${pkg.popular ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {pkg.id.includes('rapida') && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
              {pkg.id.includes('media') && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
              {pkg.id.includes('completa') && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />}
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{pkg.duration}</p>
        </div>

        <div className="text-center my-6">
          <div className="flex justify-center items-baseline gap-2">
            <span className="text-4xl font-bold text-indigo-600">{formatPrice(pkg.price)}</span>
            {hasDiscount && (
              <span className="text-lg text-gray-400 line-through">{formatPrice(pkg.originalPrice!)}</span>
            )}
          </div>
          {hasDiscount && (
            <span className="inline-block mt-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              Ahorras {formatPrice(savings)}
            </span>
          )}
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 mb-3 text-center">INCLUYE:</h4>
          <ul className="space-y-2">
            {pkg.includes.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => onSelect(pkg, therapyName, therapyId)}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            pkg.popular 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
          }`}
        >
          Reservar ahora
        </button>
      </div>
    </div>
  );
};

// Main Component with Enhanced Design
const TherapyPricing: React.FC<TherapyPricingProps> = ({ 
  category = null, 
  onPackageSelect,
  whatsappNumber = "51962305362"
}) => {
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const therapiesToShow = useMemo(() => {
    if (category && isValidTherapyCategory(category)) {
      const therapy = therapiesData[category];
      return therapy ? { [category]: therapy } : {};
    }
    return therapiesData;
  }, [category]);

  const handleSelectPackage = useCallback((pkg: TherapyPackage, therapyName: string, therapyId: string) => {
    setSelectedPackage({ ...pkg, therapyName, therapyId });
    setShowModal(true);
    onPackageSelect?.({ ...pkg, therapyName, therapyId });
  }, [onPackageSelect]);

  const handleWhatsAppContact = useCallback((selectedPkg: SelectedPackage) => {
    const message = `🌟 ¡Hola! Estoy interesado/a en reservar una sesión:\n\n📋 *Detalles de la sesión:*\n• Terapia: ${selectedPkg.therapyName}\n• Paquete: ${selectedPkg.name}\n• Duración: ${selectedPkg.duration}\n• Inversión: ${formatPrice(selectedPkg.price)}\n\n¿Cuándo podríamos coordinar la cita? ✨`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }, [whatsappNumber]);

  if (Object.keys(therapiesToShow).length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="bg-red-50 rounded-xl p-8 border border-red-200 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-red-800 mb-4">🔍 Terapia no encontrada</h2>
          <p className="text-red-600">La categoría solicitada no existe o no está disponible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        {category ? (
          <>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {therapiesData[category].name}
            </h1>
            {therapiesData[category].subtitle && (
              <h2 className="text-2xl font-semibold text-pink-500 mb-4">
                {therapiesData[category].subtitle}
              </h2>
            )}
            <p className="text-xl text-purple-700 max-w-3xl mx-auto font-medium">
              {therapiesData[category].description}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-pink-600 mb-4">
              Nuestras Terapias
            </h1>
            <p className="text-xl   max-w-3xl mx-auto">
              Descubre las diferentes modalidades terapéuticas que ofrecemos
            </p>
          </>
        )}
      </div>

      {Object.values(therapiesToShow).map((therapy) => (
        <div key={therapy.id} className="mb-16">
          {!category && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pink-600 mb-2">{therapy.name}</h2>
              {therapy.subtitle && (
                <h3 className="text-xl font-semibold text-pink-400 mb-4">{therapy.subtitle}</h3>
              )}
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{therapy.description}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapy.packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                therapyName={therapy.name}
                therapyId={therapy.id}
                onSelect={handleSelectPackage}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="mt-16 text-center">
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Sesiones Confidenciales</h3>
          <p className="text-gray-600">
            Todas las sesiones se realizan en un espacio seguro y de confianza con  absoluta reserva.
          </p>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showModal}
        selectedPackage={selectedPackage}
        onClose={() => setShowModal(false)}
        onConfirm={handleWhatsAppContact}
      />
    </div>
  );
};

export default TherapyPricing;