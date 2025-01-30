# Firebase Database

## What is Firebase Database?

1. One of the Two Databases: Real-Time Database and Firestore Database
2. It's a NoSQL Database
3. Get Real-Time Updates When Data Changes.. Live Chat App
4. Client-Side Data Protection Without Writing Server-Side Code

## Work process

1. Create a Firebase Project
2. Create a Web App
3. Add Firebase SDK
4. Create a Firestore Database [Link](https://console.firebase.google.com/project/learnfirebase-cfdf8/firestore)
5. Add Data to Firestore Database

## Add Data to Firestore Database

``` javascript
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const db = getFirestore();

const signUpButtonPressed = async (e) => {
   e.preventDefault();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    await sendEmailVerification(userCredential.user);

    const docRef = doc(db, "users", userCredential.user.uid);

    await setDoc(docRef, {
      name: name.value,
      phone: phone.value,
      email: email.value,
    });

    console.log(`User credentials: ${userCredential}`);
  } catch (error) {
    console.error(error.code);
    signUpErrorMessage.innerText = formatErrorMessages(error.code, "signup");
    signUpErrorMessage.classList.add("visible");
  }
};
```

## Add Rules to Firestore Database

- Go to Firestore Database
- Click on Rules
- Add the following rules
- Publish

1. `service cloud.firestore {`  // Firestore Database
2. `match /databases/{database}/documents {`  // Match the Database
3. `match /users/{userId} {`  // Match the Collection
4. `allow write: if request.auth != null;`  // Allow Write if Authenticated

``` javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
   match /users/{userId} {
    allow write: if request.auth != null;
   }
  }
}
```
