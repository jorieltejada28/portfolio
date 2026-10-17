import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateItem } from '../../interfaces/CertificateItem';

@Component({
  selector: 'app-certificate',
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css',
})
export class CertificateComponent implements OnInit, OnDestroy {
  currentCertificateIndex = 0;
  isSlideshowPlaying = true;
  selectedImg: string | null = null;

  private slideshowInterval?: ReturnType<typeof setInterval>;
  private readonly slideDuration = 3500;

  certificates: CertificateItem[] = [
    {
      title: 'College Diploma of Bachelor of Information Technology',
      issuer: 'University Diploma',
      category: 'Academic Degree',
      image: 'assets/certificates/cert1.jpg',
    },
    {
      title: 'Certificate of Degree in Bachelor of Information Technology',
      issuer: 'Academic Conferral',
      category: 'Academic Degree',
      image: 'assets/certificates/cert2.jpg',
    },
    {
      title: 'TESDA Certificate of Programming Java NC III',
      issuer: 'TESDA National Certification',
      category: 'National Credential',
      image: 'assets/certificates/cert9.jpg',
    },
    {
      title: 'Spring Valley Certificate of Programming Java NC III',
      issuer: 'Spring Valley Tech Corp.',
      category: 'Technical Training',
      image: 'assets/certificates/cert10.jpg',
    },
    {
      title: 'Certificate of Internship at the Department of Social Welfare and Development',
      issuer: 'DSWD',
      category: 'Government Internship',
      image: 'assets/certificates/cert3.jpg',
    },
    {
      title: 'Walang Gutom Program (WGP) IT Systems and Database Conference',
      issuer: 'DSWD — Walang Gutom Program',
      category: 'Enterprise Systems',
      image: 'assets/certificates/cert14.jpg',
    },
    {
      title: 'Certificate of WGP Workshop Performance Review and Evaluation',
      issuer: 'DSWD — Walang Gutom Program',
      category: 'Professional Workshop',
      image: 'assets/certificates/cert12.jpg',
    },
    {
      title: 'Certificate of WGP Workshop Refuel',
      issuer: 'DSWD — Walang Gutom Program',
      category: 'Professional Workshop',
      image: 'assets/certificates/cert11.jpg',
    },
    {
      title: 'Certificate of Cybersecurity Awareness Campaign Webinar Series',
      issuer: 'Cybersecurity Series',
      category: 'Security & Compliance',
      image: 'assets/certificates/cert13.jpg',
    },
    {
      title: 'Certificate of Information Management in the Digital Age',
      issuer: 'IT Seminar Series',
      category: 'Information Management',
      image: 'assets/certificates/cert4.jpg',
    },
    {
      title: "Certificate of Understanding the Innovators' Role in Digital Transformation",
      issuer: 'Digital Innovation Forum',
      category: 'Digital Transformation',
      image: 'assets/certificates/cert8.jpg',
    },
    {
      title: 'Certificate of I.T. Caravan Competition',
      issuer: 'IT Caravan',
      category: 'Competition',
      image: 'assets/certificates/cert7.jpg',
    },
    {
      title: 'Certificate of Research Forum for A.Y. 2024',
      issuer: 'Academic Research Forum',
      category: 'Research',
      image: 'assets/certificates/cert6.jpg',
    },
    {
      title: 'Certificate of Research Forum for A.Y. 2023-2024',
      issuer: 'Academic Research Forum',
      category: 'Research',
      image: 'assets/certificates/cert5.jpg',
    },
  ];

  get currentCert(): CertificateItem {
    return this.certificates[this.currentCertificateIndex];
  }

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  startSlideshow(): void {
    this.stopSlideshow();
    if (this.certificates.length < 2) return;

    this.isSlideshowPlaying = true;
    this.slideshowInterval = setInterval(() => {
      this.nextCertificate();
    }, this.slideDuration);
  }

  stopSlideshow(): void {
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
      this.slideshowInterval = undefined;
    }
    this.isSlideshowPlaying = false;
  }

  pauseSlideshow(): void {
    this.stopSlideshow();
  }

  resumeSlideshow(): void {
    if (!this.isSlideshowPlaying && !this.selectedImg) {
      this.startSlideshow();
    }
  }

  nextCertificate(): void {
    if (this.certificates.length < 2) return;
    this.currentCertificateIndex =
      (this.currentCertificateIndex + 1) % this.certificates.length;
    if (this.selectedImg) {
      this.selectedImg = this.currentCert.image;
    }
  }

  previousCertificate(): void {
    if (this.certificates.length < 2) return;
    this.currentCertificateIndex =
      (this.currentCertificateIndex - 1 + this.certificates.length) %
      this.certificates.length;
    if (this.selectedImg) {
      this.selectedImg = this.currentCert.image;
    }
  }

  goToCertificate(index: number): void {
    if (index < 0 || index >= this.certificates.length) return;
    this.currentCertificateIndex = index;
    if (this.selectedImg) {
      this.selectedImg = this.currentCert.image;
    }
  }

  /** Circular offset of a slide relative to the current one (-2..2) */
  private getOffset(index: number): number {
    const n = this.certificates.length;
    let d = (((index - this.currentCertificateIndex) % n) + n) % n;
    if (d > n / 2) d -= n;
    return Math.max(-2, Math.min(2, d));
  }

  /** True 3D Coverflow style (leaves transition timing to certificate.component.css) */
  getSlideStyle(index: number): Record<string, string> {
    const d = this.getOffset(index);
    const abs = Math.abs(d);

    const translateX = d * 68;
    const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.68;
    const rotateY = d * -18;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.45 : 0;
    const blur = abs === 0 ? '0px' : '1.5px';

    return {
      transform: `translate3d(calc(-50% + ${translateX}%), -50%, 0) perspective(1200px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: String(opacity),
      filter: `blur(${blur})`,
      zIndex: abs === 0 ? '30' : abs === 1 ? '20' : '10',
      pointerEvents: abs > 1 ? 'none' : 'auto',
    };
  }

  onSlideClick(index: number): void {
    const d = this.getOffset(index);
    if (d === 0) this.openModal(this.certificates[index].image);
    else if (d === -1) this.previousCertificate();
    else if (d === 1) this.nextCertificate();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.selectedImg) {
      this.closeModal();
    } else if (event.key === 'ArrowRight') {
      this.nextCertificate();
    } else if (event.key === 'ArrowLeft') {
      this.previousCertificate();
    }
  }

  openModal(img: string): void {
    this.pauseSlideshow();
    this.selectedImg = img;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedImg = null;
    document.body.style.overflow = 'auto';
    this.resumeSlideshow();
  }
}
