import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  userData: any = [];
  totalNumberOfData: number = 0;
  totalDataInAPage: number = 10;
  currentPageIndex: number = 0;

  constructor(public router: Router, public userDataService: UserDataService) {
    this.userData = this.userDataService.userData.slice(0, 10); //Taking initially 10 data
    this.totalNumberOfData = this.userDataService.userData.length;
  }

  addUserClicked() {
    this.router.navigateByUrl('admin/user-form');
  }

    editUser(editUserEmail: any) {
      this.router.navigateByUrl(`admin/user-form?userEmail=${editUserEmail}`);
    }

  deleteUSer(deleteUserEmail: string) {
    Swal.fire({
      title: 'Alert!',
      text: 'Are you sure you want to delete this user?',
      icon: 'warning',
      showDenyButton: true,
      denyButtonText: 'No',
      showConfirmButton: true,
      confirmButtonText: 'Yes'
    }).then((result: any) => {
      if (result.isConfirmed) {
        let newDataSet: any = [];

        this.userDataService.userData.map((userData: any) => {
          if (userData?.email !== deleteUserEmail) {
            newDataSet.push(userData);
          }
        });

        this.userDataService.userData = newDataSet;
        this.userData = this.userDataService.userData;
      }
    })
  }

  paginationChange(event: any){
    this.totalDataInAPage = event?.rows; //rows == total data in a page
    this.currentPageIndex = event?.page; //page = current page index
    const previousNumberOfData = event?.first;  //first == previous no. of data 
    const endValue = event?.first + event?.rows;
    this.userData = this.userDataService.userData.slice(previousNumberOfData, endValue);    
  }
}
