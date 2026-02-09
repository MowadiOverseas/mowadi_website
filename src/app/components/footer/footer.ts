import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Destinations', route: '/destinations' }
  ];

  services = [
    { label: 'Domestic Helpers', route: '/services/domestic-helpers' },
    { label: 'Cleaning Staff', route: '/services/cleaning-staff' },
    { label: 'Skilled Workers', route: '/services/skilled-workers' },
    { label: 'Recruitment Training', route: '/services/recruitment-training' }
  ];

  socialLinks = [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' }
  ];

  contactInfo = {
    location: 'Gatundu-Juja Road, Juja,Nairobi, Kenya',
    poBox: 'P.O. Box 12345-00100',
    phone: '+254 70366 6667',
    email: 'contact@mowadioverseas.com'
  };
}
