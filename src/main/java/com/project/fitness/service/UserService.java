package com.project.fitness.service;

import com.project.fitness.dto.LoginRequest;
import com.project.fitness.dto.RegisterRequest;
import com.project.fitness.dto.UserResponse;
import com.project.fitness.model.User;
import com.project.fitness.model.UserRole;
import com.project.fitness.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserResponse register(RegisterRequest register) {
        UserRole role = register.getRole() != null ? register.getRole() : UserRole.USER;
        User user = User.builder()
                .email(register.getEmail())
                .password(passwordEncoder.encode(register.getPassword()))
                .role(role)
                .firstName(register.getFirstName())
                .lastName(register.getLastName())
                .build();

//        User user = new User(
//                    null,
//                register.getEmail(),
//                register.getPassword(),
//                register.getFirstName(),
//                register.getLastName(),
//                Instant.parse("2026-05-14T12:16:41.406Z")
//                        .atZone(ZoneOffset.UTC)
//                        .toLocalDateTime(),
//                Instant.parse("2026-05-14T12:16:41.406Z")
//                        .atZone(ZoneOffset.UTC)
//                        .toLocalDateTime(),
//                List.of(),
//                List.of()

        User saveUser = userRepository.save(user);
        return mapToResponse(saveUser);
    }

    public UserResponse mapToResponse(User saveUser) {
        UserResponse userResponse = new UserResponse();
        userResponse.setId(saveUser.getId());
        userResponse.setEmail(saveUser.getEmail());
        userResponse.setPassword(saveUser.getPassword());
        userResponse.setFirstName(saveUser.getFirstName());
        userResponse.setLastName(saveUser.getLastName());
        userResponse.setCreatedAt(saveUser.getCreatedAt().toLocalDate());
        userResponse.setUpdatedAt(saveUser.getUpdatedAt().toLocalDate());
        return userResponse;

    }

    public User authenticate(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail());
        if(user == null) throw new RuntimeException("Invalid email or password");

        if(!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())){
            throw new RuntimeException("Invalid password");
        }
        return user;
    }
}
