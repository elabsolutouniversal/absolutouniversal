import { TherapyCategory } from "@/types/therapy.types";

export const formatPrice = (price: number, currency: string = "$"): string => {
  return `${currency}${price}`;
};

export const calculateSavings = (originalPrice?: number, currentPrice?: number): number => {
  if (!originalPrice || !currentPrice || originalPrice <= currentPrice) return 0;
  return originalPrice - currentPrice;
};

export const isValidTherapyCategory = (category: string): category is TherapyCategory => {
  return ['holistica', 'tarot', 'psico', 'pendulo'].includes(category);
};