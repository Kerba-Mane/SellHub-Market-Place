package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.Cart;

public interface CartInterface extends JpaRepository<Cart, Integer>{

	
	
}
