import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetail } from '../../components/ui/service-detail/service-detail';
import { ProcessStep } from '../../components/ui/process-step/process-step';
import { BenefitCard } from '../../components/ui/benefit-card/benefit-card';
import { CtaSection } from '../../components/ui/cta-section/cta-section';

interface ServiceData {
  icon: 'users' | 'sparkles' | 'award';
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition: 'left' | 'right';
}

interface ProcessStepData {
  number: number;
  title: string;
  description: string;
}

interface BenefitData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, ServiceDetail, ProcessStep, BenefitCard, CtaSection],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services: ServiceData[] = [
    {
      icon: 'users',
      title: 'Domestic Helpers',
      description: 'Professional household staff trained to the highest standards',
      features: [
        'Housekeeping and home management',
        'Childcare and nanny services',
        'Elderly care and companionship',
        'Cooking and meal preparation',
        'Laundry and ironing services'
      ],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
      imagePosition: 'right'
    },
    {
      icon: 'sparkles',
      title: 'Cleaning Staff',
      description: 'Experienced cleaners for residential and commercial spaces',
      features: [
        'Residential deep cleaning',
        'Office and commercial cleaning',
        'Hotel and hospitality staff',
        'Specialized cleaning services',
        'Maintenance and upkeep'
      ],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
      imagePosition: 'left'
    },
    {
      icon: 'award',
      title: 'Skilled Workers',
      description: 'Certified professionals across various technical fields',
      features: [
        'Construction and building trades',
        'Electrical and plumbing services',
        'Automotive technicians',
        'Healthcare professionals',
        'Hospitality and service staff'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      imagePosition: 'right'
    }
  ];

  processSteps: ProcessStepData[] = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We discuss your specific staffing requirements and preferences'
    },
    {
      number: 2,
      title: 'Candidate Selection',
      description: 'Our team identifies suitable candidates from our vetted database'
    },
    {
      number: 3,
      title: 'Background Verification',
      description: 'Thorough checks including references, medical tests, and police clearance'
    },
    {
      number: 4,
      title: 'Skills Assessment',
      description: 'Practical evaluation to ensure candidates meet your standards'
    },
    {
      number: 5,
      title: 'Training Program',
      description: 'Comprehensive preparation including language and cultural orientation'
    },
    {
      number: 6,
      title: 'Documentation',
      description: 'Complete visa processing and travel arrangements'
    },
    {
      number: 7,
      title: 'Deployment',
      description: 'Safe arrival and smooth transition to the workplace'
    },
    {
      number: 8,
      title: 'Follow-up Support',
      description: 'Ongoing assistance for both employer and worker'
    }
  ];

  benefits: BenefitData[] = [
    {
      title: 'Clear Communication at Every Step',
      description: 'We prioritize open and transparent communication, providing regular updates throughout the recruitment process, ensuring clients and candidates are always well informed.'
    },
    {
      title: 'High-Quality Talent Acquisition',
      description: 'Through rigorous screening and assessment, we ensure every candidate not only meets technical qualifications but also aligns with the client\'s culture and values.'
    },
    {
      title: 'Expertise Across Industries',
      description: 'A wealth of knowledge across multiple sectors, from healthcare to engineering.'
    },
    {
      title: 'Global Reach, Local Insight',
      description: 'We combine international networks with local expertise to match talent to the right roles.'
    },
    {
      title: 'Integrity and Ethics',
      description: 'We maintain high ethical standards, ensuring transparency and professionalism in every interaction.'
    },
    {
      title: 'Time-Efficient Service Delivery',
      description: 'We understand the urgency of staffing needs. Our streamlined recruitment processes ensure timely candidate sourcing and placement, minimizing business downtime.'
    },
    {
      title: 'Flexible, Client Centric Solutions',
      description: 'Customized recruitment processes that align with business goals and timelines.'
    }
  ];
}
