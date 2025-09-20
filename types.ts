
import { IconType } from 'react-icons';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export interface Industry {
  icon: IconType;
  name: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface Stat {
  value: string;
  label: string;
}
