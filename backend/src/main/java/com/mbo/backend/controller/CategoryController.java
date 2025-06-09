package com.mbo.backend.controller;

import com.mbo.backend.entity.Category;
import com.mbo.backend.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/category")
public class CategoryController {
    private final CategoryService categoryService;

    // GET api/v1/category
    @GetMapping
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(categoryService.getCategories());
    }

    // GET api/v1/category/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable(name = "id") Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body((categoryService.getCategoryById(id)));
    }

    // POST api/v1/category {ProductCategory}
    @PostMapping
    public ResponseEntity<Category> saveProductCategory(@Valid @RequestBody Category category){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(categoryService.addCategory(category));
    }
}
