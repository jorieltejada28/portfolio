import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterNavLink } from '../../interfaces/FooterNavLink';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  // Availability & Branding
  isAvailable = true;
  statusText = 'Available for new projects';
  headlinePrefix = 'Available for';
  headlineHighlight = 'Opportunities';
  tagline =
    'A Full-Stack Developer passionate about building accessible, human-centered products with Angular, Laravel, and TypeScript.';

  // Contact Info
  email = 'jorieltejada84@gmail.com';
  location = 'Quezon City, Philippines';

  // Navigation Links (Matches Navbar & Home Sections)
  navLinks: FooterNavLink[] = [
    { title: 'Profile', sectionId: 'profile', path: '/' },
    { title: 'Experience', sectionId: 'experience', path: '/experience' },
    { title: 'Credentials', sectionId: 'credentials', path: '/credentials' },
    { title: 'Projects', sectionId: 'projects', path: '/projects' },
  ];

  // Bottom Bar Info
  currentYear = new Date().getFullYear();
  builtWith = ['Angular', 'Tailwind'];

  scrollToSection(sectionId: string, event: Event): void {
    const element = document.getElementById(sectionId);
    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
