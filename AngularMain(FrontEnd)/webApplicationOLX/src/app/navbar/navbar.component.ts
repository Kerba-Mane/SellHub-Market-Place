import { Component } from '@angular/core';
import { Registration } from '../registration/Registration';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userName: any;
  registration: Registration = {
    userName: "",
    password: "",
    email: "",
    contact: "",
    address: "",
  };
  constructor(private http: HttpClient, private router: Router) {

    this.userName = localStorage.getItem('userName');
  }
  ngOnInit(): void {

    this.http.get<Registration>(`http://localhost:8085/getuserbyname/${this.userName}`).subscribe(
      data => {
        console.log(this.userName)
        this.registration = data
        console.log(this.registration)
      }
    )
  }
  
  searchname: string = "";
  searchResults: any[] = []; // Store search results
  
  searchByName() {
    console.log("Searching",this.searchname);
    this.router.navigate([`/product/${this.searchname}`]);
    
  }


  // Add this method for logout functionality
  logout() {
    // Clear user session from localStorage
    localStorage.removeItem('userName');
    // Optionally, clear any other session data here
    // Redirect to login page or any other page
    this.router.navigate(['/login']);
  }

}