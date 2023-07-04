package com.example.diary.service

import com.example.diary.model.Diary
import com.example.diary.model.User
import com.example.diary.repository.DiaryRepo
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service


@Service
class DiaryService(
    private val diaryRepo: DiaryRepo,
) {
    fun findById(id: Long): Diary? {
        return diaryRepo.findByIdOrNull(id)
    }

    fun findByUser(user: User): List<Diary> {
        return diaryRepo.findByUser(user)
    }

    fun findByTitleAndUser(title: String, user: User): Diary? {
        return diaryRepo.findByTitleAndUser(title, user)
    }

    fun existsByTitleAndUser(title: String, user: User): Boolean {
        return diaryRepo.existsByTitleAndUser(title, user)
    }

    fun save(item: Diary): Diary {
        return diaryRepo.save(item)
    }

    fun delete(item: Diary) {
        return diaryRepo.delete(item)
    }
}