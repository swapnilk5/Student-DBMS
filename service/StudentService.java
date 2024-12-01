package com.swapnil.studentdb.service;

import com.swapnil.studentdb.entity.Students;
import com.swapnil.studentdb.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepo;

    public ResponseEntity<String> addStudent(Students student) {
        try{
            studentRepo.save(student);
            return new ResponseEntity<>("Student successfully added." , HttpStatus.CREATED);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Unable to add Student!", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<List<Students>> getAllStudents() {
        try{
            return new ResponseEntity<>(studentRepo.findAll(),HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(Collections.emptyList(), HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> updateStudent(Students student) {
        try{
            studentRepo.save(student);
            return new ResponseEntity<>("Updation Successfull.",HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Unable to update student!", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> deleteStudent(Integer id) {
        try{
            studentRepo.deleteById(id);
            return new ResponseEntity<>("Student deleted successfully.",HttpStatus.OK);
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Unable to delete student", HttpStatus.BAD_REQUEST);
    }
}
