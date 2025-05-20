package com.mbo.backend.repository;

import com.mbo.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // This interface will automatically provide CRUD operations for the User entity
    // You can add custom query methods here if needed
    User findByUsername(String username);
}
