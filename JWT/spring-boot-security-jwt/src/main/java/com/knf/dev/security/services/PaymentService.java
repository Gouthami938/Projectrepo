package com.knf.dev.security.services;

import com.knf.dev.models.DetailsUser;
import com.knf.dev.models.Payment;
import com.knf.dev.repository.PaymentRepository;
import com.knf.dev.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    PaymentRepository paymentRepository;
    public List<Payment> getList() {
        return paymentRepository.findAll();
    }

    public Payment saveUser(Payment userpay) {
        return paymentRepository.save(userpay);
    }
}
