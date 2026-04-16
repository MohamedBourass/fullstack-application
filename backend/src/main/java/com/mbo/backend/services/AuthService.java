package com.mbo.backend.services;

import com.mbo.backend.dto.AuthRequest;
import com.mbo.backend.dto.AuthResponse;
import com.mbo.backend.dto.BaseResponse;
import com.mbo.backend.dto.RegisterDto;
import org.springframework.security.authentication.BadCredentialsException;

public interface AuthService {
    AuthResponse authenticate(AuthRequest request) throws BadCredentialsException;
    BaseResponse register(RegisterDto request);
}
