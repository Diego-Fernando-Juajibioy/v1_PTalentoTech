package com.grupo2tech.artesaniascuero.repository;
import com.grupo2tech.artesaniascuero.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
}
