# Nexus - Project Management Tool

Nexus is a project management tool designed to enhance team collaboration and work tracking. It enables admins to assign projects, set deadlines, and monitor progress through GitHub integration, with features like Razorpay subscription plans and Microsoft Clarity insights. Nexus can be used by teams or solo users to track projects efficiently.

![Nexus Dashboard](https://github.com/Aryan9901/Nexus/blob/main/screenshots/Screenshot%202024-10-03%20130335.png)

## Features
- **Task Management**: Create projects, assign tasks, and set deadlines.
- **GitHub Integration**: Submit GitHub repo links, commit IDs, and diff files for precise work tracking.
- **Team Collaboration**: Invite team members to your projects and assign specific roles.
- **Subscription Plans**: Payment integration with [Razorpay](https://razorpay.com) for managing subscriptions.
- **User Insights**: Track user interactions with [Microsoft Clarity](https://clarity.microsoft.com).
- **State Management**: Robust global state management with [Redux Toolkit](https://redux-toolkit.js.org/).
- **Customizable UI**: Built using [Shadcn UI](https://shadcn.dev) and styled with [TailwindCSS](https://tailwindcss.com).
- **Security**: Spring Security to manage authentication and authorization.
- **Future Features**: Project uploads, plagiarism detection, and more.

## Tech Stack
- **Frontend**: ReactJS, Shadcn UI, TailwindCSS
- **Backend**: Spring Boot, Spring Security
- **State Management**: Redux Toolkit
- **Database**: MySQL
- **Payment Gateway**: Razorpay
- **Analytics**: Microsoft Clarity
- **Version Control Integration**: GitHub API
- **HTTP Client**: Axios

## Screenshots
![Nexus Dashboard](https://github.com/Aryan9901/Nexus/blob/main/screenshots/Screenshot%202024-10-03%20130404.png)

---

![Nexus Dashboard](https://github.com/Aryan9901/Nexus/blob/main/screenshots/Screenshot%202024-10-03%20130429.png)
![Nexus Dashboard](https://github.com/Aryan9901/Nexus/blob/main/screenshots/Screenshot%202024-10-03%20130437.png)

## Future Scope
We are committed to innovating every feature due in the next version of Nexus released, on top of driving the way teams (and individuals) manage their projects even more precisely and efficiently. If you are busy take a peek at what is coming:

- **Project Uploads:** Going into 2019 we will begin to seamlessly integrate the ability for users to upload their project files directly to Nexus providing even more control and visibility on where things are with any given task — all within one place.

- **Pro Plagiarism Check :** For originality & accountability, use of advance plagiarism check algorithms. By allowing automatic verification of the code and content uniqueness itself at each submission, users can be more confident in the integrity of what they're working with.

- **More Collaboration Features:** With Nexus, collaboration will be more intuitive and efficient as it adds real-time communication and improved project-sharing capabilities.

In the future, we will integrate AI that will work its magic to suggest next steps, optimize deadlines and automation of anyone-off tasks so your teams can focus more on building what users love.

## Installation

### Backend (Spring Boot)
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/nexus-backend.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd nexus-backend
    ```
3. Configure MySQL database in `application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/nexus
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    ```
4. Build and run the Spring Boot application:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

### Frontend (ReactJS)
1. Clone the frontend repository:
    ```bash
    git clone https://github.com/yourusername/nexus-frontend.git
    ```
2. Navigate to the frontend directory:
    ```bash
    cd nexus-frontend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage

### Admin
- **Create Projects**: Admins can create and assign projects to users.
- **Monitor Progress**: View task statuses, deadlines, and user submissions (GitHub repo links, commit IDs, diffs).
- **Manage Subscriptions**: Set up payments through Razorpay.

### User
- **Submit Work**: Update your progress by submitting GitHub details (repo link, commit ID, diff).
- **Track Deadlines**: Keep an eye on upcoming deadlines and deliverables.

## Razorpay Integration
Nexus uses [Razorpay](https://razorpay.com) for handling subscription payments. You will need to configure your Razorpay API keys in the backend:
```properties
razorpay.key_id=your_key_id
razorpay.key_secret=your_key_secret
