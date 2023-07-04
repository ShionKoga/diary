package com.example.diary.dto

import org.springframework.web.server.ResponseStatusException

class ApiException(code: Int, message: String) : ResponseStatusException(code, message, null)

data class LoginResponseDto(
    val token: String,
)

data class DiaryDto(
    val id: Long,
    val title: String,
    val body: String?,
)