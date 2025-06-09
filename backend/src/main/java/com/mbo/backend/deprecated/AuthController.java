package com.mbo.backend.deprecated;

import com.mbo.backend.service.impl.JwtUtil;
import com.mbo.backend.entity.User;
import com.mbo.backend.repository.UserRepository;
import com.mbo.backend.service.impl.AuthServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

//@RestController
//@RequestMapping("/api/v1/auth")
public class AuthController {
    private final JwtUtil jwtUtil = new JwtUtil();

    private final AuthServiceImpl authService;

    private UserRepository userRepository;

    public AuthController(AuthServiceImpl authService) {
        this.authService = authService;
    }

    /*@PostMapping("/register")
    public ResponseEntity<User> register(
            @RequestBody User user) {
        return ResponseEntity
                .ok(authService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String,Object>> login(@RequestParam String email, @RequestParam String password) {
        return authService.login(email, password)
                .map(user -> {
                    Map<String, Object> response = new HashMap<>();
                    response.put("token", jwtUtil.generateToken(user));
                    response.put("message", "Login successful");
                    response.put("user", user.getEmail());
                    response.put("roles", user.getRoles());
                    return ResponseEntity.ok(response);
                })
                .orElse(ResponseEntity.status(401).body(null));
    }*/

    /*@GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(@RequestHeader(value = "Authorization", required = false) String token) {
        if(token == null || !token.startsWith("Bearer ")) {
            return ResponseEntity.status(403).body(null);
        }

        String email = jwtUtil.extractUsername(token.replace("Bearer ", ""));
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Unknown user"));
        return ResponseEntity.ok(new User(user.getId(), user.getEmail(), user.getPassword(), user.getRoles()));
    }*/
}
