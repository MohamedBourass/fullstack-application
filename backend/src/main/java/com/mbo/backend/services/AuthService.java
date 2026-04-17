package com.mbo.backend.services;

import com.mbo.backend.dto.UserDto;
import org.springframework.security.authentication.BadCredentialsException;

import java.util.Map;

public interface AuthService {
    Map<String, String> authenticate(String email, String password) throws BadCredentialsException;
    String register(UserDto request);
}
