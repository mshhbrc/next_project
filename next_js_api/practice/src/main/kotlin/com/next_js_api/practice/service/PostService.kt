package com.next_js_api.practice.service

import com.next_js_api.practice.model.Post
import com.next_js_api.practice.repository.PostRepository
import org.springframework.stereotype.Service

@Service
class PostService(private val postRepository: PostRepository) {
    fun getAllPosts(): List<Post> = postRepository.findAll()

    fun getPostById(id: Long): Post? = postRepository.findById(id).orElse(null)

    fun uploadPost(post: Post) = postRepository.save(post)

    fun deletePost(id: Long) = postRepository.deleteById(id)

    fun updatePost(id: Long, updated: Post): Post {
        val existing = postRepository.findById(id)
            .orElseThrow { NoSuchElementException("Post not found with id $id") }

        existing.category = updated.category
        existing.title = updated.title
        existing.writer = updated.writer
        existing.content = updated.content
        existing.UpdatedAt = updated.UpdatedAt
        existing.PinnedAt = updated.PinnedAt

        return postRepository.save(existing)
    }
}