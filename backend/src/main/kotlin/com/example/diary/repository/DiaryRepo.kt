package com.example.diary.repository

import com.example.diary.model.Diary
import com.example.diary.model.User
import org.springframework.data.repository.CrudRepository

interface DiaryRepo : CrudRepository<Diary, Long> {
    fun findByUser(user: User): List<Diary>
    fun findByTitleAndUser(title: String, user: User): Diary?
    fun existsByTitleAndUser(title: String, user: User): Boolean
}
