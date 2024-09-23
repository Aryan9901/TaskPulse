package com.aryan.controllers;

import java.util.ArrayList;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import com.paypal.api.payments.Amount;
import com.paypal.api.payments.Payment;
import com.paypal.api.payments.PaymentExecution;
import com.paypal.api.payments.Payer;
import com.paypal.api.payments.RedirectUrls;
import com.paypal.api.payments.Transaction;
// import com.paypal.api.payments.*;
// import com.paypal.api.payments.PaymentIntent;
// import com.paypal.api.payments.PaymentMethod;
import com.paypal.api.payments.Details;
import com.paypal.api.payments.Item;
import com.paypal.api.payments.ItemList;

import java.util.List;
import com.aryan.models.PlanType;
import com.aryan.models.User;
import com.aryan.response.PaymentLinkResponse;
import com.aryan.service.UserService;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;

    @Value("${paypal.client.id}")
    private String clientId;

    @Value("${paypal.client.secret}")
    private String clientSecret;

    @Value("${paypal.mode}")
    private String mode;

    @Autowired
    private UserService userService;

    @PostMapping("/planType")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(
            @PathVariable PlanType planType,
            @RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        int amount = 799 * 100;
        if (planType.equals(PlanType.ANNUALLY)) {
            amount *= 12;
            amount = (int) (amount * 0.7);
        }

        RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

        JSONObject paymentLinkRequest = new JSONObject();
        paymentLinkRequest.put("amount", amount);
        paymentLinkRequest.put("currency", "INR");

        JSONObject customer = new JSONObject();
        customer.put("name", user.getFullname());
        customer.put("email", user.getEmail());

        paymentLinkRequest.put("customer", customer);

        JSONObject notify = new JSONObject();
        notify.put("email", true);
        notify.put("sms", true);

        paymentLinkRequest.put("notify", notify);
        paymentLinkRequest.put("callback_url", "http://localhost:5173/upgrade_plan/success?planType=" + planType);

        PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);

        String paymentLinkId = payment.get("id");
        String paymentLinkUrl = payment.get("short_url");

        PaymentLinkResponse res = new PaymentLinkResponse();
        res.setPayment_link_id(paymentLinkId);
        res.setPayment_link_url(paymentLinkUrl);

        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    @PostMapping("/link/{planType}")
    public ResponseEntity<PaymentLinkResponse> createPayment(
            @PathVariable PlanType planType,
            @RequestHeader("Authorization") String jwt) throws Exception {
        // Initialize PayPal API Context
        APIContext apiContext = new APIContext(clientId, clientSecret, mode);

        User user = userService.findUserProfileByJwt(jwt);

        // Define the amount to be charged
        String amountTotal = "799.00";
        if (planType.equals(PlanType.ANNUALLY)) {
            amountTotal = "6711.00"; // 799 * 12 * 0.7
        }

        // Set Payer information
        Payer payer = new Payer();
        payer.setPaymentMethod("paypal");

        // Set Transaction details
        Amount amount = new Amount();
        amount.setCurrency("USD");
        amount.setTotal(amountTotal);

        Transaction transaction = new Transaction();
        transaction.setDescription("Payment for " + planType.name() + " subscription");
        transaction.setAmount(amount);

        // Create payment
        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(payer);
        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);
        payment.setTransactions(transactions);

        // Set redirect URLs
        RedirectUrls redirectUrls = new RedirectUrls();
        redirectUrls.setCancelUrl("http://localhost:5173/upgrade_plan/cancel");
        redirectUrls.setReturnUrl("http://localhost:5173/upgrade_plan/success?planType=" + planType);
        payment.setRedirectUrls(redirectUrls);

        try {
            // Create payment on PayPal
            Payment createdPayment = payment.create(apiContext);

            // Extract approval URL
            String approvalUrl = createdPayment.getLinks().stream()
                    .filter(link -> link.getRel().equals("approval_url"))
                    .findFirst()
                    .map(link -> link.getHref())
                    .orElseThrow(() -> new RuntimeException("Approval URL not found"));

            // Return the PayPal approval URL
            PaymentLinkResponse res = new PaymentLinkResponse();
            res.setPayment_link_id(createdPayment.getId());
            res.setPayment_link_url(approvalUrl);

            return new ResponseEntity<>(res, HttpStatus.CREATED);

        } catch (PayPalRESTException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
