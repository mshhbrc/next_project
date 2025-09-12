package com.next_js_api.practice

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import io.github.cdimascio.dotenv.dotenv

@SpringBootApplication
class PracticeApplication

fun main(args: Array<String>) {
	val dotenv = dotenv {
		ignoreIfMissing = true
	}

	runApplication<PracticeApplication>(*args)
}
