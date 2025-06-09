package com.mbo.backend.dto.response;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class ItemResponse {
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