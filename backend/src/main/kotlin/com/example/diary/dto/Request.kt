package com.example.diary.dto

data class LoginDto(
    val name: String,
    val password: String,
)

data class RegisterDto(
    val name: String,
    val password: String,
)

data class CreateDiaryDto(
    val title: String,
    val body: String?,
)

data class UpdateDiaryDto(
    val id: Long,
    val title: String,
    val body: String?,
)