package com.example.blogs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class BlogsApplication {

	@Value("${blogs.service}")
	private String blogServiceUrl;

	@Bean(name="blogService")
	WebClient blogService() {
		return WebClient.create(blogServiceUrl).mutate().build();
	}

	public static void main(String[] args) {
		SpringApplication.run(BlogsApplication.class, args);
	}

}


