import React from 'react'
import Servicios from '@/components/servicios/Servicios';

export default function Serviciospage() {
  return (
    <main className="min-h-screen">
      <Servicios 
        showTitle={true}
        showDescription={true}
        showViewAllButton={false}
        showLogoAtEnd={true}
      />
    </main>
  )
}
