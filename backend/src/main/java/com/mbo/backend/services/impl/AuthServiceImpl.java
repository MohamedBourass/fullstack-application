package com.mbo.backend.services.impl;

import com.mbo.backend.dto.request.AuthenticationRequest;
import com.mbo.backend.dto.request.RegisterRequest;
import com.mbo.backend.dto.response.AuthenticationResponse;
import com.mbo.backend.dto.response.BaseResponseBody;

import com.mbo.backend.entities.User;
import com.mbo.backend.repositories.UserRepository;
import com.mbo.backend.services.AuthService;
import com.mbo.backend.services.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
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
        // Vérifier si l'utilisateur existe déjà
        if (userRepository.existsByEmail(request.getEmail())) {
            return BaseResponseBody.builder()
                    .message("Email already registered")
                    .build();
        }
        
        // Créer et configurer le nouvel utilisateur
        User user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(new HashSet<>(List.of(com.mbo.backend.model.Role.USER)))
                .build();
        
        // Sauvegarder l'utilisateur
        userRepository.save(user);
        
        return BaseResponseBody.builder()
                .message("User registered successfully")
                .build();
    }
}
