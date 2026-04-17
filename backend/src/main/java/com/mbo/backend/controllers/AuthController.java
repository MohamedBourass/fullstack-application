package com.mbo.backend.controllers;

import com.mbo.backend.dto.UserDto;
import com.mbo.backend.services.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @Valid @RequestBody UserDto request
    ) throws Exception {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<Map<String, String>> authenticate(
            @RequestParam String email,
            @RequestParam String password
    ) throws BadCredentialsException {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(authenticationService.authenticate(email, password));
    }

    /*@GetMapping("/me")
    public ResponseEntity<UserDto> me () throws UserNotFoundException, UserNotAuthenticatedException {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(modelMapper.map(authenticationService.me(), UserDTO.class));
    }*/

}
