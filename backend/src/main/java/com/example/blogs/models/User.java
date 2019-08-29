package com.example.blogs.models;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class User {
	private String id;
	private String name;
	private String username;
	private String email;
	private List<Post> posts = new ArrayList<>();
}
