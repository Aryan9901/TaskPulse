package com.aryan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aryan.models.Invitation;

public interface InvitationRepository extends JpaRepository<Invitation, Long> {

    public Invitation findByToken(String token);

    public Invitation findByEmail(String userEmail);

}
