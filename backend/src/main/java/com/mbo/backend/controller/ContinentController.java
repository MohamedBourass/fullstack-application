package com.mbo.backend.controller;

import com.mbo.backend.model.Continent;
import com.mbo.backend.repository.ContinentRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/continent")
public class ContinentController {

    private final ContinentRepository repository;

    ContinentController(ContinentRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/all")
    List<Continent> all() {
        return repository.findAll();
    }
}
