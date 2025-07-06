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

  constructor(){
    if(sessionStorage.getItem('selectedMenu')){
      this.selectedMenu = sessionStorage.getItem('selectedMenu')!;
    }
  }

  menuClicked(menu: string) {
    this.selectedMenu = menu;
    sessionStorage.setItem('selectedMenu', this.selectedMenu);
  }

}
