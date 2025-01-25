# Fundamentals concepts of  Firebase

- [Fundamentals concepts of  Firebase](#fundamentals-concepts-of--firebase)
  - [Create A Firebase Project Firebase Console](#create-a-firebase-project-firebase-console)
  - [Create Web App](#create-web-app)
  - [Add Firebase SDK](#add-firebase-sdk)
  - [Enabled Email/Password Authentication](#enabled-emailpassword-authentication)
  - [Import Firebase SDK](#import-firebase-sdk)
  - [Create User with Email and Password](#create-user-with-email-and-password)

## Create A Firebase Project Firebase Console

## Create Web App

## Add Firebase SDK

## Enabled Email/Password Authentication

1. Go to Firebase Console
2. Click on Authentication
3. Click on Sign-in method
4. Enable Email/Password

## Import Firebase SDK

 1. got to <https://firebase.google.com/docs/web/learn-more#available-libraries>
 2. ``` import { } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"; ```
        2.1 getAuth() - To get the Auth service for the default app or a given app.
        2.2 createUserWithEmailAndPassword() - Creates a new user account associated with the specified email address and password.

## Create User with Email and Password

```javascript

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const auth = getAuth();
try {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  console.log(`User ${JSON.stringify(userCredential)} created successfully!`);
  // Signed in
  const user = userCredential.user;
  // ...
} catch (error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
}

```
