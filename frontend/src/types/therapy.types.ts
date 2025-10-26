// src/types/therapy.types.ts
export interface TherapyPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  pricePEN?: number; // Precio en Soles Peruanos
  currency?: string; // Add currency field
  currencyPEN?: string; // Add currencyPEN field
  isStartingPrice?: boolean; // Indicates if the price is a starting price
  originalPrice?: number;
  duration: string;
  includes: string[];
  popular?: boolean;
  iconBgColor?: string; // Add icon background color property
}

export interface Therapy {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  image: string;
  slug: string;
  packages: TherapyPackage[];
}

export interface TherapiesData {
  [key: string]: Therapy;
}

export interface SelectedPackage extends TherapyPackage {
  therapyName: string;
  therapyId: string;
}

export type TherapyCategory = 'holistica' | 'tarot' | 'psico' | 'pendulo';

export interface PackageCardProps {
  package: TherapyPackage;
  therapyName: string;
  therapyId: string;
  onSelect: (pkg: TherapyPackage, therapyName: string, therapyId: string) => void;
}

export interface TherapyPricingProps {
  category?: TherapyCategory | null;
  onPackageSelect?: (selectedPackage: SelectedPackage) => void;
  whatsappNumber?: string;
}

export interface ConfirmationModalProps {
  isOpen: boolean;
  selectedPackage: SelectedPackage | null;
  onClose: () => void;
  onConfirm: (selectedPackage: SelectedPackage) => void;
}