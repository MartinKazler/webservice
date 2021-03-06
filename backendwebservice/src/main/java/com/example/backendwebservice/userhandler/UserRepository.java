package com.example.backendwebservice.userhandler;

import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class UserRepository {

    private final Map<String, User> users = new HashMap<>();

    public User findUser(String username) {
        return users.get(username.toLowerCase());
    }

    public User getUser(String username) {
        return users.get(username.toLowerCase());
    }

    public void saveUser(User user) {
        users.put(user.getUsername().toLowerCase(), user);
    }

    public boolean searchUser(String username) {
        return users.containsKey(username.toLowerCase());
    }

    public Collection<User> getAll() {
        return users.values();
    }

    public void removeUser(User user) {
        users.remove(user.getUsername().toLowerCase());
    }
}
