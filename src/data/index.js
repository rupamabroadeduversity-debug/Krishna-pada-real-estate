import { Home, Key, Building, MapPin, Search, Handshake, ShieldCheck, Map, Phone } from 'lucide-react';

export const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Featured Localities', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const services = [
  {
    id: 1,
    title: 'Property Buying Consultation',
    description: 'Expert guidance to help you find and secure the perfect residential or commercial property in Salt Lake and surrounding areas.',
    icon: Search,
    color: 'from-red-500 to-red-700',
  },
  {
    id: 2,
    title: 'Property Selling Services',
    description: 'Strategic marketing and advisory support for owners looking to sell their properties quickly and at the right price.',
    icon: Home,
    color: 'from-blue-800 to-blue-950',
  },
  {
    id: 3,
    title: 'Rental & Leasing Assistance',
    description: 'Seamless rental solutions matching tenants with ideal homes and landlords with reliable occupants.',
    icon: Key,
    color: 'from-red-400 to-red-600',
  },
  {
    id: 4,
    title: 'Property Loan Consulting',
    description: 'Navigate the complexities of property financing with our trusted loan consultancy and processing support.',
    icon: Building,
    color: 'from-blue-600 to-blue-800',
  },
];

export const features = [
  {
    title: 'Hyperlocal Salt Lake Expertise',
    description: 'Deep understanding of Sector 1 and broader Salt Lake micro-markets to ensure you make informed local decisions.',
    icon: MapPin,
  },
  {
    title: 'Advisory-First Approach',
    description: 'We don\'t just show listings; we provide strategic real estate guidance tailored to your specific goals.',
    icon: Handshake,
  },
  {
    title: 'Trusted Local Authority',
    description: 'Led by Afaque Ahmed, bringing transparency, credibility, and professional support to every transaction.',
    icon: ShieldCheck,
  },
];

export const portfolio = [
  {
    id: 1,
    title: 'Premium Apartments',
    category: 'Salt Lake Sector 1',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Independent Houses',
    category: 'Kolkata North',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Commercial Office Spaces',
    category: 'Salt Lake IT Hub',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Modern Duplexes',
    category: 'New Town',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Rajat B.',
    role: 'Home Buyer',
    content: 'Afaque guided us perfectly when buying our apartment in Salt Lake Sector 1. His knowledge of the local area and transparent advisory approach gave us huge confidence.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sneha M.',
    role: 'Property Owner',
    content: 'Gk Realty helped me find reliable tenants for my property within weeks. The entire process was handled professionally and with great care.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram S.',
    role: 'Investor',
    content: 'Very practical and clear property loan consultancy. The team helped streamline a complicated financing process for my commercial investment.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'What areas do you specialize in?',
    answer: 'We focus heavily on Salt Lake City (especially Sector 1), as well as covering prime residential and commercial areas across Kolkata, Howrah, and Hooghly.',
  },
  {
    question: 'Can you help with property loans?',
    answer: 'Yes, we provide dedicated property loan consulting to help buyers secure the best financing options with minimum hassle.',
  },
  {
    question: 'How do I start the process of selling my property?',
    answer: 'Simply book a consultation with us. We will evaluate your property, discuss local market conditions, and strategize the best approach to find the right buyer.',
  },
  {
    question: 'Do you handle commercial real estate?',
    answer: 'Absolutely. We assist clients with buying, selling, and leasing commercial office spaces and retail properties in key Kolkata business hubs.',
  },
];

export const businessDetails = {
  name: "Gk Realty",
  address: 'Salt Lake Sector 1',
  city: 'Kolkata, West Bengal',
  phone: '+91 9606295389',
  secondaryPhone: '08048779132',
  email: 'gkrealty18@gmail.com',
  hours: 'Mon - Sat: 10:00 AM - 7:00 PM',
};
