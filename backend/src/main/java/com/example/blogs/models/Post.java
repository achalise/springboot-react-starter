package com.example.blogs.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Post {
	private String id;
	private String userId;
	private String title;
	private String body;
}
