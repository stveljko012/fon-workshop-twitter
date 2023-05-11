import { Component } from '@angular/core';
import { Router } from '@angular/router';

const MenuItems = [
  {
    name: 'Home',
    path: '',
    icon: 'bi-house-door-fill',
  },
  {
    name: 'Profile',
    path: 'profile',
    icon: 'bi-person-circle',
  },
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  menuItems = MenuItems;

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
