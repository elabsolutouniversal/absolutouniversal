



import React from 'react'
import Servicios from '@/components/servicios/Servicios';

export default function Serviciospage() {
  return (
   <main>
      <Servicios 
        showTitle={true}
        showDescription={true}
        showViewAllButton={false}
        className="bg-pink-50 min-h-screen py-12 px-6"
      />
    </main>
  )
}
