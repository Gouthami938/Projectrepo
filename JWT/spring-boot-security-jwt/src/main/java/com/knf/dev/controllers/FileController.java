//package com.knf.dev.controllers;
//
//
//import com.knf.dev.impl.FileServiceImpl;
//import com.knf.dev.models.DetailsUser;
//import com.knf.dev.payload.FileResponse;
//import com.knf.dev.security.services.ImageService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.util.List;
//
//@RestController
//@RequestMapping("/file")
//public class FileController {
//
//    @Autowired
//    private ImageService imageService;
//
//    @Autowired
//    private FileServiceImpl fileService;
//
//    @Value("${project.image}")
//    private String path;
//
//    @GetMapping("/list")
//    public List<FileResponse> list() {
//        return fileService.getList();
//    }
//
//    @PostMapping("/upload")
//    public ResponseEntity<FileResponse> fileUpload(
//            @RequestParam("image") MultipartFile image
//
//    ){
//        String fileName=null;
//        try {
//             fileName = this.imageService.uploadImage(path, image);
//        }catch (IOException e){
//            e.printStackTrace();
//            return new ResponseEntity<>(new FileResponse(null,"Image is not uploaded due to error on server"), HttpStatus.INTERNAL_SERVER_ERROR);
//
//        }
//         return new ResponseEntity<>(new FileResponse(fileName,"Image is successfully uploaded!!"), HttpStatus.OK);
//    }
//
//
//
//}
