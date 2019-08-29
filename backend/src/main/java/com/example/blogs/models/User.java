package com.example.blogs.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class User {
	private String id;
	private String name;
	private String username;
	private String email;
	private List<Post> posts = new ArrayList<>();
}
