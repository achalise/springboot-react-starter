package com.example.blogs.handlers;

import com.example.blogs.AppConfiguration;
import com.example.blogs.models.Post;
import com.example.blogs.models.User;
import com.example.blogs.services.BlogService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;

import java.util.ArrayList;

@RunWith(SpringRunner.class)
@WebFluxTest
@Import({AppConfiguration.class, UserAndPostsHandler.class, CommentsHandler.class})
public class UserAndPostsHanderTest {
    @Autowired
    private WebTestClient webClient;

    @MockBean
    private BlogService blogService;

    @Test
    public void testGetUserAndPostsShouldOnlyIncludePostForTheUser() {
        Post[] posts = new Post[]{
                Post.builder().userId("123").body("body1").build(),
                Post.builder().userId("543").body("body2").build(),
        };
        User[] users = new User[]{
                User.builder().username("testuserName")
                        .id("123")
                        .name("testname")
                        .email("testemail")
                        .posts(new ArrayList<>())
                        .build()
        };
        Mono<User[]> usersMono = Mono.just(users);
        Mono<Post[]> postsMono = Mono.just(posts);

        Mockito.when(blogService.getAllUsers()).thenReturn(usersMono);
        Mockito.when(blogService.getAllPosts()).thenReturn(postsMono);
        webClient.get()
                .uri("/userAndPosts")
                .exchange()
                .expectStatus().isOk()
                .expectBody()
                .jsonPath("@.[0].username").isEqualTo("testuserName")
                .jsonPath("@.[0].posts.length()").isEqualTo(1);
    }
}
