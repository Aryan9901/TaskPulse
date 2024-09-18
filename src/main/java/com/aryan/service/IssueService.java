package com.aryan.service;

import java.util.Optional;
import java.util.List;

import com.aryan.models.Issue;
import com.aryan.models.User;
import com.aryan.request.IssueRequest;

public interface IssueService {
    Issue getIssueById(Long issueId) throws Exception;

    List<Issue> getIssueByProjectId(Long projectId) throws Exception;

    Issue createIssue(IssueRequest issueRequest, User user) throws Exception;

    Optional<Issue> updateIssue(Long issueId, IssueRequest updatedIssue, Long userId) throws Exception;

    void deleteIssue(Long issueId, Long userId) throws Exception;

    Issue addUserToIssue(Long issueId, Long userId) throws Exception;

    Issue updateStatus(Long issueId, String status) throws Exception;
}
