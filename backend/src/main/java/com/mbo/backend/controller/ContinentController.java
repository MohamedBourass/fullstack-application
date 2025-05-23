package com.mbo.backend.controller;

import com.mbo.backend.model.Continent;
import com.mbo.backend.repository.ContinentRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ContinentController {

    private final ContinentRepository repository;

    ContinentController(ContinentRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/continents")
    List<Continent> all() {
        return repository.findAll();
    }
}
