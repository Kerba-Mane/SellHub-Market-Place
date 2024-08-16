package com.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_info")
public class Registration {
		
		
		    @Column
		    private String userName;
		    @Column
		    private String password;
		    @Id
		    @Column
		    private String email;
		    @Column()
		    private String contact;
		    @Column()
		    private String address;
		    
			public Registration() {
				super();
				
			}

			public Registration(String userName, String password, String email, String contact, String address) {
				super();
				this.userName = userName;
				this.password = password;
				this.email = email;
				this.contact = contact;
				this.address = address;
			}

			public String getUserName() {
				return userName;
			}

			public void setUserName(String userName) {
				this.userName = userName;
			}

			public String getPassword() {
				return password;
			}

			public void setPassword(String password) {
				this.password = password;
			}

			public String getEmail() {
				return email;
			}

			public void setEmail(String email) {
				this.email = email;
			}

			public String getContact() {
				return contact;
			}

			public void setContact(String contact) {
				this.contact = contact;
			}

			public String getAddress() {
				return address;
			}

			public void setAddress(String address) {
				this.address = address;
			}

			@Override
			public String toString() {
				return "UserInfo [userName=" + userName + ", password=" + password + ", email=" + email + ", contact="
						+ contact + ", address=" + address + "]";
			}
		     
	
	}



