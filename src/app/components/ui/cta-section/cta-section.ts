import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../button/button';

@Component({
  selector: 'app-cta-section',
  imports: [RouterLink, Button],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class CtaSection {}
