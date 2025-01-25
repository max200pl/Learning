import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const auth = getAuth();

const mainView = document.getElementById("main-view");

const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");
const UIErrorMessage = document.getElementById("error-message");

const UIsignUpFromView = document.getElementById("signup-form");
const UIuserProfileView = document.getElementById("user-profile");
const UIuserEmail = document.getElementById("user-email");

/** @description
 * This function listens for auth state changes.
 * If the user is signed in, the user object is returned.
 * If the user is signed out, the user object is null.
 */
onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    UIsignUpFromView.style.display = "none";
    UIuserProfileView.style.display = "block";
    UIuserEmail.innerHTML = user.email;
  } else {
    UIsignUpFromView.style.display = "block";
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

    UIsignUpFromView.style.display = "none";
    UIuserProfileView.style.display = "block";
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
