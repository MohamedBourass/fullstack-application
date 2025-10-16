package com.mbo.backend.services;

import com.mbo.backend.entities.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getCategories();
    Category getCategoryById(Long id);
    Category addCategory(Category category);
}