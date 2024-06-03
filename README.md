# Lendsqr FE Test Documentation: Adekoya Ireoluwatomiwa

## 1. Project Overview

### 1.1 Introduction

This document provides an overview and review of the Lendsqr FE Test project. It includes details on the technologies and tools used, the rationale behind the choices made, and the final outcomes. Additionally, this document will guide you to access the app and include credentials for login.

### 1.2 Project Description

The Lendsqr FE Test is a frontend application developed using React and TypeScript, built with Vite, and styled using a combination of SCSS and MUI. The application leverages various libraries to provide a seamless user experience.

## 2. Technologies and Tools Used

### 2.1 Frontend Library

- React: Chosen for its component-based architecture and efficient rendering.

### 2.2 Build Tool

- Vite: Selected for its fast build times and development server, making the development process more efficient than traditional bundlers like Webpack.

### 2.3 Type Checking

- TypeScript: Adopted for its ability to catch errors at compile-time, providing a more robust and maintainable codebase.

### 2.4 Styling

- SCSS: Used for styling the overall application, providing a more powerful and flexible way to write CSS.
- MUI (Material-UI): Specifically used for implementing popovers.

### 2.5 Testing

- Vitest: Used for testing the overall functionality of components within the application.
- React Testing Library: Employed for testing user interactions and ensuring the correct rendering of React components based on user behavior and input.

### 2.6 Libraries

- React Datepicker: Used for handling date inputs in the filter dropdown.
- React Loader Spinner: To indicate the loading state when fetching Users from Mock API.
- React Router DOM: For managing navigation and client-side routing within the application.
- React Hook Form: Utilized specifically for managing form state and validation in the login form, ensuring minimal re-renders and a much easier experience.

## 3. Project Setup and Path to the App

### 3.1 Installation and Running the App

To set up and run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd lendsqr-fe-test
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Build the application for production:
   ```
   npm run build
   ```

5. Preview the built application:
   ```
   npm run preview
   ```

### 3.2 Routes in the Application

Here are the key routes in the application:

- `/login`: The login page where users can enter their credentials.
- `/`: The main dashboard page after a successful login.
- `/users`: A page listing all users and additional information.
- `/usersdetails/:userId`: A detailed view of a specific user.

### 3.3 Public Access

You can access the live version of the application at [here](https://adekoya-ireoluwatomiwa-lendsqr-fe-test.vercel.app/).

### 3.4 Login Credentials

Email: admin@test.com  
Password: admin

## 4. Review of Work

### 4.1 Development Process

The development process followed an iterative approach, commencing with the finalization of page designs and mock API integration. Tools like JSON Generator and Mocky API were instrumental in swiftly mocking necessary data. The project prioritized pixel-perfect design, efficient pagination, and filtering implementation while balancing the need for custom solutions within time constraints.

### 4.2 Key Decisions and Rationale

- **Custom Pagination:** Choosing to construct pagination from scratch instead of relying on external libraries was driven by the goal of minimizing dependencies. This decision prioritized greater control over implementation, allowing for fine adjustments to pagination behavior tailored to project requirements. By avoiding unnecessary dependencies, the implementation remained lean and focused, enhancing overall performance and maintainability.

- **Utilizing MUI for Filter Dropdown:** Employing Material-UI (MUI) for implementing popovers, such as the filter dropdown and admin actions, expedited development and ensured design consistency across the application.

- **Scaling Responsiveness without Mobile Designs:** Adapting desktop designs to ensure responsiveness across diverse devices without specific mobile designs necessitated meticulous attention to layout and usability. By scaling down from desktop to mobile, the application strived to uphold readability and functionality across varied screen sizes, emphasizing user accessibility and engagement. Tools like mobile responsive viewers and Chrome DevTools facilitated the achievement of a truly responsive design.

- **React Hook Form:** The integration of React Hook Form was pivotal for more controlled form validation on the login side, ensuring data integrity and enhancing user interaction.

## 5. Conclusion

This document provides a comprehensive review of the Lendsqr FE Test project, outlining the technologies used, the reasons for their selection, and the overall development process. Access the app using the provided credentials, and feel free to reach out for further clarifications or feedback.
