package org.jsp.userspringboot.controller;

import java.util.List;
import java.util.Optional;

import org.jsp.userspringboot.dto.ResponseStructure;
import org.jsp.userspringboot.dto.User;
import org.jsp.userspringboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3003/")
public class UserController 
{
	@Autowired
	private UserService service;
	
	@PostMapping("/user")
	public ResponseEntity<ResponseStructure<User>> saveUser(@RequestBody User user)
	{
		return service.saveUser(user);
	}
	
	@PutMapping("/user")
	public ResponseEntity<ResponseStructure<User>> updateUser(@RequestBody User user)
	{
		return service.updateUser(user);
	}
	@GetMapping("/user/{id}")
	public ResponseEntity<ResponseStructure<User>> findUserById(@PathVariable int id)
	{
		return service.findUserById(id);
	}
	@DeleteMapping("/user/{id}")
	public ResponseEntity<ResponseStructure<String>> deleteById(@PathVariable int id)
	{
		return service.delete(id);
	}
	@GetMapping("/user")
	public ResponseEntity<ResponseStructure<List<User>>> findAll()
	{
		return service.findAll();
		
	}

}
