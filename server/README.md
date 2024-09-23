# **Nexus - Project Management Tool**

![Nexus Logo](link-to-your-logo)

Nexus is a comprehensive project management tool designed to track work progress efficiently and accurately. Whether you're working solo or managing a team, Nexus offers a robust platform to assign tasks, monitor progress, and handle payments—all integrated with GitHub for seamless task tracking.

---

## **Table of Contents**

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Screenshots](#screenshots)
6. [Future Enhancements](#future-enhancements)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## **Features**

- **Admin Dashboard**: Assign projects to users, set deadlines, and monitor progress with detailed task tracking.
- **GitHub Integration**: Users submit GitHub repo links, commit IDs, and diff files to update task status.
- **Solo & Team Projects**: Create and manage personal or team projects with ease.
- **Subscription System**: Integrated with Razorpay to handle subscriptions for premium features.
- **Real-time Task Monitoring**: Easily track work progress in real-time based on GitHub commits.
- **User Insights**: Microsoft Clarity integration to capture user insights for better platform optimization.

---

## **Tech Stack**

- **Frontend**: React, Redux Toolkit, TailwindCSS, Shadcn UI
- **Backend**: Spring Boot
- **Payment Gateway**: Razorpay
- **State Management**: Redux Toolkit
- **User Insights**: Microsoft Clarity
- **Version Control**: GitHub

---

## **Installation**

### **Prerequisites**

- Node.js (v14+)
- Java (for Spring Boot)
- Razorpay API credentials

### **Frontend Setup**

1. Clone the repository:
   ```bash
   https://github.com/Aryan9901/Nexus.git
   cd nexus

2. Install the dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

### **Backend Setup**

1. Navigate to the backend folder:
   ```bash
   cd backend

2. Build the Spring Boot application:
   ```bash
   ./mvnw clean install

3. Run the backend server:
   ```bash
   ./mvnw spring-boot:run


## **Usage**
### **Admin:**
- Log in to the admin dashboard.
- Assign projects, set deadlines, and monitor task progress.
- View updates submitted by users (GitHub repo links, commit IDs, etc.).
### **User:**
- Create solo or team projects.
- Submit GitHub commit details to update task status.
- Subscribe to premium features using Razorpay.
- Screenshots


## **Future Enhancements**
- **Project Upload:** Allow users to directly upload project files to Nexus.
- **Plagiarism Detection:** Implement plagiarism checks to ensure the originality of submitted work.
- **Advanced Analytics:** Provide deeper insights into project progress and team performance.
- **Contributing**
We welcome contributions! To contribute:

## **Fork the repository.**
Create a feature branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Create a Pull Request.

## **License**
This project is licensed under the MIT License - see the LICENSE file for details.
