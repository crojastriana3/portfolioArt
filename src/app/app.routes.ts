//import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InitComponent } from './components/init/init.component';
//import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./app.component').then((m) => m.AppComponent),
      },
    ],
  },
  { path: '**', component: PagenotfoundComponent },

  //{ path: 'home', component: InitComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: '**', component: PagenotfoundComponent },
  //{ path: 'not-found', component: PagenotfoundComponent },
];

/*@NgModule(
    {
        imports: [RouterModule.forRoot(routes,{useHash:true})],
        exports: [RouterModule],
    }
)*/
