package com.mbo.backend.dto.request;

import jakarta.validation.constraints.*;
import lombok.Getter;

@Getter
public class ItemRequest {
    @NotBlank
    @Size(max = 80)
    private String name;

    @NotBlank
    @Size(max = 80)
    private String shortDescription;

    @NotNull
    private Long category;
}