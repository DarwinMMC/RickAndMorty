import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from 'src/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  options: Navigation[] = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Characters',
      path: '/characters',
    },
  ];
}
