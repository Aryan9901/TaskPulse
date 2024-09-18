package com.aryan.dto;

import com.aryan.models.Project;
import com.aryan.models.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IssueDTO {
    private Long id;
    private String title;
    private String description;
    private String status;
    private Long projectId;
    private String priority;
    private LocalDate dueDate;
    private List<String> tags = new ArrayList<>();
    private Project project;

    // exclude assignee during serialization

    private User assignee;
}
