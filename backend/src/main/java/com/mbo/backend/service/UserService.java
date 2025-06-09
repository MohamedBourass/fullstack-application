package com.mbo.backend.service;

import com.mbo.backend.dto.request.UserUpdateRequest;
import com.mbo.backend.entity.User;

public interface UserService {
    User updateUser(UserUpdateRequest userUpdateRequest);
}
