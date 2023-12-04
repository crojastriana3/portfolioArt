import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InitComponent } from './components/init/init.component';

export const routes: Routes = [
  { path: 'home', component: InitComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PagenotfoundComponent },
  { path: 'not-found', component: PagenotfoundComponent },
];
