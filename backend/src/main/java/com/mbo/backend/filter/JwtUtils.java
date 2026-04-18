package com.mbo.backend.filter;

import jakarta.servlet.http.HttpServletRequest;

public class JwtUtils {
    private static final String TOKEN_PREFIX = "Bearer ";
    private static final String HEADER_STRING = "Authorization";

    public static String getJwtFromRequest(HttpServletRequest request) {
        String authHeader = request.getHeader(HEADER_STRING);
        if (authHeader != null && authHeader.startsWith(TOKEN_PREFIX)) {
            return authHeader.substring(TOKEN_PREFIX.length());
        }
        return null;
    }
}
