package com.knf.dev.controllers;

import com.knf.dev.models.DetailsUser;
import com.knf.dev.repository.UserDetailsRepository;
import com.knf.dev.security.services.UserDetailService;
import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 4700)
@RestController
@RequestMapping("/api/user")
public class UserDetailController {

    @Autowired
    UserDetailService userDetailService;

    @Autowired
    UserDetailsRepository userDetailsRepository;

    public UserDetailController(UserDetailService userDetailService) {
        this.userDetailService = userDetailService;
    }

    @GetMapping("/list")
    public List<DetailsUser> list() {
        return userDetailService.getList();
    }


    @PostMapping("/save")
    public DetailsUser saveUser(@RequestBody DetailsUser user){
        return userDetailService.saveUser(user);
    }

//
//    @PostMapping(value = {"/addimage"},consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
//    public AcceptList addImage(@RequestBody AcceptList list){
//        return userDetailService.addImage(list);
//
//    }
//@DeleteMapping("/animals/{id}")
//public ResponseEntity<Map<String, Boolean>> deleteAnimal(@PathVariable int id){
//    DetailsUser detail = UserDetailsRepository.findById(id)
//            .orElseThrow(() -> new ResourceNotFoundException("Animal not exist with id :" + id));
//    UserDetailsRepository.delete(detail);
//    Map<String, Boolean> response = new HashMap<>();
//    response.put("deleted", Boolean.TRUE);
//    return ResponseEntity.ok(response);
//}




}
