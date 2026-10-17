import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '../../interfaces/NavItem';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuHidden = true;
  title = 'Portfolio';
  activeSection = 'profile';

  // Matches the exact 4 components in home.component.html (About removed)
  links: NavItem[] = [
    { title: 'Profile', sectionId: 'profile', path: '/' },
    { title: 'Experience', sectionId: 'experience', path: '/experience' },
    { title: 'Credentials', sectionId: 'credentials', path: '/credentials' },
    { title: 'Projects', sectionId: 'projects', path: '/projects' },
  ];

  toggleMenu(): void {
    this.isMenuHidden = !this.isMenuHidden;
  }

  closeMenu(): void {
    this.isMenuHidden = true;
  }

  scrollToSection(sectionId: string, event: Event): void {
    const element = document.getElementById(sectionId);
    if (element) {
      event.preventDefault();
      this.activeSection = sectionId;
      this.closeMenu();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.closeMenu();
    }
  }
}
