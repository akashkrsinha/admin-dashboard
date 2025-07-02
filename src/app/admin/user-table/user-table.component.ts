import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
 userData: any = [
    {
      userName: 'Akash',
      email: 'akash@gmail.com',
      mobile: '8989898989',
      status: 'Approved',
      role: 'User'
    },
    {
      userName: 'Mukesh',
      email: 'Mukesh@gmail.com',
      mobile: '6585647859',
      status: 'Approved',
      role: 'User'
    },
    {
      userName: 'Vikash',
      email: 'Vikash@gmail.com',
      mobile: '9874563214',
      status: 'Approved',
      role: 'User'
    },
    {
      userName: 'Aman',
      email: 'Aman@gmail.com',
      mobile: '6857475869',
      status: 'Approved',
      role: 'User'
    },
    {
      userName: 'Meena',
      email: 'Meena@gmail.com',
      mobile: '9898653258',
      status: 'Approved',
      role: 'User'
    }
  ];
}
