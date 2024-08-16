
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../products/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-y-product',
  templateUrl: './edit-y-product.component.html',
  styleUrls: ['./edit-y-product.component.css'] // Fixed the property name from styleUrl to styleUrls
})
export class EditYProductComponent implements OnInit {
  userName: string | null = localStorage.getItem('userName');
  product!: Product;
  
  myform = new FormGroup({
    productId: new FormControl("", Validators.required),
    productType: new FormControl("", Validators.required),
    productTitle: new FormControl("", Validators.required),
    productName: new FormControl("", Validators.required),
    productdesc: new FormControl(""),
    productPrice: new FormControl("", Validators.required),
    img1: new FormControl(""),
    img2: new FormControl(""),
    img3: new FormControl(""),
  });


  constructor(private http: HttpClient, private activeRouts: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    const proId = this.activeRouts.snapshot.params['proId'];
    console.log(proId);

    this.http.get<Product>(`http://localhost:8085/getproductbyId/${proId}`).subscribe(
      (data: Product) => {
        this.product = data;
        console.log(data);
        console.log(this.product);
        
        // Populate the form with the fetched product data
        this.myform.setValue({
          productId: this.product.productId || "",
          productType: this.product.productType || "",
          productTitle: this.product.productTitle || "",
          productName: this.product.productName || "",
          productdesc: this.product.productdesc || "",
          productPrice: this.product.productPrice || "",
          img1: this.product.img1 || "",
          img2: this.product.img2 || "",
          img3: this.product.img3 || ""
        });
      },
      error => {
        console.error('Error occurred:', error);
        alert('An error occurred: ' + error.message);
      }
    );
  }

  handlesubmit() {
    console.log(this.myform.value);
    
    if (this.myform.valid) {
      if (this.userName) {
        this.http.put(`http://localhost:8085/editProduct`, this.myform.value).subscribe(
          data => {
           swal("Product updated successfully");
            this.router.navigate(["/myproduct"]);
            
          },
          error => {
            console.error('Error occurred:', error);
            swal('An error occurred: ' + error.message);
          }
        );
      }
    } else {
      swal('Please fill in all required fields.');
    }
  }
}



