import { Component, input } from '@angular/core';

@Component({
  selector: 'app-value-card',
  imports: [],
  templateUrl: './value-card.html',
  styleUrl: './value-card.css'
})
export class ValueCard {
  icon = input.required<'shield' | 'users' | 'heart'>();
  title = input.required<string>();
  description = input.required<string>();
}
