package com.example.blogs.models;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Comment {
    private String id;
    private String name;
    private String body;
    private String email;
}
