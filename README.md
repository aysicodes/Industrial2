# Application of Converting the Evaluation System Transcript into a Visual Diagram of the Formed Competences of the Graduate

## Overview
This project is designed to visualize the competencies of graduates based on their academic achievements in courses like Programming Language, Software Engineering, and Web Programming. The application allows students to register, log in, and view their competencies in a visual format. It includes secure authentication using JWT tokens and provides features for managing student data.

## Features
- **User Registration & Login:** Secure registration and authentication using JWT.
- **Profile Management:** Update and delete student profiles.
- **Competency Visualization:** Convert academic transcripts into visual UML diagrams.
- **Secure API:** Authentication and authorization mechanisms in place using Spring Security.

## Technologies Used
- **Backend:** Java, Spring Boot, Spring Security, JWT, PostgreSQL
- **Frontend:** React + Vite (Hosted on http://localhost:5173)
- **Tools:** IntelliJ IDEA (Backend), VS Code (Frontend),GitHub

## API Endpoints
### Authentication
- `POST /api/register`: Register a new student.
- `POST /api/login`: Login and receive a JWT token.

### Student Management
- `GET /api/me`: Get the current logged-in student profile.
- `PUT /api/update`: Update the current student's profile.
- `DELETE /api/delete`: Delete the current student's profile.
- `GET /api/all`: Retrieve all students (admin use).

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/aysicodes/Industrial2.git
   ```

2. **Backend Setup**
   - Open the project in **IntelliJ IDEA**.
   - Update `application.properties` with your PostgreSQL configuration.
   - Run the application on `localhost:7070`.

3. **Frontend Setup**
   - Navigate to the frontend directory and open in **VS Code**.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the frontend:
     ```bash
     npm run dev
     ```

## Project Structure
### Backend (Spring Boot)
- `com.example.transcripttodiagram`
  - **Controller:** Handles HTTP requests.
  - **Service:** Business logic.
  - **Model:** Entity classes.
  - **Security:** JWT filters and utilities.

### Frontend (React)
- `src`
        - `Home.jsx`
        - `Home.css`
        - `Profile.jsx`
        - `Profile.css`
        - `Register.jsx`
        - `Login.jsx`

## Competencies Covered
- **Programming Language:** Wrangle data (ETL), Aggregate large datasets, Generate descriptive stats, Create data visualizations, Evaluate visualization methods, Design a perception-based pipeline, Understand learning concepts, Compare learning approaches, Analyze and clean data, Visualize data, Be able to program, Write code on paper, Be able to plan, Be able to fulfill technical requirements (technical specifications), Self-study, Responsibility and time management
- **Software Engineering:** Basic knowledge of Java Core, Understanding of relational databases, Knowledge of REST API (request structure and methods), Development of RESTful APIs, Working with Spring Boot, Application of REST methods, Building structured requests, Testing and Quality Assurance
- **Web Programming:** Basic understanding of Python programming, Familiarity with HTML and CSS, Fundamentals of Programming and Software Development, Spring Framework, Working with Database, Tools and Ecosystem, Architectural Approaches and Patterns, Testing, Soft Skills, Development of RESTful APls

## Authors
- **Aizirek Ibraimova**  
- **Aiperi Zhenishova**  

## License
This project is licensed under the MIT License.

