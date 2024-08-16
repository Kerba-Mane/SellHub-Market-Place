import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  myform: FormGroup = new FormGroup({
    
    productType: new FormControl("", Validators.required),
    productTitle: new FormControl("", Validators.required),
    productName: new FormControl("", Validators.required),
    productdesc: new FormControl(""),
    productPrice: new FormControl("", Validators.required),
    img1: new FormControl(""),
    img2: new FormControl(""),
    img3: new FormControl("")
    
  });

  userName: string | null = localStorage.getItem('userName');

  constructor(private http: HttpClient) {}

  handlesubmit() {
    if (this.myform.valid) {
        if (this.userName) {
            this.http.post(`http://localhost:8085/addProduct/${this.userName}`, this.myform.value).subscribe(
                data => {
                    // Assuming you are using SweetAlert2
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        // Reload the page after the user presses "OK"
                        window.location.reload();
                    });
                },
                error => {
                    // Handle the error scenario
                    console.error('Error occurred:', error);
                    // Optionally, show an error alert to the user
                    Swal.fire({
                        title: 'Oops!',
                        text: 'Something went wrong. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            );
        }
    }
}


}  