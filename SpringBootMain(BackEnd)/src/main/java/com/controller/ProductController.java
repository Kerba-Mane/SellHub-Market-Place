package com.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Product;
import com.dao.ProductInterface;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {
	@Autowired
	ProductInterface preop;

	@PostMapping("/addProduct/{userName}")
	public int addProduct( @PathVariable String userName,@RequestBody Product p) {
		System.out.println("data adding..");
		p.setAddedby(userName);
		preop.save(p);
		return 1;
	}

	@GetMapping("/getallProduct")
	public List<Product> getallProduct() {
		return preop.findAll();
	}

	@GetMapping("/getProductsByCategory/{subcategory}")
	public List<Product> getProductsByCategoryAndType(@PathVariable String subcategory) {
		System.out.println("category" + subcategory);
		System.out.println("category " + preop.findByProductTitle(subcategory));
//		return preop.findByProductTitleAndProductType(category,productType);
		return preop.findByProductTitle(subcategory);
		
	}
	
	@GetMapping("/getProductsByType/{productType}")
	public List<Product> getProductsByType(@PathVariable String productType) {
		System.out.println("productType" + productType);
		return preop.findByProductType(productType);
	}
	
	

	@GetMapping("/getProductsByUsername/{addedby}")
	public List<Product> getProductsByUserName(@PathVariable String addedby) {
		return preop.findByaddedby(addedby); // Corrected usage
	}

	@DeleteMapping("/deleteProductsByproductId/{productId}")
	public int deleteProductsByproductId(@PathVariable int productId) {

		preop.deleteById(productId);
		return 1;
	}

	@PutMapping("/editProduct")
	public int updateProduct( @RequestBody Product product) {
		// TODO: process PUT request
//		 preop.updateProduct(id,p);
//		Optional<Product> prod=preop.findById(proId);
//		if(prod.isPresent())
//		{
//			Product pobj = preop.findById(proId).get();
//			pobj.setAddedby(product.getAddedby());
//			pobj.setImg1(product.getImg1());
//			pobj.setImg2(product.getImg2());
//			pobj.setImg3(product.getImg3());
//			pobj.setProductdesc(product.getProductdesc());
//			pobj.setProductName(product.getProductName());
//			pobj.setProductPrice(product.getProductPrice());
//			pobj.setProductTitle(product.getProductTitle());
//			pobj.setProductType(product.getProductType());
//			
//			preop.save(pobj);
//			return 1;
//		}else {
//			return 0;
//		}
		int proId=product.getProductId();
		Optional<Product> product1 = preop.findById(proId);
		String addby = product1.get().getAddedby();
		product.setAddedby(addby);
		
		
		
		System.out.println(product);
		preop.save(product);
		return 1;
	}
	
	@GetMapping("getproductbyId/{productId}")
	public Product getproductbyId(@PathVariable int productId) {
		//System.out.println("productType" + productType);
		return preop.findProductByproductId(productId);
	}
	
	
		
	@GetMapping("getSearchProduct/{search}")
	public List<Product>getSearchProduct(@PathVariable String search){
		List<Product> plist4 = new ArrayList<>() ;
		 List<Product>plist1=preop.findByProductNameContaining(search); 
		 List<Product>plist2=preop.findByProductTitleContaining(search);
		 List<Product>plist3=preop.findByProductTypeContaining(search);

		 plist4.addAll(plist1);
		 plist4.addAll(plist2);
		 plist4.addAll(plist3);
		 
		return plist4;
		
	}
 

}
