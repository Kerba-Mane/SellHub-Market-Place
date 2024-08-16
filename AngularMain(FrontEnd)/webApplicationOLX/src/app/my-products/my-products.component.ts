import { Component } from '@angular/core';
import { Product } from '../products/product';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent {
  products:Product[]=[]
  userName:String | null=localStorage.getItem('userName');
  store: any;
  constructor(private http:HttpClient,private router:Router){
  
    
  }
  
  editProduct(product: Product) {
    // localStorage.setItem('product', JSON.stringify(product));
    //console.log(product);
    this.router.navigate([`/edit/${product.productId}`]);
  }
  
  
  deleteProduct(productId: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8085/deleteProductsByproductId/${productId}`).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              'The product has been deleted.',
              'success'
            ).then(() => {
              window.location.reload();
              this.router.navigate(['/myproduct']); 
            });
          },
          error => {
            console.error('Error deleting product:', error);
          }
        );
      }
    });
  }
  
  ngOnInit():void{
    this.http.get<Product[]>(`http://localhost:8085/getProductsByUsername/${this.userName}`).subscribe(
      data => {
        console.log(data)
        this.products = data;
      },
      error => {
        console.error('Error fetching products:', error);
  }
  );
  }
  }