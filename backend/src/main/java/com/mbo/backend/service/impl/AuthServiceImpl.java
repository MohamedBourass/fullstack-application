package com.mbo.backend.service.impl;

import com.mbo.backend.dto.request.AuthenticationRequest;
import com.mbo.backend.dto.request.RegisterRequest;
import com.mbo.backend.dto.response.AuthenticationResponse;
import com.mbo.backend.dto.response.BaseResponseBody;

import com.mbo.backend.exception.UserNotFoundException;

import com.mbo.backend.entity.User;
import com.mbo.backend.repository.UserRepository;
import com.mbo.backend.service.AuthService;
import com.mbo.backend.service.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    /*public User register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.getRoles().add(Role.USER);
        return userRepository.save(user);
    }

    public Optional<User> login(String email, String password) {
        return userRepository.findByEmail(email)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()));
    }

    public boolean isAdmin(User user) {
        return user.getRoles().contains(Role.ADMIN);
    }*/

    @SneakyThrows
    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest request) throws BadCredentialsException {
        // Authenticate the user with the provided credentials
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(null);
        } // TODO: catch LockedException
        // (user authentication successful at this point)

        // Get user from repository
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(()->new BadCredentialsException("Cannot find email")); //TODO

        // Generate JWT token
        String jwt = jwtService.generateToken(user);

        // Create and return success response
        return new AuthenticationResponse(jwt);
    }

    @Override
    public BaseResponseBody register(RegisterRequest request) {
        return null;
    }
}
