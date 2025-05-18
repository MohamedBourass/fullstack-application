package com.mbo.backend.repository;

import com.mbo.backend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    // This interface will automatically provide CRUD operations for the Car entity
    // You can add custom query methods here if needed
}
