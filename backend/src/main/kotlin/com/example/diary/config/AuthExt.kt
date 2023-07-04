package com.example.diary.config

import com.example.diary.model.User
import org.springframework.security.core.Authentication

fun Authentication.toUser(): User {
    return principal as User
}