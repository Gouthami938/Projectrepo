package com.knf.dev.repository;

import com.knf.dev.models.DetailsUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserDetailsRepository extends JpaRepository<DetailsUser,Integer> {

//List<DetailsUser> findById(int id);

}
