package com.mbo.backend.dto.request;

import lombok.Data;

@Data
public class UserUpdateRequest {
    private String firstname;
    private String lastname;
}