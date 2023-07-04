package com.example.diary.model

import jakarta.persistence.*

@Entity
data class Diary (
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "diary_id_seq")
    @SequenceGenerator(name = "diary_id_seq", allocationSize = 1)
    var id: Long = 0,

    @ManyToOne
    var user: User = User(),

    @Column
    var title: String = "",

    @Column
    var body: String? = null,
)
