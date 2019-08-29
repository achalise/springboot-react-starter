package com.example.blogs.models;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class Post {
	private String id;
	private String userId;
	private String title;
	private String body;
}
