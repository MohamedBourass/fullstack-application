package com.mbo.backend.helpers;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.function.Function;

public class JwtUtil {
    private static final String SECRET_KEY = "your-secret-key"; // 🔥 Change cette clé

    private static Key getSigningKey() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_KEY)); // ✅ Nouvelle gestion des clés
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject); // 🔑 Récupère l'email stocké dans le JWT
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        Claims claims = Jwts.parser()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token.replace("Bearer ", "")) // 🔥 Supprime "Bearer " au début du token
                .getBody();
        return claimsResolver.apply(claims);
    }
}
