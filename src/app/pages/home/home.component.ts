import { Component } from '@angular/core';
import { MainComponent } from '../../layouts/main/main.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { WorkexpComponent } from '../../components/workexp/workexp.component';
import { CertificateComponent } from '../../components/certificate/certificate.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
@Component({
  selector: 'app-home',
  imports: [MainComponent, ProfileComponent, WorkexpComponent, CertificateComponent, PortfolioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
