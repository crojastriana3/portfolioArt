//import { NgModule, Component } from '@angular/core';

import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
