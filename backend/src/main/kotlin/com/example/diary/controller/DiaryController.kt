package com.example.diary.controller

import com.example.diary.config.toUser
import com.example.diary.dto.*
import com.example.diary.model.Diary
import com.example.diary.service.DiaryService
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/diaries")
class DiaryController(
    private val diaryService: DiaryService,
) {
    @GetMapping
    fun getDiaries(authentication: Authentication): List<DiaryDto> {
        val authUser = authentication.toUser()

        return diaryService.findByUser(authUser).map { diary -> diary.toDto() }
    }

    @PostMapping
    fun createItem(authentication: Authentication, @RequestBody payload: CreateDiaryDto) {
        val authUser = authentication.toUser()

        if (diaryService.existsByTitleAndUser(payload.title, authUser)) {
            throw ApiException(409, "Diary title already exists")
        }

        val diary = Diary(
            user = authUser,
            title = payload.title,
            body = payload.body,
        )

        diaryService.save(diary)
    }

    @PutMapping
    fun updateDiary(authentication: Authentication, @RequestBody payload: UpdateDiaryDto) {
        val authUser = authentication.toUser()

        val diary = diaryService.findById(payload.id) ?: throw ApiException(404, "Diary not found")
        if (diary.user.id != authUser.id) {
            throw ApiException(403, "Not your diary")
        }

        val existingDiary = diaryService.findByTitleAndUser(payload.title, authUser)
        if (existingDiary != null && existingDiary.id != payload.id) {
            throw ApiException(409, "Diary title already exists")
        }

        diary.title = payload.title
        diary.body = payload.body

        diaryService.save(diary)
    }

    @DeleteMapping
    fun deleteItem(authentication: Authentication, @RequestParam diaryId: Long) {
        val authUser = authentication.toUser()
        val diary = diaryService.findById(diaryId) ?: throw ApiException(404, "Diary not found")
        if (diary.user.id != authUser.id) {
            throw ApiException(403, "Not your diary")
        }

        diaryService.delete(diary)
    }
}