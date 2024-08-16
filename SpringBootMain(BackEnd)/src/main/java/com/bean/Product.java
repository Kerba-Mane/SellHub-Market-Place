package com.bean;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "sellproduct")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int productId;
	@Column
	private String productTitle;//subcategory
	@Column
	private String productType;//category
	@Column
	private String productName;
	@Column(length = 500)
	private String productdesc;
	@Column
	private double productPrice;
	@Column
	private String addedby;
	private String img1;
	private String img2;
	private String img3;
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(int productId, String productTitle, String productType, String productName, String productdesc,
			double productPrice, String addedby, String img1, String img2, String img3) {
		super();
		this.productId = productId;
		this.productTitle = productTitle;
		this.productType = productType;
		this.productName = productName;
		this.productdesc = productdesc;
		this.productPrice = productPrice;
		this.addedby = addedby;
		this.img1 = img1;
		this.img2 = img2;
		this.img3 = img3;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductTitle() {
		return productTitle;
	}
	public void setProductTitle(String productTitle) {
		this.productTitle = productTitle;
	}
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductdesc() {
		return productdesc;
	}
	public void setProductdesc(String productdesc) {
		this.productdesc = productdesc;
	}
	public double getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}
	public String getAddedby() {
		return addedby;
	}
	public void setAddedby(String addedby) {
		this.addedby = addedby;
	}
	public String getImg1() {
		return img1;
	}
	public void setImg1(String img1) {
		this.img1 = img1;
	}
	public String getImg2() {
		return img2;
	}
	public void setImg2(String img2) {
		this.img2 = img2;
	}
	public String getImg3() {
		return img3;
	}
	public void setImg3(String img3) {
		this.img3 = img3;
	}
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productTitle=" + productTitle + ", productType=" + productType
				+ ", productName=" + productName + ", productdesc=" + productdesc + ", productPrice=" + productPrice
				+ ", addedby=" + addedby + ", img1=" + img1 + ", img2=" + img2 + ", img3=" + img3 + "]";
	}
	
	
}
