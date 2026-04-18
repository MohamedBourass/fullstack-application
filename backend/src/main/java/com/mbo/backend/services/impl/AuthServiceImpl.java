package com.mbo.backend.services.impl;

import com.mbo.backend.dto.UserDto;

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
import java.util.Map;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @SneakyThrows
    @Override
    public Map<String, String> authenticate(String email, String password) throws BadCredentialsException {
        // Authenticate the user with the provided credentials
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            email,
                            password
                    )
            );
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(null);
        } // TODO: catch LockedException
        // (user authentication successful at this point)

        // Get user from repository
        User user = userRepository.findByEmail(email).orElseThrow(()->new BadCredentialsException("Cannot find email")); //TODO

        // Generate JWT token
        String jwt = jwtService.generateToken(user);

        // Create and return success response
        return Map.of("token", jwt);
    }

    @Override
    public String register(UserDto request) {
        // Vérifier si l'utilisateur existe déjà
        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already registered";
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
        
        return "User registered successfully";
    }
}
