import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = signal<ContactForm>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  services = [
    'General Inquiry',
    'Skilled Worker Recruitment',
    'Healthcare Professionals',
    'Technical & Engineering',
    'Hospitality & Tourism',
    'Agriculture & Farming',
    'Other'
  ];

  onSubmit() {
    const data = this.formData();
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for contacting us! We will get back to you soon.');

    // Reset form
    this.formData.set({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  }

  updateField(field: keyof ContactForm, value: string) {
    this.formData.update(current => ({
      ...current,
      [field]: value
    }));
  }

  openWhatsApp() {
    window.open('https://wa.me/254700123456', '_blank');
  }
}
