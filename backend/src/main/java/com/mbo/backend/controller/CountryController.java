package com.mbo.backend.controller;

import com.mbo.backend.model.Country;
import com.mbo.backend.repository.CountryRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class CountryController {

    private final CountryRepository repository;

    CountryController(CountryRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/country")
    List<Country> all() {
        return repository.findAll();
    }
}
