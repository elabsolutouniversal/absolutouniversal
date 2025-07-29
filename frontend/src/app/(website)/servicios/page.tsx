import React from 'react'
import Servicios from '@/components/servicios/Servicios';
import TherapyPricing from '@/components/therapy/TherapyPricing';

export default function Serviciospage() {
  return (
    <>
      <main className="min-h-screen py-12 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto">
          <Servicios 
            showTitle={true}
            showDescription={true}
            showViewAllButton={false}
          />
          <TherapyPricing/>
        </div>
      </main>
    </>
  )
}