package com.aryan.service;

import java.util.List;

import com.aryan.models.Comment;

public interface CommentService {
    Comment createComment(Long issueId, Long userId, String content) throws Exception;

    void deleteComment(Long commentId, Long userId) throws Exception;

    List<Comment> findCommentByIssue(Long issueId) throws Exception;
}
