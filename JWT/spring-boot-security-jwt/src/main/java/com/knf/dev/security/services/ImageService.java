package com.knf.dev.security.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public interface ImageService {

    String uploadImage(String path, MultipartFile file) throws IOException;



}
