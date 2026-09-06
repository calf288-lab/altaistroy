export interface ServiceItem {
  id: string;
  title: string;
  category: 'house' | 'banya' | 'outdoor' | 'finishing' | 'foundation' | 'repair';
  price: string;
  priceNote: string;
  image: string;
  description: string;
  features: string[];
  materials: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  area?: string;
  term?: string;
  image: string;
  description: string;
  details: string[];
}

export interface AdvantageItem {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  project: string;
  text: string;
  rating: number;
  date: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  serviceType: string;
  preferredMessenger: 'whatsapp' | 'max' | 'phone';
  location: string;
  comment: string;
  agreedToPolicy: boolean;
}
