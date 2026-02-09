import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSection } from '../../components/ui/hero-section/hero-section';
import { ServiceCard } from '../../components/ui/service-card/service-card';
import { StatCard } from '../../components/ui/stat-card/stat-card';
import { TestimonialCard } from '../../components/ui/testimonial-card/testimonial-card';
import { CtaSection } from '../../components/ui/cta-section/cta-section';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

interface StatItem {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, HeroSection, ServiceCard, StatCard, TestimonialCard, CtaSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  currentTestimonial = signal(0);
  placementCount = signal(0);

  services: Service[] = [
    {
      icon: 'users',
      title: 'Domestic Helpers',
      description: 'Trained, reliable domestic workers for household management, childcare, and elderly care.',
      link: '/services'
    },
    {
      icon: 'sparkles',
      title: 'Cleaning Staff',
      description: 'Professional cleaning personnel for residential, commercial, and hospitality sectors.',
      link: '/services'
    },
    {
      icon: 'award',
      title: 'Skilled Workers',
      description: 'Experienced technicians, construction workers, and specialized professionals.',
      link: '/services'
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Ahmed Al-Rashid',
      location: 'Riyadh, Saudi Arabia',
      text: 'Mowadi Overseas provided us with exceptional domestic helpers. Professional service from start to finish.',
      rating: 5
    },
    {
      name: 'Fatima Hassan',
      location: 'Dubai, UAE',
      text: 'Highly reliable agency. The cleaning staff we hired exceeded our expectations in every way.',
      rating: 5
    },
    {
      name: 'Mohammed Abdullah',
      location: 'Abu Dhabi, UAE',
      text: 'Best recruitment agency for skilled workers. They truly understand the needs of Middle Eastern employers.',
      rating: 5
    }
  ];

  stats: StatItem[] = [
    {
      icon: 'check',
      title: 'Integrity',
      description: 'Honest and transparent recruitment process'
    },
    {
      icon: 'award',
      title: 'Professionalism',
      description: 'Certified and experienced team members'
    },
    {
      icon: 'check',
      title: 'Reliability',
      description: 'Consistent quality and timely delivery'
    }
  ];

  processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Apply',
      description: 'Candidates submit applications and required documents'
    },
    {
      number: 2,
      title: 'Screen',
      description: 'Thorough background checks and skills assessment'
    },
    {
      number: 3,
      title: 'Train',
      description: 'Comprehensive training and cultural orientation'
    },
    {
      number: 4,
      title: 'Deploy',
      description: 'Safe deployment with ongoing support'
    }
  ];

  private testimonialInterval?: ReturnType<typeof setInterval>;
  private counterInterval?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.startTestimonialCarousel();
    this.animateCounter();
  }

  ngOnDestroy() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    if (this.counterInterval) {
      clearInterval(this.counterInterval);
    }
  }

  private startTestimonialCarousel() {
    this.testimonialInterval = setInterval(() => {
      this.currentTestimonial.update(current => (current + 1) % this.testimonials.length);
    }, 5000);
  }

  private animateCounter() {
    const targetCount = 5000;
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    this.counterInterval = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        this.placementCount.set(targetCount);
        if (this.counterInterval) {
          clearInterval(this.counterInterval);
        }
      } else {
        this.placementCount.set(Math.floor(current));
      }
    }, duration / steps);
  }

  selectTestimonial(index: number) {
    this.currentTestimonial.set(index);
  }
}
