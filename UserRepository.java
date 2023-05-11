package org.jsp.userspringboot.repository;

import org.jsp.userspringboot.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User,Integer>{

}
