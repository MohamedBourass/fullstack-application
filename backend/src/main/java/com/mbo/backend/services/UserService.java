package com.mbo.backend.services;

import com.mbo.backend.dto.UserUpdateDto;
import com.mbo.backend.entities.User;

public interface UserService {
    User updateUser(UserUpdateDto userUpdateRequest);
}
