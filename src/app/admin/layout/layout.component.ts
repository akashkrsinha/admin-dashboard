import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  menus: any = [
    {
      label: 'Dashboard',
      link: 'dashboard',
      faIcon: 'fa-th',
    },
    {
      label: 'Users Table',
      link: 'users',
      faIcon: 'fa-user-circle'
    }
  ];

}
