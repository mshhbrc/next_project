package com.next_js_api.practice.service

import com.next_js_api.practice.model.User
import com.next_js_api.practice.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {
    fun getAllUsers(): List<User> = userRepository.findAll()

    fun addTestUsers() {
        userRepository.save(User(name = "Alice", email = "alice@example.com"))
        userRepository.save(User(name = "Bob", email = "bob@example.com"))
    }
}