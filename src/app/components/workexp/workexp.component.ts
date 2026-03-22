import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workexp',
  imports: [CommonModule],
  templateUrl: './workexp.component.html',
  styleUrl: './workexp.component.css',
})
export class WorkexpComponent {
  experiences = [
    {
      company: 'Department of Social Welfare and Development (DSWD)',
      role: 'Full Stack Developer',
      period: '2025 - Present',
      description: 'Contributing to the development and maintenance of government systems that support public service delivery. Focusing on scalable web platforms and mobile applications.',
      technologies: ['Laravel', 'Angular', 'Node.js', 'TypeScript']
    }
  ];
}
