import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { variationPlacements } from '@popperjs/core';

declare var Razorpay:any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  variable: ActivatedRoute = inject(ActivatedRoute);
  captureCat: any = "";
  searchResults: any[] = []; // Stor
  constructor(private http: HttpClient, private activeroute: ActivatedRoute,private router:Router) {
    // this.getalldata();
    // this.variable.data.subscribe(
    //   (success)=>{
    //     console.log(success);
    //     this.captureCat=success;
    //   }
    // )

  }
  ngOnInit(): void {
    const subcategory = this.activeroute.snapshot.params[('subcategory')];
    const category = this.activeroute.snapshot.params[('category')]
    const searchproduct = this.activeroute.snapshot.params[('searchproduct')]
    const search=JSON.stringify(searchproduct);
    console.log("subcategory",subcategory);
    console.log("category",category);
    console.log("searchproduct",searchproduct);
    console.log("searchproduct",search);
    


    if (subcategory == "all") {
      this.http.get<Product[]>(`http://localhost:8085/getProductsByType/${category}`).subscribe(
        (data: any) => {
          console.log(data);
          this.products = data;
        },
        error => {
          console.log(error);
        }
      )
    } 
    else if(searchproduct !=null ){
      this.http.get<any[]>(`http://localhost:8085/getSearchProduct/${searchproduct}`).subscribe(
        data => {
          this.searchResults = data;
          this.products = data;
          console.log('Search results:', this.searchResults);
        },
        error => {
          console.error('Error fetching search results', error);
        }
      );
    }
    else {
      this.http.get<Product[]>(`http://localhost:8085/getProductsByCategory/${subcategory}`).subscribe(
        (data: any) => {
          console.log(data);
          this.products = data;
        },
        error => {
          console.log(error);
        }
      )
    }
    // this.http.get<Product[]>(`http://localhost:8085/getallProduct`).subscribe(
    //   (data:any) =>{
    //     console.log(data);
    //     this.products=data;

    //   },
    //   error =>{
    //     console.log(error);
    //   })
  }

  payNow(product:Product){
      //this.totalprice=product.productPrice*this.price
  //  
      const RozarpayOptions = {
        description: 'Sample Razorpay demo',
        currency: 'INR',
        amount: product.productPrice,
        name: 'SHELL HUB',
        key: 'rzp_test_jQquo6Fk8IDKJ8',
        image: 'shellhub.jpeg',
        prefill: {
          name: 'Kerba Mane',
          email: 'kerbanmane@gmail.com',
          phone: '9898989898'
        },
        theme: {
          color: '#6466e3'
        },
        modal: {
          ondismiss:  () => {
            console.log('dismissed')
          }
        }
      }
  
      const successCallback = (paymentid: any) => {
        console.log(paymentid);
        product.productStatus=false;
        console.log(product.productId);
        this.router.navigate([`/myorders/${product.productId}`]);
        
      }
  
      const failureCallback = (e: any) => {
        console.log(product.productId);
        console.log(e);
      }
  
      Razorpay.open(RozarpayOptions,successCallback, failureCallback)
    }
  
  }
  // selectCategory(category: string): void {
  //   this.loadProducts(category);
  // }

  // loadProducts(category: string): void {
  //   this.http.get<Product[]>(`this.http://localhost:8085/getProductsByCategory/${category}`).subscribe(

  //     data => {
  //       this.products = data;
  //     },
  //     error => {
  //       console.error('Error fetching products:', error);

  //     }
  //   );
  // }






  // addtocart(productId: any) {

  //   this.http.post("http://localhost:8085/addproduct/kerba@gmail.com/" + productId, null).subscribe(
  //     data => {
  //       alert("data added");
  //     },
  //     error => {
  //       console.log(error);
  //     })
  // }





