package com.mbo.backend.services.impl;

import com.mbo.backend.entities.User;
import com.mbo.backend.exception.UserNotAuthenticatedException;
import com.mbo.backend.exception.UserNotFoundException;
import com.mbo.backend.repositories.UserRepository;
import com.mbo.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @SneakyThrows
    @Override
    public User updateUser(User userUpdateRequest) {
        // Check user authentication
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            throw new UserNotAuthenticatedException();
        }
        // Get authenticated user
        String email = authentication.getName();
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UserNotFoundException(1L));
        // Update and Save user
        user.setFirstname(userUpdateRequest.getFirstname());
        user.setLastname(userUpdateRequest.getLastname());
        userRepository.save(user);
        // Return new user
        return user;
    }
}
