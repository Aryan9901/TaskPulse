package com.aryan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aryan.models.Chat;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}
