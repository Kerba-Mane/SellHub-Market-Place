import { Component } from '@angular/core';
import { Product } from '../products/product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent {
  products:Product[]=[]
  userName:String | null=localStorage.getItem('userName');
  
  constructor(private http:HttpClient,private router:Router,private activeroute:ActivatedRoute){
  
    
  }
  
  
  
  ngOnInit():void{
    const proId = this.activeroute.snapshot.params[('proId')];

    this.http.get<Product[]>(`http://localhost:8085/getproductbyId/${proId}`).subscribe(
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
