package com.mbo.backend.service.impl;

import com.mbo.backend.dto.request.UserUpdateRequest;
import com.mbo.backend.entity.User;
import com.mbo.backend.exception.UserNotAuthenticatedException;
import com.mbo.backend.exception.UserNotFoundException;
import com.mbo.backend.repository.UserRepository;
import com.mbo.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    /*private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }*/

    @SneakyThrows
    @Override
    public User updateUser(UserUpdateRequest userUpdateRequest) {
        // Check user authentication
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            throw new UserNotAuthenticatedException();
        }
        // Get authenticated user
        String email = authentication.getName();
        User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
        // Update and Save user
        user.setFirstname(userUpdateRequest.getFirstname());
        user.setLastname(userUpdateRequest.getLastname());
        userRepository.save(user);
        // Return new user
        return user;
    }

    /*public Optional<User> findByUsername(String username) {
        return Optional.ofNullable(userRepository.findByUsername(username));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getUsername())
                .password(user.getPassword())
                .authorities("USER")
                .build();
    }*/
}
