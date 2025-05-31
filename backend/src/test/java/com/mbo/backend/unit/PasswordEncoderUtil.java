package com.mbo.backend.unit;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Base64;

public class PasswordEncoderUtil {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hashedPassword = encoder.encode("admin");
        //$2a$10$ha923GH6opI0T6ViO06w1.A01z3Si3MPxN7ax5.3XkizodqzW8HJ6
        System.out.println("Mot de passe haché : " + hashedPassword);

        System.out.println("Hey! => " + Base64
                .getEncoder()
                .encodeToString("SuperSecretJWTKeyForMyApp2025SuperSecure".getBytes()));
    }
}
