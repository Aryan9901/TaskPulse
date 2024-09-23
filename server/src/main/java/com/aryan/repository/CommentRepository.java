package com.aryan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.aryan.models.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findCommentByIssueId(Long issueId);
}
