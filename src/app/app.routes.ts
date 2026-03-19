import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'portfolio',
    component: HomeComponent,
  },

  {
    path: '**',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  }
];
