import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  selectedImg: string | null = null;

  portfolio = [
    {
      title: 'JVD Travel and Tour Human Resource System',
      description: 'Human Resource System is a web application that provides a platform for managing the employees information.',
      image: 'assets/portfolio/JVD.png',
      tech: ['Laravel', 'Tailwind CSS', 'TensorFlow.js', 'MySQL']
    },
    {
      title: 'Movers Logistics',
      description: 'Logistics Movers is a web application that provides services to monitor and manage the delivery of goods.',
      image: 'assets/portfolio/Movers.png',
      tech: ['Laravel', 'Tailwind CSS', 'Daisy UI', 'MySQL']
    },
    {
      title: 'Complaint Resolution System',
      description: 'Complaint Resolution System is a web application that provides a platform for managing complaints and resolutions.',
      image: 'assets/portfolio/CRS.png',
      tech: ['Laravel', 'Tailwind CSS', 'MySQL']
    },
    {
      title: 'Integrated Walang Gutom Management System',
      description: 'Internal enterprise platform developed to automate intake, schedule distribution, and real-time monitoring for the Foodstamp Program.',
      image: 'assets/portfolio/iwgms.png',
      tech: ['Angular', 'Express Ts', 'Tailwind CSS', 'Daisy UI', 'MySQL']
    },
    {
      title: 'Walang Gutom Program Revive System',
      description: 'Internal enterprise platform developed to a real-time monitoring for the Foodstamp Program Revive.',
      image: 'assets/portfolio/revive.png',
      tech: ['Angular', 'Express Ts', 'Tailwind CSS', 'MySQL']
    },
    {
      title: 'Retailer Application Portal',
      description: 'A web-based self-service portal that streamlines business registration, application submission, and status tracking for partner retailers.',
      image: 'assets/portfolio/rap.png',
      tech: ['Angular', 'Express Ts', 'Tailwind CSS', 'Daisy UI', 'MySQL']
    },
    {
      title: 'WGP Attendance Monitoring System',
      description: 'A web-based attendance monitoring system that scans QR codes and automatically stores each attendance record in the database.',
      image: 'assets/portfolio/attendance.png',
      tech: ['Angular', 'Express Ts', 'Tailwind CSS', 'MySQL']
    },
  ];

  @HostListener('document:keydown.escape')
  handleEscape() {
    if (this.selectedImg) this.closeModal();
  }

  openModal(img: string) {
    this.selectedImg = img;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedImg = null;
    document.body.style.overflow = 'auto';
  }
}
