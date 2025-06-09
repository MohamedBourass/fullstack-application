package com.mbo.backend.config;

import com.mbo.backend.filter.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        //http.authorizeHttpRequests(auth -> auth
        //                .requestMatchers("/api/v1/country").authenticated()
        //                .anyRequest().permitAll())
        //        .formLogin(Customizer.withDefaults());
        //return http.build();

        /*http.cors(Customizer.withDefaults()) // Active CORS
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll());
        return http.build();*/

        /*http.cors(Customizer.withDefaults()) // Active CORS
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/h2-console/**").permitAll() // Autorise H2 Console
                        .requestMatchers("/api/v1/**").permitAll()
                        .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
                        .anyRequest().authenticated())
                .headers(headers -> headers.frameOptions(frame -> frame.disable())); // Autorise l'affichage de H2 en iframe
        */

        http
                .cors(Customizer.withDefaults()) // Active CORS
                // Disable csrf
                .csrf(csrf -> csrf.disable())
                // Authorize http requests
                //.authorizeHttpRequests()
                // Allow unauthenticated access to these URLs (auth)
                //.requestMatchers("/api/v1/auth/**")
                //.permitAll()
                // Require authentication for all other URLs
                //.anyRequest()
                //.authenticated()
                //.and()
                // Configure session management
                .sessionManagement(session-> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // STATELESS: new session for each request
                // Set authentication provider
                .authenticationProvider(authenticationProvider)
                // Add jwtAuthFilter before the UsernamePasswordAuthenticationFilter
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}