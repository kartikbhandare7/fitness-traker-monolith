

# Fitness Tracker API

A production-style Fitness Tracker backend application built using Spring Boot.
This project provides secure REST APIs for tracking workouts, managing fitness activities, authentication using JWT, and role-based authorization.


---

## Features

* User Registration & Login
* JWT Authentication & Authorization
* Role-Based Access Control (USER / ADMIN)
* Secure REST APIs using Spring Security
* Workout & Activity Tracking
* Personalized Fitness Recommendations
* Input Validation
* Swagger/OpenAPI Documentation
* Dockerized Application
* MySQL Database Integration
* Layered Architecture (Controller → Service → Repository)

---

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate

### Database

* MySQL

### Authentication

* JWT (JSON Web Token)

### Tools & Utilities

* Docker
* Lombok
* Swagger / OpenAPI
* Maven
* Postman

---

## Project Architecture

```text
src/main/java
│
├── controller
├── service
├── repository
├── entity
├── dto
├── security
├── config
└── exception
```

---

## Authentication Flow

1. User registers using `/auth/register`
2. User logs in using `/auth/login`
3. Server validates credentials
4. JWT token is generated
5. Client sends JWT token in Authorization header
6. Protected APIs are accessed securely

Example:

```http
Authorization: Bearer your_jwt_token
```
<img width="1397" height="931" alt="image" src="https://github.com/user-attachments/assets/e6347c1b-e88d-4037-89ea-a17cc8d94e77" />

---

## API Endpoints

### Authentication APIs

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/auth/register` | Register new user |
| POST   | `/auth/login`    | Login user        |

### Activity APIs

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| POST   | `/activities`      | Add activity       |
| GET    | `/activities`      | Get all activities |
| GET    | `/activities/{id}` | Get activity by ID |
| PUT    | `/activities/{id}` | Update activity    |
| DELETE | `/activities/{id}` | Delete activity    |

---

## Database Design

Main entities used in the application:

* User
* Role
* Activity
* Recommendation

Relationships implemented using JPA/Hibernate mappings.

---

## Swagger Documentation

Swagger UI is integrated for testing and documenting REST APIs.

```bash
http://localhost:8080/swagger-ui/index.html
```

---

## Docker Setup

### Build Docker Image

```bash
docker build -t fitness-tracker .
```

### Run Docker Container

```bash
docker run -p 8080:8080 fitness-tracker
```

---

## Running the Project Locally

### Clone Repository

```bash
git clone <your-github-repo-url>
```

### Configure Database

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fitness_tracker
spring.datasource.username=root
spring.datasource.password=yourpassword
```

### Run Application

```bash
mvn spring-boot:run
```

---

## Future Improvements

* Refresh Token Implementation
* Email Verification
* Password Reset
* Frontend Integration
* Kubernetes Deployment
* CI/CD Pipeline
* AI-based Workout Suggestions

---

## What I Learned

* Building REST APIs using Spring Boot
* Implementing JWT Authentication
* Understanding Spring Security Filter Chain
* Role-Based Authorization
* DTO & Builder Pattern
* Dockerizing Java Applications
* API Documentation with Swagger
* Database Design using JPA/Hibernate

---

## Acknowledgements

Special thanks to Faisal Memon for the detailed educational course and backend architecture guidance. ([YouTube][1])

---

## License

This project is for learning and educational purposes.

---

Next step:
send me:

* your GitHub repo name
* actual endpoints you implemented
* whether you added screenshots
* whether Docker actually works in your project
* whether you deployed it anywhere

Then I’ll help you make this README look like a polished recruiter-grade project instead of a tutorial clone.

[1]: https://www.youtube.com/watch?v=NViOWCfROQk&utm_source=chatgpt.com "(हिन्दी) Spring Boot 4 Project Course | Build Fitness Tracker with Spring Security, JWT & Docker - YouTube"
