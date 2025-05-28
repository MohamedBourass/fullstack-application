package com.mbo.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "country")
@Data
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;

    private String name;

    private String capital;

    private Long area;
}
