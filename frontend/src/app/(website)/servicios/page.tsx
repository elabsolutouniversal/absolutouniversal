import React from 'react'
import Servicios from '@/components/servicios/Servicios';
// import TestimoniosSection from '@/components/testimonios/TestimoniosSection';
// import { testimonios } from '@/data/testimonios/testimonios';

export default function Serviciospage() {
  return (
    <>
      <main className="min-h-screen py-12 px-6 bg-gradient-to-b from-stone-50 via-amber-50/40 to-orange-50/20">
        <div className="max-w-6xl mx-auto">
          <Servicios 
            showTitle={true}
            showDescription={true}
            showViewAllButton={false}
            showLogoAtEnd={true}
          />
         
           {/* <TestimoniosSection
                testimonios={testimonios}
                itemsPerPage={6}
                title="Experiencias que transforman vidas"
                subtitle="Testimonios reales de personas que han encontrado claridad, sanación y transformación a través de nuestros servicios especializados"
            /> */}
           
        </div>
      </main>
    </>
  )
}