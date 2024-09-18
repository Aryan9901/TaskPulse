package com.aryan.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aryan.models.Invitation;
import com.aryan.models.Project;
import com.aryan.repository.InvitationRepository;

@Service
public class InvitationServiceImpl implements InvitationService {

    @Autowired
    private InvitationRepository invitationRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private ProjectService projectService;

    @Override
    public void sendInvitation(String email, Long projectId) throws Exception {
        Project project = projectService.getProjectById(projectId);

        String invitationToken = UUID.randomUUID().toString();

        Invitation invitation = new Invitation();
        invitation.setEmail(email);
        invitation.setProjectId(projectId);
        invitation.setToken(invitationToken);

        invitationRepository.save(invitation);

        String invitationLink = "http://localhost:5173/accept_invitation?token=" + invitationToken;

        emailService.sendEmailWithToken(email, invitationLink, project.getName());
    }

    @Override
    public Invitation acceptInvitation(String token, Long userId) throws Exception {
        Invitation invitation = invitationRepository.findByToken(token);

        if (invitation == null) {
            throw new Exception("Invalid Invitation Token!");
        }

        return invitation;
    }

    @Override
    public String getTokenByUserMail(String userEmail) throws Exception {
        Invitation invitation = invitationRepository.findByEmail(userEmail);

        return invitation.getToken();
    }

    @Override
    public void deleteToken(String token) throws Exception {
        Invitation invitation = invitationRepository.findByToken(token);

        invitationRepository.delete(invitation);
    }

}
