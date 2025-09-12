package com.next_js_api.practice.model

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "post")
data class Post(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    
    @Column(name = "category")
    var category: Int = 0,
        
    @Column(name = "title")
    var title: String,
        
    @Column(name = "writer")
    var writer: String,
        
    @Column(name = "content")
    var content: String,
        
    @Column(name = "created_at")
    val CreatedAt: LocalDateTime,
        
    @Column(name = "updated_at")
    var UpdatedAt: LocalDateTime,
        
    @Column(name = "pinned_at")
    var PinnedAt: LocalDateTime,
)