import { Component, input } from '@angular/core';

@Component({
  selector: 'app-process-step',
  imports: [],
  templateUrl: './process-step.html',
  styleUrl: './process-step.css'
})
export class ProcessStep {
  number = input.required<number>();
  title = input.required<string>();
  description = input.required<string>();
}
