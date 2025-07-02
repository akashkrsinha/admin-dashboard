import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  selectedMenu: string = 'Dashboard';
  menus: any = [
    {
      label: 'Dashboard',
      link: 'dashboard',
      faIcon: 'fa-th',
    },
    {
      label: 'Users',
      link: 'users',
      faIcon: 'fa-user-circle'
    }
  ];

  menuClicked(menu: string) {
    this.selectedMenu = menu;
  }

}
