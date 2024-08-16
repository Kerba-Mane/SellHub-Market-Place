import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  myForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.myForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).*$')
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]),
      address: new FormControl('', Validators.required),
      iAgree: new FormControl(false, Validators.requiredTrue)
    });
  }

  get methodforUserName(): FormControl {
    return this.myForm.get('userName') as FormControl;
  }

  get methodforPassword(): FormControl {
    return this.myForm.get('password') as FormControl;
  }

  get methodforEmail(): FormControl {
    return this.myForm.get('email') as FormControl;
  }

  get methodforContact(): FormControl {
    return this.myForm.get('contact') as FormControl;
  }

  get methodforAddress(): FormControl {
    return this.myForm.get('address') as FormControl;
  }

  get methodforiAgree(): FormControl {
    return this.myForm.get('iAgree') as FormControl;
  }

  handleSubmit() {
    if (this.myForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cannot submit data. Please check the form for errors.'
      });
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'Once submitted, you will not be able to change the information!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.post('http://localhost:8085/userinfoadd', this.myForm.value)
          .subscribe(
            data => {
              if(data==1){
                Swal.fire(
                  'Submitted!',
                  'Your data has been submitted successfully.',
                  'success'
                ).then(() => {
                  this.router.navigate(['/login']);
                });
              }
              else{
                alert("User Details already Exist try to login");
                  
              }
              
            },
            error => {
              console.error(error);
              Swal.fire(
                'Error!',
                'Error occurred while submitting the data.',
                'error'
              );
            }
          );
      } else {
        Swal.fire(
          'Cancelled',
          'Your data is safe!',
          'error'
        );
      }
    });
  }
}
