import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  imports: [CommonModule],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css'
})
export class ServiceDetail {
  icon = input.required<'users' | 'sparkles' | 'award'>();
  title = input.required<string>();
  description = input.required<string>();
  features = input.required<string[]>();
  image = input.required<string>();
  imagePosition = input.required<'left' | 'right'>();
}
