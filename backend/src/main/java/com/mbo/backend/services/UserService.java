package com.mbo.backend.services;

import com.mbo.backend.dto.request.UserUpdateRequest;
import com.mbo.backend.entities.User;

public interface UserService {
    User updateUser(UserUpdateRequest userUpdateRequest);
}
