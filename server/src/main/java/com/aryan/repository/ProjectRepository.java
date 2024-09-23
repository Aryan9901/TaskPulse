package com.aryan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.aryan.models.Project;
import com.aryan.models.User;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    // List<Project> findByOwner(User user);

    List<Project> findByNameContainingAndTeamContains(String partailName, User user);

    // @Query("SELECT p From Project p join p.team t where t=:user")
    // List<Project> findProjectByTeam(@Param("user") User user);

    List<Project> findByTeamContainingOrOwner(User user, User owner);
}
