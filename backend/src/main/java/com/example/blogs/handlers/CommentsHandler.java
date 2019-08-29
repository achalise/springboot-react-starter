package com.example.blogs.handlers;

import com.example.blogs.models.Comment;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
@Slf4j
public class CommentsHandler {
    private WebClient blogService;

    public CommentsHandler(WebClient blogService) {
        this.blogService = blogService;
    }


    public Mono<ServerResponse> getForPost(ServerRequest request) {
        String uri = "/comments";
        String id = request.queryParam("postId").orElse("");
        String commentsUri = StringUtils.isEmpty(id) ? uri : uri + "?postId="+ id;
        log.info("Retrieving comments with uri " + commentsUri);
        Mono<Comment[]> comments = blogService.get().uri(commentsUri).retrieve().bodyToMono(Comment[].class);

        return ServerResponse.ok().body(comments, Comment[].class);
    }

}
