import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCard } from '../../components/ui/blog-card/blog-card';

type Category = 'All Articles' | 'Tips & Advice' | 'Legal & Rights' | 'Destinations' | 'Success Stories' | 'Culture' | 'Finance' | 'Health & Safety';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule, BlogCard],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  selectedCategory = signal<Category>('All Articles');

  categories: Category[] = [
    'All Articles',
    'Tips & Advice',
    'Legal & Rights',
    'Destinations',
    'Success Stories',
    'Culture',
    'Finance',
    'Health & Safety'
  ];

  allPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 10 Tips for Working in Saudi Arabia',
      excerpt: 'Essential advice for domestic workers preparing to work in the Kingdom of Saudi Arabia...',
      category: 'Tips & Advice',
      author: 'Sarah Mwangi',
      date: 'February 5, 2026',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Understanding Your Employment Contract',
      excerpt: 'A comprehensive guide to understanding the terms and conditions of your overseas...',
      category: 'Legal & Rights',
      author: 'David Ochieng',
      date: 'February 3, 2026',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Life in Dubai: What to Expect',
      excerpt: 'Insights into living and working in the vibrant city of Dubai, UAE...',
      category: 'Destinations',
      author: 'Grace Akinyi',
      date: 'January 28, 2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Success Story: From Nairobi to Riyadh',
      excerpt: 'How Jane transformed her life working as a domestic helper in Saudi Arabia...',
      category: 'Success Stories',
      author: 'James Kamau',
      date: 'January 25, 2026',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Cultural Adaptation: Embracing Middle Eastern Traditions',
      excerpt: 'Learn about local customs and traditions to help you integrate smoothly...',
      category: 'Culture',
      author: 'Sarah Mwangi',
      date: 'January 20, 2026',
      image: 'https://images.unsplash.com/photo-1549488497-62a7a3e9fa00?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Managing Your Finances Abroad',
      excerpt: 'Smart money management tips for overseas workers sending money home...',
      category: 'Finance',
      author: 'David Ochieng',
      date: 'January 15, 2026',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Health and Safety Guidelines',
      excerpt: 'Important health and safety information for domestic workers abroad...',
      category: 'Health & Safety',
      author: 'Grace Akinyi',
      date: 'January 10, 2026',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      title: 'Your Rights as an Overseas Worker',
      excerpt: 'Know your rights and protections under international labor laws...',
      category: 'Legal & Rights',
      author: 'James Kamau',
      date: 'January 5, 2026',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop'
    },
    {
      id: 9,
      title: 'Exploring Kuwait: A Workers Guide',
      excerpt: 'Everything you need to know about living and working in Kuwait...',
      category: 'Destinations',
      author: 'Sarah Mwangi',
      date: 'December 30, 2025',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop'
    }
  ];

  get filteredPosts() {
    if (this.selectedCategory() === 'All Articles') {
      return this.allPosts;
    }
    return this.allPosts.filter(post => post.category === this.selectedCategory());
  }

  selectCategory(category: Category) {
    this.selectedCategory.set(category);
  }
}
