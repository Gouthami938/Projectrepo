package com.knf.dev.controllers;

import com.knf.dev.models.DetailsUser;
import com.knf.dev.security.services.UserDetailsServiceImpl;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.knf.dev.response.MessageResponse;


@CrossOrigin(origins = "*", maxAge = 4800)
@RestController
@RequestMapping("/api/test")
public class UserController {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;


	@GetMapping("/all")
	public MessageResponse allAccess() {
		return new MessageResponse("Server is up.....");
	}

	@GetMapping("/greeting")
	@PreAuthorize("isAuthenticated()")
	public MessageResponse userAccess() {

		return new MessageResponse("Congratulations! You are an authenticated user.");
	}




}
