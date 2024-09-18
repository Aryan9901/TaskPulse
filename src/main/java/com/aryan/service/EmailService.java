package com.aryan.service;

public interface EmailService {
    public void sendEmailWithToken(String userEmail, String link, String projectName) throws Exception;

}
