package com.example.backendwebservice.Creathandler;

import com.example.backendwebservice.posthandler.Post;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Data
public class UserCreate {
    public String username;
    public String password;
    public String post;
    private List<Post> favorites;
    private List<Post> userCommits;

    public UserCreate(String username, String password) {
        this.username = username;
        this.favorites = new ArrayList<>();
        this.userCommits = new ArrayList<>();
    }

}

