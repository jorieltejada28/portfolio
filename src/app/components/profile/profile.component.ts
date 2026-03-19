import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  
  profilePicture = '/assets/pictures/profile.jpg';
  fullName = 'Joriel Tejada';
  role = 'Full-Stack Web Developer';
  email = 'jorieltejada84@gmail.com';
  // contact links
  linkedinURL = 'https://www.linkedin.com/in/joriel-tejada-600257358/';
  linkedinUsername = 'linkedin.com/in/joriel-tejada-600257358/';
  githubURL = 'https://github.com/jorieltejada28';
  githubUsername = 'jorieltejada28';
  location = 'Quezon City, Philippines';
  googleMapsURL = 'https://www.google.com/maps/place/Quezon+City,+Metro+Manila';

  contactLinks = [
    {
      label: this.location,
      link: this.googleMapsURL,
      isExternal: true,
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      label: this.email,
      link: `mailto:${this.email}`,
      isExternal: false,
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
    },
    {
      label: this.linkedinUsername,
      link: this.linkedinURL,
      isExternal: true,
      icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'
    },
    {
      label: this.githubUsername,
      link: this.githubURL,
      isExternal: true,
      icon: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.7-2.8 5.6-5.5 6 .4.3.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3'
    }
  ];

  aboutMe = [
    `I am a Full-Stack Developer with a strong foundation in building scalable, secure,
    and real-time web and mobile applications. My expertise spans across Laravel, Node.js,
    and Express.js with TypeScript, paired with robust frontend development using Angular
    and Socket.IO.`,

    `I gained significant professional experience at the Department of Social Welfare and Development (DSWD),
     where I contributed to the development and maintenance of government systems that support public service
     delivery. During this time, I was responsible for developing and enhancing web platforms and
     mobile applications built with Angular-based technologies.`,

    `I specialize in designing RESTful APIs, implementing secure authentication mechanisms, and building
    real-time features using WebSockets to ensure responsive system interactions. My technical background
    includes working with both MySQL and MongoDB to manage data efficiently.`,
  ];

  skills = [
    {
      title: 'Frontend & Mobile',
      description: 'Angular, TypeScript, Tailwind CSS, RxJS, and Mobile development with Angular-based technologies.',
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
      title: 'Backend & Real-time',
      description: 'Laravel, Node.js, Express.js (TS), Socket.IO, RESTful APIs, and Secure Authentication.',
      iconPath: 'M5 12h14M5 12l4-4m-4 4l4 4'
    },
    {
      title: 'Database & DevOps',
      description: 'MySQL, MongoDB, Git Version Control, Docker, and CI/CD Pipelines.',
      iconPath: 'M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zM9 11h6M9 15h6'
    }
  ];
}
