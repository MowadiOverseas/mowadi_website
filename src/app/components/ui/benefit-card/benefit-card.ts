import { Component, input } from '@angular/core';

@Component({
  selector: 'app-benefit-card',
  imports: [],
  templateUrl: './benefit-card.html',
  styleUrl: './benefit-card.css'
})
export class BenefitCard {
  title = input.required<string>();
  description = input.required<string>();
}
