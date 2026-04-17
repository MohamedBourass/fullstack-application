package com.mbo.backend.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class UserUpdateDto {
    private String firstname;
    private String lastname;
}