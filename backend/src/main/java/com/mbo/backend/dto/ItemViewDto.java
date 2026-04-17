package com.mbo.backend.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class ItemViewDto {
    @NotNull
    private Long id;

    @NotBlank
    @Size(max = 80)
    private String name;

    @NotBlank
    @Size(max = 80)
    private String shortDescription;

    @NotNull
    private Long categoryId;
}