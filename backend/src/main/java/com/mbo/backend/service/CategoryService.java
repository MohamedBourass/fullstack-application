package com.mbo.backend.service;

import com.mbo.backend.entity.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getCategories();
    Category getCategoryById(Long id);
    Category addCategory(Category category);
}