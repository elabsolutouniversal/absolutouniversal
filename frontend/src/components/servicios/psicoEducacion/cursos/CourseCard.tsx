// components/cursos/CourseCard.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { Course } from '@/types/servicios/cursos';
import Image from 'next/image';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={course.image}
        alt={course.title}
         width={400}         // ancho en px
        height={240}      
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute top-3 left-3 bg-white/90 rounded-full p-1.5 shadow-sm">
        <course.icon className="w-5 h-5 text-pink-600" />
      </div>
      <div className="absolute bottom-3 left-4 right-4">
        <h3 className="text-lg font-bold text-white">{course.title}</h3>
        <div className="flex items-center mt-1">
          <span className="text-xs bg-pink-600/90 text-white px-2 py-1 rounded-full">
            {course.duracion}
          </span>
        </div>
      </div>
    </div>
    <div className="p-4 space-y-3">
      <p className="text-gray-600 text-sm line-clamp-2">{course.description}</p>
      <div className="flex justify-between items-center">
        <div>
          {course.precioOriginal && (
            <span className="text-xs text-gray-400 line-through mr-2">
              {course.precioOriginal}
            </span>
          )}
          <span className="font-medium text-pink-600 text-sm">
            {course.price} USD
            {course.pricePEN && ` (S/ ${course.pricePEN})`}
          </span>
        </div>
        <Link
          href={`/cursos/${course.slug}`}
          className="px-4 py-1.5 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 text-sm font-medium flex items-center"
        >
          Ver más
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

export default CourseCard;