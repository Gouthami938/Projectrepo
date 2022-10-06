//package com.knf.dev.impl;
//
//import com.knf.dev.payload.FileResponse;
//import com.knf.dev.security.services.ImageService;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.File;
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Paths;
//import java.util.List;
//
//@Service
//public class FileServiceImpl implements ImageService {
//    @Override
//    public String uploadImage(String path, MultipartFile file) throws IOException {
//
//        String name=file.getOriginalFilename();
//        String filePath=path+ File.separator+name;
//        File f=new File(path);
//        if(!f.exists())
//        {
//            f.mkdir();
//        }
//
//        Files.copy(file.getInputStream(), Paths.get(filePath));
//
//        return name;
//
//
//    }
//
//    public List<FileResponse> getList() {
//        return
//    }
//}
