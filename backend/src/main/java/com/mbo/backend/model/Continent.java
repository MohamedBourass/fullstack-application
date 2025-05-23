package com.mbo.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "continent")
@Data
public class Continent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;

    private String name;
}
