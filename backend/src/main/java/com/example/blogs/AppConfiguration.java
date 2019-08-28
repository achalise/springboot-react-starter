package com.example.blogs;

import com.example.blogs.handlers.UserAndPostsHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class AppConfiguration {
    @Bean
    RouterFunction<ServerResponse> routes(UserAndPostsHandler handler) {
        return RouterFunctions.route(RequestPredicates.GET("/userAndPosts"), handler::getAll);
    }
}
