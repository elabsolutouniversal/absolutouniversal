import React from 'react';
import TestimoniosSection from '@/components/testimonios/TestimoniosSection'
import { testimonios } from '@/data/testimonios/testimonios';

const TestimoniosPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <TestimoniosSection
                testimonios={testimonios}
                itemsPerPage={6}
                title="Experiencias que transforman vidas"
                subtitle="Testimonios reales de personas que han encontrado claridad, sanación y transformación a través de nuestros servicios especializados"
            />
        </div>
    );
};

export default TestimoniosPage;
