package com.knf.dev.security.services;

import com.knf.dev.models.DetailsUser;
import com.knf.dev.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.knf.dev.models.User;
import com.knf.dev.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserRepository userRepository;

	@Autowired
	private UserDetailsRepository userDetailsRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("user Not Found with username: " + username));

		return UserDetailsImpl.build(user);
	}


	public DetailsUser saveUser(DetailsUser user) {
		return userDetailsRepository.save(user);
	}
}