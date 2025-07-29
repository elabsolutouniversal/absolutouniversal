// src/types/therapy.types.ts
export interface TherapyPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  includes: string[];
  popular?: boolean;
}

export interface Therapy {
  id: string;
  name: string;
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