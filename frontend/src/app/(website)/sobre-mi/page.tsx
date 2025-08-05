import About from '@/components/about-me/About'
import { SocialMediaSimple } from '@/components/SocialMedia/SocialMediaSimple'
import TestimoniosSection from '@/components/testimonios/TestimoniosSection'
import { testimonios } from '@/data/testimonios/testimonios'
import React from 'react'

export default function page() {
  return (
    <>
       {/* <ProfessionalProfile/> */}
       <About/>
      <SocialMediaSimple/>
       <TestimoniosSection
                testimonios={testimonios}
                itemsPerPage={6}
                title="Experiencias que transforman vidas"
                subtitle="Testimonios reales de personas que han encontrado claridad, sanación y transformación a través de nuestros servicios especializados"
            />
       
    </>
  
  )
}
