//import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./components/banner/banner.component').then(
            (m) => m.BannerComponent
          ),
      },
      {
        path: 'works',
        loadComponent: () =>
          import('./components/works/works.component').then(
            (m) => m.WorksComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./components/about/about.component').then(
            (m) => m.AboutComponent
          ),
      },
    ],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
