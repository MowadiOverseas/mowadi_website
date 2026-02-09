import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonial-card',
  imports: [CommonModule],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css',
})
export class TestimonialCard {
  testimonial = input.required<Testimonial>();
}
