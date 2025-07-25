export interface AccordionSection {
  id: string;
  title: string;
  content: string;
  iconType?: 'healing' | 'distance' | 'time' | 'space' | 'default'; // ✅ NUEVA LÍNEA
}

export interface BenefitItem {
  text: string;
}

export interface PenduloData {
  title: string;
  description: string;
  mainImage: string;
  benefitsSection: {
    title: string;
    benefits: BenefitItem[];
    sideImage: string;
  };
  accordionSections: AccordionSection[];
  ctaButton: {
    text: string;
    link: string;
  };
}
