import { Component, input } from '@angular/core';

@Component({
  selector: 'app-team-member',
  imports: [],
  templateUrl: './team-member.html',
  styleUrl: './team-member.css'
})
export class TeamMember {
  name = input.required<string>();
  role = input.required<string>();
  image = input.required<string>();
}
