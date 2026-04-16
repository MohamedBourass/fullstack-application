package com.mbo.backend.controllers;

import com.mbo.backend.dto.AuthRequest;
import com.mbo.backend.dto.AuthResponse;
import com.mbo.backend.dto.BaseResponse;
import com.mbo.backend.dto.RegisterDto;
import com.mbo.backend.services.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<BaseResponse> register(
            @Valid @RequestBody RegisterDto request
    ) throws Exception {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> authenticate(
            @Valid @RequestBody AuthRequest request
    ) throws BadCredentialsException {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(authenticationService.authenticate(request));
    }

    /*@GetMapping("/me")
    public ResponseEntity<UserDto> me () throws UserNotFoundException, UserNotAuthenticatedException {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(modelMapper.map(authenticationService.me(), UserDTO.class));
    }*/

}
