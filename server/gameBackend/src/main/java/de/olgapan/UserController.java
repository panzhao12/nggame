package de.olgapan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")  //To fix cross origin sharing problem
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    List<User> allUser() {
        return userRepository.findAll();
    }

    @PostMapping("/users")
    User addUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users/{id}")
    User user(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}
