package com.mbo.backend.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class ItemDto {
    @NotBlank
    @Size(max = 80)
    private String name;

    @NotBlank
    @Size(max = 80)
    private String shortDescription;

    @NotNull
    private Long category;
}