import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  selectedMenu: string = 'Dashboard';
  showMobileMenu: boolean = false;
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

  constructor() {
    if (sessionStorage.getItem('selectedMenu')) {
      this.selectedMenu = sessionStorage.getItem('selectedMenu')!;
    }
  }

  menuClicked(menu: string, fromMobileMenu: boolean) {
    if(fromMobileMenu){
      this.showMobileMenu = false;
    }

    this.selectedMenu = menu;
    sessionStorage.setItem('selectedMenu', this.selectedMenu);
  }

  mobileMenuClicked() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
