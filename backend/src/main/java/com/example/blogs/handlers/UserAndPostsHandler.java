package com.example.blogs.handlers;

import com.example.blogs.models.Post;
import com.example.blogs.models.User;
import com.example.blogs.services.BlogService;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class UserAndPostsHandler {

    private BlogService blogService;

    public UserAndPostsHandler(BlogService blogService) {
        this.blogService = blogService;
    }

    public Mono<ServerResponse> getAll(ServerRequest request) {
        Mono<User[]> users = blogService.getAllUsers();
        Mono<Post[]> posts = blogService.getAllPosts();

        Mono<User[]> userPosts = users.zipWith(posts, (u, p) -> {
            Stream.of(u).forEach(user -> {
                List<Post> list = Stream.of(p).filter(post -> post.getUserId().equals(user.getId())).collect(Collectors.toList());
                user.getPosts().addAll(list);
            });
            return u;
        });

        return ServerResponse.ok().body(userPosts, User[].class);
    }
}
