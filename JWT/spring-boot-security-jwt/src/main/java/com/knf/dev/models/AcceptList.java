//package com.knf.dev.models;
//
//import javax.persistence.*;
//import java.util.Date;
//
//@Entity
//@Table(name="image")
//public class AcceptList {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//
//    private int id;
//
//    private String name;
//
//    private Date date;
//
//    private String place;
//
//    @Lob
//    private byte[] imageName;
//
//    private int age;
//
//    private String hobbies;
//
//    private String gender;
//
//    public AcceptList() {
//    }
//
//    public AcceptList(String name, Date date, String place, byte[] imageName, int age, String hobbies, String gender) {
//        this.name = name;
//        this.date = date;
//        this.place = place;
//        this.imageName = imageName;
//
//        this.gender = gender;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public Date getDate() {
//        return date;
//    }
//
//    public void setDate(Date date) {
//        this.date = date;
//    }
//
//    public String getPlace() {
//        return place;
//    }
//
//    public void setPlace(String place) {
//        this.place = place;
//    }
//
//    public byte[] getImageName() {
//        return imageName;
//    }
//
//    public void setImageName(byte[] imageName) {
//        this.imageName = imageName;
//    }
//
//    public String getGender() {
//        return gender;
//    }
//
//    public void setGender(String gender) {
//        this.gender = gender;
//    }
//}
