import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsCondiftionsComponent } from './terms-condiftions/terms-condiftions.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import Swal from 'sweetalert2';
import { NavloginComponent } from './navlogin/navlogin.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { EditYProductComponent } from './edit-y-product/edit-y-product.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    TermsCondiftionsComponent,
    AddProductComponent,
    SliderComponent,
    ProductsComponent,
    NavloginComponent,
    MyProductsComponent,
    EditYProductComponent,
    MyOrdersComponent,
    PaymentComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
