import { Component } from '@angular/core';
import { MainComponent } from '../../layouts/main/main.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { WorkexpComponent } from '../../components/workexp/workexp.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent, ProfileComponent, WorkexpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
