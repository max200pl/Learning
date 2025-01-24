import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const auth = getAuth();

const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");
const UIErrorMessage = document.getElementById("error-message");

const signUpButtonPressed = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log(`User credentials: ${userCredential}`);
  } catch (error) {
    console.error(error.code);
    UIErrorMessage.innerText = formatErrorMessages(error.code);
    UIErrorMessage.classList.add("visible");
  }
};

signupBtn.addEventListener("click", signUpButtonPressed);

const formatErrorMessages = (errorCode) => {
  let message = "";
  if (
    errorCode === "auth/invalid-email" ||
    errorCode === "auth/missing-email"
  ) {
    message = "Invalid email address.";
  } else if (
    errorCode === "auth/missing-password" ||
    errorCode === "auth/weak-password"
  ) {
    message = "Password must be at least 6 characters long.";
  } else if (errorCode === "auth/email-already-in-use") {
    message = "This email is already in use.";
  }

  return message;
};
