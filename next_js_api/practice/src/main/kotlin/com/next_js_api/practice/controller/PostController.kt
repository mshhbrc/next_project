package com.next_js_api.practice.controller

import com.next_js_api.practice.model.Post
import com.next_js_api.practice.service.PostService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody

@RestController
@RequestMapping("/posts")
class PostController(private val postService: PostService) {

    @GetMapping
    fun getPosts(): List<Post> = postService.getAllPosts()

    @GetMapping("/{id}")
    fun getPostById(@PathVariable id: Long): Post? = postService.getPostById(id)

    @PostMapping
    fun uploadPost(@RequestBody post: Post): Post = postService.uploadPost(post)

    @DeleteMapping("/{id}")
    fun deletePost(@RequestBody id: Long) = postService.deletePost(id)

    @PutMapping("/{id}")
    fun updatePost(@PathVariable id: Long, @RequestBody updated: Post)
        : Post {
            return postService.updatePost(id, updated)
        }
}