package com.mbo.backend.service.impl;

import com.mbo.backend.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

public class JwtUtil {
    private static final String SECRET_KEY = "U3VwZXJTZWNyZXRKV1RLZXlGb3JNeUFwcDIwMjVTdXBlclNlY3VyZQ=="; // Change this key

    private static final long EXPIRATION_TIME = 86400000;

    private static SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_KEY)); // New management of keys
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject); // Retrieve email stored in the JWT
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        Claims claims = Jwts.parser()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token.replace("Bearer ", "")) // Delete bearer in the beginning of the token
                .getBody();
        return claimsResolver.apply(claims);
    }

    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail()) // Store email as identifiant
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)) // Expire in 1 day
                .signWith(getSigningKey(), SignatureAlgorithm.HS256) // Signature HMAC SHA256
                .compact();
    }
}
