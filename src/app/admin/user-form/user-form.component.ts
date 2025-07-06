import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  isCheckboxChecked: boolean = false;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  formInEditMode: boolean = false;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    mobile: new FormControl('', [Validators.pattern('^[6-9]\\d{9}$'), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
    confirmPassword: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    status: new FormControl(false, [Validators.required])
  });

  constructor(public router: Router, public userDataService: UserDataService, public activatedRoute: ActivatedRoute) {
    const userEmailForEdit = this.activatedRoute.snapshot.queryParamMap.get('userEmail');

    // Patching the values to edit the form
    if (userEmailForEdit) {
      this.userDataService.userData.map((userData: any) => {
        if (userData?.email === userEmailForEdit) {
          this.userForm.patchValue({
            name: userData?.name,
            email: userData?.email,
            mobile: userData?.mobile,
            password: userData?.password,
            confirmPassword: userData?.confirmPassword,
            role: userData?.role,
            status: userData?.status
          });
        }
      });

      this.userForm.get('email')?.disable();
      this.formInEditMode = true;
    }

  }

  backIconClicked() {
    this.router.navigateByUrl('admin/users');
  }

  passwordIconClicked() {
    this.passwordVisible = !this.passwordVisible;
  }

  confirmPasswordIconClicked() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  userFormSubmitted() {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      return;
    }

    const isEmailAlreadyCreated = this.userDataService?.userData.some((userData: any) => userData.email == this.userForm.value.email);

    if(isEmailAlreadyCreated){
      Swal.fire('Error!', 'Email Already Exist, please use different email.', 'error');
      return;
    }

    if (this.formInEditMode) {
      this.userDataService.userData = this.userDataService.userData.map((userData: any) => {
        if (userData?.email == this.userForm.getRawValue().email) {
          return { ...this.userForm.getRawValue() };
        }
        return userData;
      });
    } else {
      this.userDataService.userData.push(this.userForm.value);
    }

    Swal.fire({
      title: 'Success',
      text: `User ${this.formInEditMode ? 'Updated' : 'Created'} Successfully`,
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.router.navigateByUrl('admin/users');
    });
  }
}
