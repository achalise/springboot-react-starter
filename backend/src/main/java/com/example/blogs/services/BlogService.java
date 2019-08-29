package com.example.blogs.services;

import com.example.blogs.models.Post;
import com.example.blogs.models.User;
import reactor.core.publisher.Mono;

public interface BlogService {
    Mono<User[]> getAllUsers();
    Mono<Post[]> getAllPosts();
}
