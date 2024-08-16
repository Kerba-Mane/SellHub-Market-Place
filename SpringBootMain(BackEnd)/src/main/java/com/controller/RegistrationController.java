package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Registration;
import com.dao.RegistrationInterface;

@RestController
@CrossOrigin
public class RegistrationController {

	@Autowired
	RegistrationInterface repo;

	@PostMapping("/userinfoadd")
	public void saveData(@RequestBody Registration user) {
		repo.save(user);
	}

	@GetMapping("/showUser")
	public List<Registration> ShowAlldata() {
		return repo.findAll();
	}

	@GetMapping("/byid/{id}")
	public Registration showbyId(@PathVariable String email) {
		return repo.findById(email).get();
	}

	@GetMapping("/userlogin/{email}/{password}")
	public Registration userLogin(@PathVariable String email, @PathVariable String password) {
		// Updated method call to match the repository method name
		return repo.findByEmailAndPassword(email, password);
	}

	@GetMapping("/userName/{email}")
	public String userName(@PathVariable String email) {
		// Updated method call to match the repository method name
		String uname = "null";
		Registration reg = repo.findByEmail(email);
		reg.getUserName();

		return uname;
	}

	@GetMapping("/getuserbyname/{userName}")
	public int getUserByName(@PathVariable String userName) {
		System.out.println(userName);
		Optional<Registration> reg=repo.findByUserName(userName);
		if(reg.isEmpty()) {
			return 0;
		}
		else {
			return 1;
		}
		//return repo.findByUserName(userName);
	}
	
	

}
