package com.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.bean.Product;



public interface ProductInterface extends JpaRepository<Product, Integer>{
	
	List<Product> findByProductNameContainingIgnoreCase(String productName);

	List<Product> findByProductTitle(String category);

	List<Product> findByaddedby(String addedby);	

	List<Product> findByProductType(String productType);

	List<Product> findByProductTitleAndProductType(String category, String productType);



	Product findProductByproductId(int productId);

	List<Product> findByProductTitleContaining(String title);

	List<Product> findByProductTypeContaining(String type);

	List<Product> findByProductNameContaining(String name);

	
	
}
