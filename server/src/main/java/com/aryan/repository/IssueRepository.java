package com.aryan.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aryan.models.Issue;

public interface IssueRepository extends JpaRepository<Issue, Long> {

    public List<Issue> findByProjectId(Long id);

}
