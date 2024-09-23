package com.aryan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aryan.models.Subscription;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    Subscription findByUserId(Long userId);
}
