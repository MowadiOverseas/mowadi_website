import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  icon = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  link = input.required<string>();
}
