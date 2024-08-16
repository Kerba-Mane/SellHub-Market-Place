package com.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bean.Registration;

public interface RegistrationInterface extends JpaRepository<Registration, String> {

    // Updated method name to match the properties in Registration class
    Registration findByEmailAndPassword(String email, String password);

	Registration findByEmail(String email);

	Optional<Registration> findByUserName(String userName);

	

}
