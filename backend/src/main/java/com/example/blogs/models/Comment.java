package com.example.blogs.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Comment {
    private String id;
    private String name;
    private String body;
    private String email;
}
