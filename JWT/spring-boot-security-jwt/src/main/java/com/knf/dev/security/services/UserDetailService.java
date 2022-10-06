package com.knf.dev.security.services;

//import com.knf.dev.models.AcceptList;
import com.knf.dev.models.DetailsUser;
import com.knf.dev.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@Service
public class UserDetailService {

    @Autowired
    UserDetailsRepository userDetailsRepository;

    public DetailsUser saveUser(DetailsUser user) {
        return userDetailsRepository.save(user);
    }

    public List<DetailsUser> getList() {
        return userDetailsRepository.findAll();
    }



//    public void Store(MultipartFile file){
//        String fileName=file.getOriginalFilename();
//        AcceptList acceptList=new AcceptList(UUID.randomUUID().toString(),fileName,file.getContentType(),file.getBytes());
//    }




}


/*
public DetailsUser saveUser(DetailsUser userd) {
		return userDetailsRepository.save(userd);
	}
 */