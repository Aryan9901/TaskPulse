package com.aryan.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aryan.models.Issue;
import com.aryan.models.Project;
import com.aryan.models.User;
import com.aryan.repository.IssueRepository;
import com.aryan.request.IssueRequest;

@Service
public class IssueServiceImpl implements IssueService {

    @Autowired
    IssueRepository issueRepository;

    @Autowired
    ProjectService projectService;

    @Autowired
    UserService userService;

    @Override
    public Issue getIssueById(Long issueId) throws Exception {
        Optional<Issue> issue = issueRepository.findById(issueId);
        if (issue.isEmpty()) {
            throw new Exception("No Issue found with issue Id " + issueId);
        }
        return issue.get();
    }

    @Override
    public List<Issue> getIssueByProjectId(Long projectId) throws Exception {
        return issueRepository.findByProjectId(projectId);
    }

    @Override
    public Issue createIssue(IssueRequest issueRequest, User user) throws Exception {
        Project project = projectService.getProjectById(issueRequest.getProjectId());

        Issue issue = new Issue();
        issue.setTitle(issueRequest.getTitle());
        issue.setDescription(issueRequest.getDescription());
        issue.setStatus(issueRequest.getStatus());
        issue.setProjectId(issueRequest.getProjectId());
        issue.setPriority(issueRequest.getPriority());
        issue.setDueDate(issueRequest.getDueDate());

        issue.setProject(project);

        return issueRepository.save(issue);
    }

    // need to delete this method
    @Override
    public Optional<Issue> updateIssue(Long issueId, IssueRequest updatedIssue, Long userId) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateIssue'");
    }

    @Override
    public void deleteIssue(Long issueId, Long userId) throws Exception {
        getIssueById(issueId);
        issueRepository.deleteById(issueId);
    }

    @Override
    public Issue addUserToIssue(Long issueId, Long userId) throws Exception {
        User user = userService.findUserById(userId);
        Issue issue = getIssueById(issueId);
        issue.setAssignee(user);
        return issueRepository.save(issue);
    }

    @Override
    public Issue updateStatus(Long issueId, String status) throws Exception {
        Issue issue = getIssueById(issueId);

        issue.setStatus(status);
        return issueRepository.save(issue);
    }

}
