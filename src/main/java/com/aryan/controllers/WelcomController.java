package com.aryan.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aryan.repository.ChatRepository;
import com.aryan.repository.CommentRepository;
import com.aryan.repository.InvitationRepository;
import com.aryan.repository.IssueRepository;
import com.aryan.repository.MessageRepository;
import com.aryan.repository.ProjectRepository;
import com.aryan.repository.SubscriptionRepository;
import com.aryan.repository.UserRepository;
import com.aryan.response.MessageResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping
public class WelcomController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private InvitationRepository invitationRepository;

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @GetMapping
    public String helloWorld() {
        return "welcome to Nexus API";
    }

    @DeleteMapping("api/delete/all")
    public ResponseEntity<MessageResponse> deleteALL() throws Exception {

        subscriptionRepository.deleteAll();
        issueRepository.deleteAll();
        invitationRepository.deleteAll();
        commentRepository.deleteAll();
        messageRepository.deleteAll();
        chatRepository.deleteAll();
        projectRepository.deleteAll();
        userRepository.deleteAll();

        MessageResponse res = new MessageResponse();
        res.setMessage("All Data deleted");

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
