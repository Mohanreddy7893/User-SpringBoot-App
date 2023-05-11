package org.jsp.userspringboot.service;

import java.util.List;
import org.jsp.userspringboot.exception.IdNotFoundException;
import java.util.Optional;

import org.jsp.userspringboot.dao.UserDao;
import org.jsp.userspringboot.dto.ResponseStructure;
import org.jsp.userspringboot.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserDao dao;
	public ResponseEntity<ResponseStructure<User>> saveUser(User user) {
		ResponseStructure<User> structure = new ResponseStructure<>(); 
		structure.setBody(dao.saveUser(user));
		structure.setMessage("user registered with ID:" + user.getId());
		structure.setCode(HttpStatus.ACCEPTED.value());
      return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.ACCEPTED);
	}

	public ResponseEntity<ResponseStructure<User>> updateUser(User user) {
		ResponseStructure<User> structure = new ResponseStructure<>(); 
		structure.setBody(dao.updateUser(user));
		structure.setMessage("user updated succesfully");
		structure.setCode(HttpStatus.ACCEPTED.value());
		//return structure;
		return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.ACCEPTED);
	}
	public ResponseEntity<ResponseStructure<User>> findUserById(int id) {
		ResponseStructure<User> structure = new ResponseStructure<>();
		Optional<User> u = dao.findUserById(id);
		if (u.isPresent()) {
			structure.setBody(u.get());
			structure.setMessage("user Found");
			structure.setCode(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.FOUND);
		}

	throw new IdNotFoundException();
	}
	
	

	public ResponseEntity<ResponseStructure<List<User>>> findAll() {
		ResponseStructure<List<User>> structure = new ResponseStructure<List<User>>();
		structure.setBody(dao.findAll());
		structure.setMessage("List Of All User");
		structure.setCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<User>>>(structure,HttpStatus.OK);
	}


	public ResponseEntity<ResponseStructure<String>> delete(int id) {
		Optional<User> u = dao.findUserById(id);
		ResponseStructure<String> structure = new ResponseStructure<>(); 
		if (u.isPresent()) {
			structure.setBody("User Deleted");
			structure.setMessage("User found");
			structure.setCode(HttpStatus.OK.value());
			dao.delete(u.get());
			
			return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.OK);
		} else {

			throw new IdNotFoundException();
		}
	}

	

}
