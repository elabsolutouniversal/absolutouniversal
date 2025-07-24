import HomeHero from "@/components/home/HomeHero";
import Servicios from "@/components/servicios/Servicios";
import TestimoniosSection from "@/components/testimonios/TestimoniosSection";
import { testimonios } from "@/data/testimonios/testimonios";

// src/app/(website)/home/page.tsx
export default function HomePage() {
  return (
   <>
   <HomeHero/>
   <Servicios/>
    <TestimoniosSection
                testimonios={testimonios}
                itemsPerPage={6}
                title="Experiencias que transforman vidas"
                subtitle="Testimonios reales de personas que han encontrado claridad, sanación y transformación a través de nuestros servicios especializados"
            />
   </>
  )
}