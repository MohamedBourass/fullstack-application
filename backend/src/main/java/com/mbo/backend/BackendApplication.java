package com.mbo.backend;

import com.mbo.backend.model.Role;
import com.mbo.backend.model.User;
import com.mbo.backend.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@Slf4j
@SpringBootApplication
public class BackendApplication {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main( String[] args ) {
        log.info("The application is going to start...");
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner run() {
        return args -> {
            if(userRepository.findByEmail("test@example.com").isEmpty()) {
                User user = new User();
                user.setEmail("test@example.com");
                user.setPassword(passwordEncoder.encode("test123"));
                user.getRoles().add(Role.USER);
                userRepository.save(user);
                log.info("Utilisateur ADMIN ajouté !");
            }
        };
    }
}
