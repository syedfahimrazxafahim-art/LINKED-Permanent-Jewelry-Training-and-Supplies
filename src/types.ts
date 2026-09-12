export interface BusinessInfo {
  name: string;
  type: string;
  location: string;
  phone: string;
  phoneRaw: string;
  email: string;
  facebook: string;
  instagram: string;
}

export interface WebsiteImage {
  id: string;
  filename: string;
  localSrc: string;
  remoteSrc: string;
  title: string;
  caption: string;
  category: 'training' | 'jewelry' | 'technique' | 'equipment';
  width: number;
  height: number;
  aspectRatio: number;
}

export interface TrainingBlock {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface ServiceSkill {
  title: string;
  description: string;
  image: WebsiteImage;
  details: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  isSample: boolean;
}
