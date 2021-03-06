package com.example.blogs;

import com.example.blogs.handlers.CommentsHandler;
import com.example.blogs.handlers.UserAndPostsHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import java.util.Arrays;

//Only added for UI testing
//TODO only instantiate this bean conditionally on certain property, e.g., testEnabled=true
@Configuration
public class AppConfiguration {
    @Bean
    RouterFunction<ServerResponse> routes(UserAndPostsHandler handler, CommentsHandler commentsHandler) {
        return RouterFunctions.route(RequestPredicates.GET("/userAndPosts"), handler::getAll)
                .andRoute(RequestPredicates.GET("/comments"), commentsHandler::getForPost);
    }

    @Bean
    CorsWebFilter corsWebFilter() {
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.setAllowedOrigins(Arrays.asList("*"));
        corsConfig.setMaxAge(8000L);
        corsConfig.addAllowedMethod("*");
        corsConfig.addAllowedHeader("*");

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);

        return new CorsWebFilter(source);
    }
}
