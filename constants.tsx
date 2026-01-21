
import React from 'react';
import { Project, FAQItem, ServiceItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'union',
    index: '01',
    name: 'Union',
    subtitle: 'Next-generation collaborative coding environment and real-time IDE',
    link: 'https://union-financial-dashboard-126122738880.us-west1.run.app',
    tags: ['Collaboration', 'IDE', 'Real-time'],
  },
  {
    id: 'modelguard',
    index: '02',
    name: 'ModelGuard',
    subtitle: 'AI-powered automation and governance platform',
    link: 'https://ai-change-governance-8n8-clone-tool-one.vercel.app',
    tags: ['AI', 'Automation', 'Governance'],
  },
  {
    id: 'biteplan',
    index: '03',
    name: 'BitePlan',
    subtitle: 'AI-enhanced meal planning and nutritional discovery',
    link: 'https://biteplan-ai-126122738880.us-west1.run.app',
    tags: ['AI', 'Meal Planning', 'Nutrition'],
  },
  {
    id: 'nextlink',
    index: '04',
    name: 'NextLink',
    subtitle: 'Enterprise-grade link management and analytics',
    link: 'https://nextlink-126122738880.us-west1.run.app',
    tags: ['Link Management', 'Analytics', 'Enterprise'],
  },
  {
    id: 'mathminds',
    index: '05',
    name: 'MathMinds Studio',
    subtitle: 'AI-powered mathematics learning and visualization platform',
    link: 'https://mathminds-studio-126122738880.us-west1.run.app',
    tags: ['AI', 'Education', 'Mathematics'],
  },
];

export const TECHNICAL_SKILLS = [
  "Next.js", "Vue", "React", "Python", "Tailwind CSS", "Java", "8n8", "Claude CLI"
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What's your typical response time?",
    answer: "I typically respond to emails within 24 hours during business days. For urgent matters, feel free to call or text."
  },
  {
    question: "Are you available for collaboration and other ideas?",
    answer: "Absolutely! Contact me about your interest."
  },
  {
    question: "What information should I include in my initial contact?",
    answer: "Please include your project timeline, budget range, and a brief description of what you're looking to achieve."
  }
];

export const SERVICES: ServiceItem[] = [
  { name: 'UI/UX Design', icon: '✦' },
  { name: 'Product Design', icon: '✦' },
  { name: 'Design Automation Systems', icon: '✦' },
  { name: 'AI/ML Integration', icon: '✦' },
  { name: 'Prototyping', icon: '✦' },
  { name: 'User Research', icon: '✦' }
];

export const ExternalIcon = () => (
  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
