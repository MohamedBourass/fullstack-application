package com.mbo.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDto {
    @NotBlank
    @Size(max = 16)
    private String firstname;
    @NotBlank
    @Size(max = 16)
    private String lastname;
    @NotBlank
    @Size(max = 48)
    @Email
    private String email;
    @NotBlank
    @Size(max = 48)
    private String password;
}
