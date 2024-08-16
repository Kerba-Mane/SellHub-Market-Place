import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string=""
  password:string=""
  userName:string=""
  store:any
  constructor(private http:HttpClient, private router:Router){}
handlelogin() {
  this.http.get(`http://localhost:8085/userlogin/${this.email}/${this.password}`).subscribe(
    data => {
      this.store = data;
      if (this.store && this.store.userName) { // Check if the response contains a userName
        localStorage.setItem('userName', this.store.userName);
        this.router.navigate(['/home']); // Navigate to the desired component after login
      } else {
        alert("User not found or incorrect credentials.");
      }
    },
    error => {
      console.error('Error occurred:', error);
      // alert('An error occurred: ' + error.message);
}
);
}





}
