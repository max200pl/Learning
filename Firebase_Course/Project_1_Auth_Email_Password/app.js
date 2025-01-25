import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const auth = getAuth();

const mainView = document.getElementById("main-view");

/** ======== Sign Up ======== */
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");
const signUpErrorMessage = document.getElementById("error-message");

const signUpFrom = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

/** ======== User Profile ======== */
const UIuserProfileView = document.getElementById("user-profile");
const UIuserEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

/** ======== Login ======== */
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const loginErrorMessage = document.getElementById("login-error-message");

/** @description
 * This function listens for auth state changes.
 * If the user is signed in, the user object is returned.
 * If the user is signed out, the user object is null.
 */
onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    loginForm.style.display = "none";
    UIuserProfileView.style.display = "block";
    UIuserEmail.innerHTML = user.email;
  } else {
    loginForm.style.display = "block";
    UIuserProfileView.style.display = "none";
  }
  mainView.classList.remove("loading");
});

const signUpButtonPressed = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log(`User credentials: ${userCredential}`);

    UIuserEmail.innerHTML = userCredential.user.email;

    signUpFrom.style.display = "none";
    UIuserProfileView.style.display = "block";
  } catch (error) {
    console.error(error.code);
    signUpErrorMessage.innerText = formatErrorMessages(error.code, "signup");
    signUpErrorMessage.classList.add("visible");
  }
};

const logoutButtonPressed = async () => {
  try {
    await signOut(auth);
    email.value = "";
    password.value = "";
  } catch (error) {
    console.error(error);
  }
};

const loginButtonPressed = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(
      auth,
      loginEmail.value,
      loginPassword.value
    );
  } catch (error) {
    console.error(error.code);
    loginErrorMessage.innerHTML = formatErrorMessages(error.code, "login");
    loginErrorMessage.classList.add("visible");
  }
};

signupBtn.addEventListener("click", signUpButtonPressed);
logoutBtn.addEventListener("click", logoutButtonPressed);
loginBtn.addEventListener("click", loginButtonPressed);

const formatErrorMessages = (errorCode, action) => {
  let message = "";

  if (action === "signup") {
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
  } else if (action === "login") {
    if (
      errorCode === "auth/invalid-email" ||
      errorCode === "auth/missing-email"
    ) {
      message = "Email or password is incorrect.";
    } else if (
      errorCode === "auth/user-not-found" ||
      errorCode === "auth/invalid-credential"
    ) {
      message =
        "Our system was unable to find an account with that email or password.";
    }
  }

  return message;
};
