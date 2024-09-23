package com.aryan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendEmailWithToken(String userEmail, String link, String projectName) throws Exception {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

        String subject = "Invitation to join Team on Nexus - Your New Project Management Hub!";

        String body = """
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background-color: #4A90E2; color: white; padding: 20px; text-align: center; }
                        .content { padding: 20px; background-color: #f9f9f9; }
                        .button { display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Welcome to Nexus!</h1>
                        </div>
                        <div class="content">
                            <h2>You're invited to join the project team</h2>
                            <p>Hello,</p>
                            <p>You have been invited to collaborate on the project "%s" using Nexus - your new enhanced project management tool.</p>
                            <p>With Nexus, you can:</p>
                            <ul>
                                <li>Visualize your project progress like never before</li>
                                <li>Collaborate in real-time with your team</li>
                                <li>Track and verify project completion seamlessly</li>
                            </ul>
                            <p>Ready to get started? Click the button below to join the project:</p>
                            <p><a href="%s" class="button">Join Project</a></p>
                            <p>If the button doesn't work, copy and paste this link into your browser:</p>
                            <p>%s</p>
                            <p>We're excited to have you on board!</p>
                            <p>Best regards,<br>The Nexus Team</p>
                        </div>
                    </div>
                </body>
                </html>
                """
                .formatted(projectName, link, link);
        // need to change this hard coded email to user name or email

        helper.setSubject(subject);
        helper.setText(body, true);

        helper.setTo(userEmail);

        try {
            javaMailSender.send(mimeMessage);
        } catch (MailSendException e) {
            e.printStackTrace();
            throw new MailSendException("Failed to send email");
        }

    }

}
