import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'men', component: MenComponent }
];