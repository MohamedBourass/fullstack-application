package com.mbo.backend.controller;

import com.mbo.backend.dto.request.AuthenticationRequest;
import com.mbo.backend.dto.request.RegisterRequest;
import com.mbo.backend.dto.response.AuthenticationResponse;
import com.mbo.backend.dto.response.BaseResponseBody;
import com.mbo.backend.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authenticationService;

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @PostMapping("/register")
    public ResponseEntity<BaseResponseBody> register(
            @Valid @RequestBody RegisterRequest request
    ) throws Exception {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @Valid @RequestBody AuthenticationRequest request
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
