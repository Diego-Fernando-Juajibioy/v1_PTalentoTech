package com.grupo2tech.artesaniascuero.controller;

import com.grupo2tech.artesaniascuero.model.User;
import com.grupo2tech.artesaniascuero.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User loginData){

        User user = userRepository.findByUsername(loginData.getUsername());

        if(user != null && user.getPassword().equals(loginData.getPassword())){

            Map<String, Object> response = new HashMap<>();

            response.put("token", "fake-jwt-token");
            response.put("username", user.getUsername());
            response.put("role", user.getRole());

            return response;
        }

        throw new RuntimeException("Credenciales incorrectas");
    }
}