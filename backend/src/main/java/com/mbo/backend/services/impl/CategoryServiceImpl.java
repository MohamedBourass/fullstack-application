package com.mbo.backend.services.impl;

import com.mbo.backend.entities.Category;
import com.mbo.backend.repositories.CategoryRepository;
import com.mbo.backend.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@RequiredArgsConstructor
@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;

    @Override
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategoryById(Long id) {
        return categoryRepository
                .findById(id)
                .orElseThrow(() -> new NoSuchElementException("ProductCategory with id='%d' not found".formatted(id)));
    }

    @Override
    public Category addCategory(Category productCategory) {
        return categoryRepository.save(productCategory);
    }
}
