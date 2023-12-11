import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    BannerComponent,
    AboutComponent,
  ],
})
export class LayoutComponent {}
