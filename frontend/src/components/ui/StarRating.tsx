'use client';
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 5, // Default a 5 estrellas si no se especifica
  maxRating = 5,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`flex items-center ${className}`}>
      {Array.from({ length: maxRating }, (_, index) => {
        const isFilled = index < rating;
        return (
          <Star
            key={index}
            className={`${sizeClasses[size]} ${
              isFilled
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;