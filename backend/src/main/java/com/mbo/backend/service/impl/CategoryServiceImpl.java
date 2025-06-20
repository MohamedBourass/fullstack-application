package com.mbo.backend.service.impl;

import com.mbo.backend.entity.Category;
import com.mbo.backend.repository.CategoryRepository;
import com.mbo.backend.service.CategoryService;
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
