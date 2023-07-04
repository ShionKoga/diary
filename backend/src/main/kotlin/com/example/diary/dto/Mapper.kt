package com.example.diary.dto

import com.example.diary.model.Diary

fun Diary.toDto(): DiaryDto {
    return DiaryDto(id, title, body)
}