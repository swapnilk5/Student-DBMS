package com.swapnil.studentdb.controller;
import com.swapnil.studentdb.entity.Students;
import com.swapnil.studentdb.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("student")
public class StudentController {

    @Autowired
    StudentService studentService;


    @PostMapping("add")
    @CrossOrigin("http://127.0.0.1:3000")
    public ResponseEntity<String> addStudent(@RequestBody Students student){
        return studentService.addStudent(student);
    }

    @GetMapping("getAll")
    @CrossOrigin("http://127.0.0.1:3000")
    public ResponseEntity<List<Students>> getAllStudents(){
        return studentService.getAllStudents();
    }

    @PutMapping("update")
    @CrossOrigin("http://127.0.0.1:3000")
    public ResponseEntity<String> updateStudent(@RequestBody Students student){
        return studentService.updateStudent(student);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin("http://127.0.0.1:3000")
    public ResponseEntity<String> deleteStudent(@PathVariable Integer id){
        return studentService.deleteStudent(id);

    }
}
