package com.example.diary

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DiaryApplication

fun main(args: Array<String>) {
	runApplication<DiaryApplication>(*args)
}
