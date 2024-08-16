import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { EditYProductComponent } from './edit-y-product/edit-y-product.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},  
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"register",component:RegistrationComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"myproduct",component:MyProductsComponent},
  {path:"myorder",component:MyOrdersComponent},
  {path:"edit/:proId",component:EditYProductComponent},
  {path:"product/:searchproduct",component:ProductsComponent},
  {path:"myorders/:proId",component:MyOrdersComponent},
 
 
  {path:"product/:category/:subcategory",component: ProductsComponent},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
