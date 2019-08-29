package com.example.blogs.services;

import com.example.blogs.models.Post;
import com.example.blogs.models.User;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class DefaultBlogService implements BlogService {

    private WebClient blogClient;

    public DefaultBlogService(WebClient blogClient) {
        this.blogClient = blogClient;
    }

    @Override
    public Mono<User[]> getAllUsers() {
        Mono<User[]> users = blogClient.get().uri("/users").retrieve().bodyToMono(User[].class);
        return users;
    }

    @Override
    public Mono<Post[]> getAllPosts() {
        Mono<Post[]> posts = blogClient.get().uri("/posts").retrieve().bodyToMono(Post[].class);
        return posts;

    }
}
