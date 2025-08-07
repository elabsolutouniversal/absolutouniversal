'use client';
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <Star
        key={i}
        className={`${sizeClasses[size]} ${
          i <= rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        } transition-colors duration-200`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {stars}
    </div>
  );
};

export default StarRating;