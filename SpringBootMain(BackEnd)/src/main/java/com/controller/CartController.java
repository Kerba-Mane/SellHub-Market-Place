package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CartInterface;
import com.bean.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {

	@Autowired
	private CartInterface cref;

	@PostMapping("/addproduct/{email}/{productId}")
	public Cart addProduct(@PathVariable String email, @PathVariable int productId) {

		Cart cart = new Cart();
		cart.setUserEmail(email);
		cart.setProductId(productId);
		cref.save(cart);
		return cart;
	}

	@DeleteMapping("/deleteProduct/{pid}")
	public void deleteProduct(@PathVariable int pid) {
		System.out.println(pid);
		cref.deleteById(pid);
	}

}
