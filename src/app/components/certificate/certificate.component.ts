import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {
  certificates = [
    { title: 'College Diploma of Bachelor of Information Technology', image: 'assets/certificates/cert1.jpg' },
    { title: 'Certificate of Degree in Bachelor of Information Technology', image: 'assets/certificates/cert2.jpg' },
    { title: 'Certificate of Information Management in the Digital Age', image: 'assets/certificates/cert4.jpg' },
    { title: 'Certificate of Research Forum for A.Y. 2023-2024', image: 'assets/certificates/cert5.jpg' },
    { title: 'Certificate of Research Forum for A.Y. 2024', image: 'assets/certificates/cert6.jpg' },
    { title: 'Certificate of I.T Caravan Competition', image: 'assets/certificates/cert7.jpg' },
    { title: `Certificate of Understanding the Innovators' Role in Digital Tranformation`, image: 'assets/certificates/cert8.jpg' },
    { title: 'TESDA Certificate of Programming Java NC III', image: 'assets/certificates/cert9.jpg' },
    { title: 'Spring Valey Certificate of Programming Java NC III', image: 'assets/certificates/cert10.jpg' },
    { title: 'Certificate of Internship at the Depatment of Social Welfare', image: 'assets/certificates/cert3.jpg' },
    { title: 'Certificate of WGP Workshop Refuel', image: 'assets/certificates/cert11.jpg' },
    { title: 'Certificate of WGP Workshop Performance Review and Evaluation', image: 'assets/certificates/cert12.jpg' },
    { title: 'Certificate of Cybersecurity Awareness Campaign Webinar Series', image: 'assets/certificates/cert13.jpg' },
  ];

  selectedImg: string | null = null;

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: any) { // Use any or KeyboardEvent
    const kbEvent = event as KeyboardEvent;
    if (this.selectedImg) {
      this.closeModal();
    }
  }

  openModal(img: string) {
    this.selectedImg = img;
    // Disables background scrolling
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedImg = null;
    // Re-enables background scrolling
    document.body.style.overflow = 'auto';
  }
}
