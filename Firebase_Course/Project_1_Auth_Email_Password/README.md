# Authentication Web App

This project is a web application that provides user authentication using Firebase. Users can sign up, log in, reset their passwords, and update their profiles. The application also supports authentication via Google and GitHub. Admin users have access to a console for additional functionalities.

## Features

- User Sign Up
- User Sign In
- Password Reset
- Profile Update
- Email Verification
- Google and GitHub Authentication
- Admin Console Access

## Flowchart

```mermaid
flowchart TD
    %% Nodes
    Start["fa:fa-rocket Start"]
    SignUp["fa:fa-user-plus Sign Up"]
    SignIn["fa:fa-sign-in-alt Sign In"]
    RoleCheck{"fa:fa-check-circle Role Check"}
    VerifyEmail["fa:fa-envelope Verify Email (Optional)" style.stroke-dasharray: 5 5]
    ProfileSetup["fa:fa-user-cog Profile Setup"]
    ConsoleAccess["fa:fa-terminal Console Access"]
    End["fa:fa-flag-checkered End"]

    %% Edge connections between nodes
    Start --> SignUp
    Start --> SignIn
    SignUp --> RoleCheck
    SignIn --> RoleCheck
    RoleCheck --> VerifyEmail
    RoleCheck --> ProfileSetup
    RoleCheck --> ConsoleAccess
    VerifyEmail --> RoleCheck
    ProfileSetup --> End
    ConsoleAccess --> End

    %% Node styling
    style Start color:#FFFFFF, fill:#2962FF, stroke:#2962FF
    style SignUp color:#FFFFFF, fill:#00C853, stroke:#00C853
    style SignIn color:#FFFFFF, fill:#00C853, stroke:#00C853
    style VerifyEmail color:#FFFFFF, fill:#F9A825, stroke:#F9A825,
    style RoleCheck color:#FFFFFF, fill:#AA00FF, stroke:#AA00FF
    style ProfileSetup color:#FFFFFF, fill:#00ACC1, stroke:#00ACC1
    style ConsoleAccess color:#FFFFFF, fill:#D50000, stroke:#D50000
    style End color:#FFFFFF, fill:#FF6F00, stroke:#FF6F00
