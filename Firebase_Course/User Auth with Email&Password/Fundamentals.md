# Fundamentals concepts of  Firebase

- [Fundamentals concepts of  Firebase](#fundamentals-concepts-of--firebase)
  - [Create A Firebase Project Firebase Console](#create-a-firebase-project-firebase-console)
  - [Create Web App](#create-web-app)
  - [Add Firebase SDK](#add-firebase-sdk)
  - [Enabled Email/Password Authentication](#enabled-emailpassword-authentication)
  - [Import Firebase SDK](#import-firebase-sdk)
  - [Sign Up User with Email and Password (Create User)](#sign-up-user-with-email-and-password-create-user)
  - [Sign In User with Email and Password](#sign-in-user-with-email-and-password)
  - [Sign Out User](#sign-out-user)
  - [Send Email Verification](#send-email-verification)

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

## Sign Up User with Email and Password (Create User)

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

## Sign In User with Email and Password

```javascript

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const auth = getAuth();

try {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(`User ${JSON.stringify(userCredential)} signed in successfully!`);
    // Signed in
    const user = userCredential.user;
    // ...
} catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
}

```

## Sign Out User

```javascript

import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const auth = getAuth();

try {
  await signOut(auth);
  console.log('User signed out successfully!');
} catch (error) {
  console.error(error);
}

```

## Send Email Verification

```javascript

import { getAuth, onAuthStateChanged, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const auth = getAuth();

const signUpButtonPressed = async (e) =>{
 e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(`User ${JSON.stringify(userCredential)} created successfully!`);

        const user = auth.currentUser;
        await sendEmailVerification(user);
        console.log('Verification email sent!');
    } catch (error) {
        console.error(error);
    }
}
```
