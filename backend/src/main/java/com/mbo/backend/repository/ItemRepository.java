package com.mbo.backend.repository;

import com.mbo.backend.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    Page<Item> findAll(Pageable pageable);
    List<Item> findByCategoryId(Long categoryId);
    Page<Item> findByNameContainingIgnoreCase(String query, Pageable pageable);
    List<Item> findByNameContainingIgnoreCase(String query);
    Page<Item> findByCategoryNameContainingIgnoreCase(String query, Pageable pageable);
    List<Item> findByCategoryNameContainingIgnoreCase(String query);
}
