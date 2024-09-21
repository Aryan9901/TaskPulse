package com.aryan.service;

import com.aryan.models.PlanType;
import com.aryan.models.Subscription;
import com.aryan.models.User;

public interface SubscriptionService {
    Subscription createSubscription(User user) throws Exception;

    Subscription getUsersSubscription(Long userId) throws Exception;

    Subscription upgradeSubscription(Long userId, PlanType planType) throws Exception;

    boolean isValid(Subscription subscription) throws Exception;
}
