package com.gurnoorhira.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthController {
	
	//GET
	//URI - /hello-world
	//method return "Hello World"

	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("some error happened");
		return new AuthenticationBean("You are authenticated");
	}


}

