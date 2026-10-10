import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate',
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent implements OnInit, OnDestroy {
  currentCertificateIndex = 0;
  isSlideshowPlaying = true;

  private slideshowInterval?: ReturnType<typeof setInterval>;
  private readonly slideDuration = 3000;

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
    if (!this.isSlideshowPlaying) {
      this.startSlideshow();
    }
  }

  nextCertificate(): void {
    if (this.certificates.length < 2) return;
    this.currentCertificateIndex =
      (this.currentCertificateIndex + 1) % this.certificates.length;
  }

  previousCertificate(): void {
    if (this.certificates.length < 2) return;
    this.currentCertificateIndex =
      (this.currentCertificateIndex - 1 + this.certificates.length) %
      this.certificates.length;
  }

  goToCertificate(index: number): void {
    if (index < 0 || index >= this.certificates.length) return;
    this.currentCertificateIndex = index;
  }

  /** Circular offset of a slide relative to the current one (-2..2) */
  private getOffset(index: number): number {
    const n = this.certificates.length;
    let d = (((index - this.currentCertificateIndex) % n) + n) % n;
    if (d > n / 2) d -= n;
    return Math.max(-2, Math.min(2, d));
  }

  getSlideStyle(index: number): Record<string, string> {
    const d = this.getOffset(index);
    const abs = Math.abs(d);

    const scale = abs === 0 ? 1 : 0.85;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.4 : 0;
    const blur = abs === 0 ? '0px' : '1px';

    return {
      transform: `translate(calc(-50% + ${d * 90}%), -50%) scale(${scale})`,
      opacity: String(opacity),
      filter: `blur(${blur})`,
      zIndex: abs === 0 ? '30' : '10',
      pointerEvents: abs > 1 ? 'none' : 'auto',
    };
  }

  onSlideClick(index: number): void {
    const d = this.getOffset(index);
    if (d === 0) this.openModal(this.certificates[index].image);
    else if (d === -1) this.previousCertificate();
    else if (d === 1) this.nextCertificate();
  }

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
    { title: 'Walang Gutom Program (WGP) Information Technology (IT) Systems and Database Conferencce', image: 'assets/certificates/cert14.jpg' },
  ];

  selectedImg: string | null = null;

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEvent(event: Event) {
    if (this.selectedImg) {
      this.closeModal();
    }
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
