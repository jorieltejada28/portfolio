import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItem } from '../../interfaces/PortfolioItem';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  selectedProject: PortfolioItem | null = null;

  portfolio: PortfolioItem[] = [
    {
      title: 'JVD Travel and Tour Human Resource System',
      description:
        'A centralized Human Resource management platform designed to streamline employee records, profiling, and workforce administration.',
      image: 'assets/portfolio/JVD.png',
      tech: ['Laravel', 'Tailwind CSS', 'TensorFlow.js', 'MySQL'],
    },
    {
      title: 'Movers Logistics',
      description:
        'An end-to-end logistics management application built to monitor, dispatch, and track the delivery of goods in real time.',
      image: 'assets/portfolio/Movers.png',
      tech: ['Laravel', 'Tailwind CSS', 'DaisyUI', 'MySQL'],
    },
    {
      title: 'Complaint Resolution System',
      description:
        'A structured ticketing and case-tracking web application for logging, managing, and resolving user complaints efficiently.',
      image: 'assets/portfolio/CRS.png',
      tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'Integrated Walang Gutom Management System',
      description:
        'Internal enterprise platform developed to automate beneficiary intake, schedule distribution, and real-time monitoring for the Food Stamp Program.',
      image: 'assets/portfolio/iwgms.png',
      tech: ['Angular', 'Express.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'MySQL'],
    },
    {
      title: 'Walang Gutom Program Revive System',
      description:
        'Internal enterprise dashboard engineered for real-time program tracking and operational monitoring under the Food Stamp Program Revive initiative.',
      image: 'assets/portfolio/revive.png',
      tech: ['Angular', 'Express.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'Retailer Application Portal',
      description:
        'A self-service web portal that streamlines business registration, document submission, and real-time application status tracking for partner retailers.',
      image: 'assets/portfolio/rap.png',
      tech: ['Angular', 'Express.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'MySQL'],
    },
    {
      title: 'WGP Attendance Monitoring System',
      description:
        'A QR code–powered attendance tracking web application that scans participant badges and automatically logs verified records into the database.',
      image: 'assets/portfolio/attendance.png',
      tech: ['Angular', 'Express.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
    },
  ];

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.selectedProject) this.closeModal();
  }

  openModal(project: PortfolioItem): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
