package com.mbo.backend.service;

import com.mbo.backend.dto.request.AuthenticationRequest;
import com.mbo.backend.dto.request.RegisterRequest;
import com.mbo.backend.dto.response.AuthenticationResponse;
import com.mbo.backend.dto.response.BaseResponseBody;
import org.springframework.security.authentication.BadCredentialsException;

public interface AuthService {
    AuthenticationResponse authenticate(AuthenticationRequest request) throws BadCredentialsException;
    BaseResponseBody register(RegisterRequest request);
}
