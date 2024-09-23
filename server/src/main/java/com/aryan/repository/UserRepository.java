package com.aryan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aryan.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmail(String email);
}
