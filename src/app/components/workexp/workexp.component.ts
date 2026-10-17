import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceItem } from '../../interfaces/ExperienceItem';

@Component({
  selector: 'app-workexp',
  imports: [CommonModule],
  templateUrl: './workexp.component.html',
  styleUrl: './workexp.component.css',
})
export class WorkexpComponent {
  experiences: ExperienceItem[] = [
    {
      company: 'Department of Social Welfare and Development (DSWD)',
      role: 'Full Stack Developer',
      period: '2025 - Present',
      description:
        'Contributing to the architecture, development, and maintenance of enterprise government systems that power public service delivery and social welfare initiatives.',
      highlights: [
        'Engineered full-stack web platforms for the Walang Gutom Program (WGP), automating beneficiary intake, scheduling, and real-time monitoring.',
        'Developed self-service partner portals and QR-based attendance tracking systems to streamline field operations.',
        'Collaborated across teams to ensure high availability, clean database design, and responsive interfaces.',
      ],
      technologies: ['Angular', 'Laravel', 'Node.js', 'Express.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
    },
  ];
}
