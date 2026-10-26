export type PageId = 'home' | 'services' | 'gallery' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  recommendedFor: string[];
  ctaLabel: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'flake' | 'quartz' | 'solid' | 'metallic' | 'prep';
  categoryLabel: string;
  image: string;
  primaryUrl?: string;
  fallbackUrl?: string;
  description: string;
  system: string;
  finish: string;
  highlight: string;
}

export interface EstimateFormState {
  fullName: string;
  contactMethod: 'whatsapp' | 'phone' | 'email';
  contactValue: string;
  projectLocation: string;
  floorType: 'flake' | 'quartz' | 'solid' | 'metallic' | 'other';
  approxSqFt: number;
  timeline: 'asap' | 'two_weeks' | 'next_month' | 'planning';
  projectNotes: string;
}
