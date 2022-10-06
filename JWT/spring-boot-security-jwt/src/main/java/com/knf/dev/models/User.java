package com.knf.dev.models;

import com.sun.istack.NotNull;
import lombok.Data;
import net.bytebuddy.implementation.bind.annotation.Empty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "auser")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(unique = true)
	@NotNull
	private String username;
	@NotNull
	private String password;

	public User(String username,String password) {
		this.username = username;
		this.password = password;
	}

	public User() {
		super();
	}

}
