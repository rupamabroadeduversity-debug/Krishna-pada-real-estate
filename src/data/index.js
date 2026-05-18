import { Home, Key, Building, MapPin, Search, Handshake, ShieldCheck, Users, Phone } from 'lucide-react';

export const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'South Kolkata Areas', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const services = [
  {
    id: 1,
    title: 'Buyer Consultation',
    description: 'Personalised property search and shortlisting across Rash Behari Avenue, Dover Lane, and the wider South Kolkata belt — guiding you from first enquiry to final handover.',
    icon: Search,
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    id: 2,
    title: 'Seller Advisory',
    description: 'Strategic valuation, buyer matching, and negotiation support to help property owners achieve the best outcome with minimum stress.',
    icon: Home,
    color: 'from-amber-600 to-amber-800',
  },
  {
    id: 3,
    title: 'Locality Guidance',
    description: 'Deep hyperlocal knowledge of South Kolkata micro-markets — neighbourhood by neighbourhood, lane by lane — so you always make an informed decision.',
    icon: MapPin,
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 4,
    title: 'Property Shortlisting',
    description: 'Curated shortlists matched precisely to your budget, lifestyle, and family requirements, eliminating wasted visits and saving you valuable time.',
    icon: Building,
    color: 'from-amber-500 to-amber-700',
  },
  {
    id: 5,
    title: 'Visit Coordination',
    description: 'End-to-end scheduling and coordination of site visits — so every property tour is purposeful, well-timed, and productive for both buyers and sellers.',
    icon: Users,
    color: 'from-emerald-700 to-emerald-900',
  },
  {
    id: 6,
    title: 'Negotiation Support',
    description: 'Expert price negotiation and deal structuring anchored in real local market data — protecting your interests at every step of the transaction.',
    icon: Handshake,
    color: 'from-amber-700 to-amber-900',
  },
];

export const features = [
  {
    title: 'Hyperlocal South Kolkata Expertise',
    description: 'Deep, street-level knowledge of Rash Behari Avenue, Dover Lane, Ballygunge, Lansdowne, and the broader South Kolkata residential belt.',
    icon: MapPin,
  },
  {
    title: 'Relationship-Led Advisory',
    description: 'Krishna Pada Mandal operates on trust and long-term relationships — not quick commissions — ensuring you receive honest, unhurried guidance.',
    icon: Handshake,
  },
  {
    title: 'Trusted Local Authority',
    description: 'Years of on-the-ground consultancy have built a reputation founded entirely on referrals, repeat clients, and genuine community credibility.',
    icon: ShieldCheck,
  },
];

export const portfolio = [
  {
    id: 1,
    title: 'Residential Apartments',
    category: 'Rash Behari Avenue',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Independent Houses',
    category: 'Dover Lane',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Premium Flats',
    category: 'Ballygunge',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Family Homes',
    category: 'Lansdowne & Gariahat',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Subhasis D.',
    role: 'Home Buyer, Dover Lane',
    content: 'Krishna da understood exactly what our family needed. He shortlisted properties that matched our budget and requirements perfectly — no wasted visits, just results.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya M.',
    role: 'Property Owner, Ballygunge',
    content: 'I had a property sitting idle for months. Within weeks of speaking with Krishna Pada, I had a genuine buyer at a fair price. His local network is unmatched.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Arnab B.',
    role: 'First-Time Buyer, Rash Behari',
    content: 'As a first-time buyer, I was nervous about the whole process. Krishna da guided me at every step — from locality selection to final negotiation — with complete transparency.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'Which areas of South Kolkata do you cover?',
    answer: 'The primary focus is Rash Behari Avenue, Dover Lane, Ballygunge, Lansdowne, Gariahat, and the broader South Kolkata residential belt. If you have a specific neighbourhood in mind, reach out and we\'ll let you know how we can help.',
  },
  {
    question: 'How does a buyer consultation work?',
    answer: 'It begins with a simple phone or WhatsApp call to understand your requirements, budget, and preferred localities. From there, a curated shortlist is prepared and visits are coordinated — at your pace, with no pressure.',
  },
  {
    question: 'I want to sell my property. How do I start?',
    answer: 'Just call or WhatsApp. A consultation is arranged to assess the property, understand local demand, and agree on a positioning strategy. The goal is always to find the right buyer at the right price.',
  },
  {
    question: 'Do you charge buyers for your consultancy?',
    answer: 'The fee structure is transparent and discussed upfront before any engagement. There are no hidden charges or surprises — everything is agreed upon openly from the start.',
  },
  {
    question: 'How quickly can you find a property or a buyer?',
    answer: 'Timelines vary by property type, budget, and market conditions. However, because of the deep local network and hyperlocal knowledge, qualified matches are typically surfaced much faster than through a general listing platform.',
  },
];

export const businessDetails = {
  name: 'Krishna Pada Mandal',
  tagline: 'South Kolkata Property Advisor',
  address: 'Rash Behari Avenue',
  city: 'South Kolkata, West Bengal',
  phone: '+91 84603 83260',
  whatsapp: '918460383260',
  hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
};
