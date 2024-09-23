package com.aryan.service;

import com.aryan.models.Invitation;

public interface InvitationService {
    public void sendInvitation(String email, Long projectId) throws Exception;

    public Invitation acceptInvitation(String token, Long userId) throws Exception;

    public String getTokenByUserMail(String userEmail) throws Exception;

    public void deleteToken(String token) throws Exception;
}
