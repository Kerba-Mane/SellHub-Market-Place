package com.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int cardId;
	@Column
	String email;
	@Column
	int productId;
	
	
	public Cart() {
		super();
	}


	public Cart(int cardId, String email, int productId) {
		super();
		this.cardId = cardId;
		this.email = email;
		this.productId = productId;
	}


	public int getCardId() {
		return cardId;
	}


	public void setCardId(int cardId) {
		this.cardId = cardId;
	}


	public String getUserEmail() {
		return email;
	}


	public void setUserEmail(String email) {
		this.email = email;
	}


	public int getProductId() {
		return productId;
	}


	public void setProductId(int productId) {
		this.productId = productId;
	}


	@Override
	public String toString() {
		return "Cart [cardId=" + cardId + ", userEmail=" + email + ", productId=" + productId + "]";
	}
	
	
	

}