import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mission-vision-card',
  imports: [],
  templateUrl: './mission-vision-card.html',
  styleUrl: './mission-vision-card.css'
})
export class MissionVisionCard {
  icon = input.required<'target' | 'eye'>();
  title = input.required<string>();
  description = input.required<string>();
}
