import { Component } from '@angular/core';
import { MainComponent } from '../../layouts/main/main.component';
import { ProfileComponent } from '../../components/profile/profile.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
