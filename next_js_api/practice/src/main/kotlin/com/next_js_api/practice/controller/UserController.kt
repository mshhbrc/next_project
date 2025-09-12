package com.next_js_api.practice.controller

import com.next_js_api.practice.model.User
import com.next_js_api.practice.service.UserService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import jakarta.annotation.PostConstruct

@RestController
class UserController(private val userService: UserService) {

    @PostConstruct
    fun init() {
        
    }

    @GetMapping("/users")
    fun getUsers(): List<User> = userService.getAllUsers()
}