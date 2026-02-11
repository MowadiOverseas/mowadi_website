import { Component, input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css'
})
export class BlogCard {
  title = input.required<string>();
  excerpt = input.required<string>();
  category = input.required<string>();
  author = input.required<string>();
  date = input.required<string>();
  image = input.required<string>();
}
