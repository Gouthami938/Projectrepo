package com.knf.dev.controllers;

import com.knf.dev.models.DetailsUser;
import com.knf.dev.models.Payment;
import com.knf.dev.repository.UserDetailsRepository;
import com.knf.dev.security.services.PaymentService;
import com.knf.dev.security.services.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 4700)
@RestController
@RequestMapping("/api/payment")
public class PaymentController {


        @Autowired
    PaymentService paymentService;

        @Autowired
        UserDetailsRepository userDetailsRepository;

        public PaymentController(PaymentService paymentService) {
            this.paymentService = paymentService;
        }

        @GetMapping("/list")
        public List<Payment> list() {
            return paymentService.getList();
        }


        @PostMapping("/save")
        public Payment saveUser(@RequestBody Payment userpay){
            return paymentService.saveUser(userpay);
        }

//
//    @PostMapping(value = {"/addimage"},consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
//    public AcceptList addImage(@RequestBody AcceptList list){
//        return userDetailService.addImage(list);
//
//    }





    }




