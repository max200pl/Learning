import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const auth = getAuth();

const mainView = document.getElementById("main-view");

/** ======== Email Verification ======== */
const emailVerificationForm = document.getElementById("email-verification");
const resendEmailBtn = document.getElementById("resend-email-btn");

/** ======== Sign Up ======== */
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");
const signUpErrorMessage = document.getElementById("error-message");
const haveAnAccountBtn = document.getElementById("have-an-account-btn");

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
const needAnAccountBtn = document.getElementById("need-an-account-btn");
const forgotPasswordBtn = document.getElementById("forgot-password-btn");

/** ========  Login With GOOLE ======== */

const loginWithGooleBtn = document.getElementById("login-with-goole-btn");

/** ========  Login With Github ======== */

const loginWithGithubBtn = document.getElementById("login-with-github-btn");

/** ========  Reset Password ======== */
const resetPasswordForm = document.getElementById("reset-password-form");
const resetPasswordBtn = document.getElementById("reset-password-btn");
const resetPasswordEmail = document.getElementById("reset-password-email");
const resetPasswordMessage = document.getElementById("rp-message");

const resendButtonPressed = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
  } catch (error) {
    console.error(error);
  }
};

resendEmailBtn.addEventListener("click", resendButtonPressed);

/** @description
 * This function listens for auth state changes.
 * If the user is signed in, the user object is returned.
 * If the user is signed out, the user object is null.
 */
onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    if (!user.emailVerified) {
      emailVerificationForm.style.display = "block";
      UIuserProfileView.style.display = "none";
    } else {
      UIuserProfileView.style.display = "block";
      UIuserEmail.innerHTML = user.email;
      emailVerificationForm.style.display = "none";
    }

    loginForm.style.display = "none";
    signUpFrom.style.display = "none";
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
    await sendEmailVerification(userCredential.user);

    console.log(`User credentials: ${userCredential}`);
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

const needAnAccountBtnPressed = () => {
  loginForm.style.display = "none";
  signUpFrom.style.display = "block";
};

const haveAnAccountBtnPressed = () => {
  signUpFrom.style.display = "none";
  loginForm.style.display = "block";
};

const forgotPasswordBtnPressed = () => {
  loginForm.style.display = "none";
  resetPasswordForm.style.display = "block";
};

const resetPasswordBtnPressed = async (e) => {
  e.preventDefault();
  console.log(resetPasswordEmail.value);
  try {
    await sendPasswordResetEmail(auth, resetPasswordEmail.value);

    resetPasswordMessage.innerHTML = `An email has been sent to ${resetPasswordEmail.value}`;
    resetPasswordMessage.classList.add("success");
  } catch (error) {
    console.error(error.code);
    resetPasswordMessage.innerHTML = "Please enter a valid email address.";
    resetPasswordMessage.classList.add("error");
  }

  resetPasswordMessage.classList.remove("hidden");
};

const loginWithGooleBtnPressed = async (e) => {
  e.preventDefault();
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};

const loginWithGithubBtnPressed = async (e) => {
  e.preventDefault();
  const provider = new GithubAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};

signupBtn.addEventListener("click", signUpButtonPressed);
haveAnAccountBtn.addEventListener("click", haveAnAccountBtnPressed);
logoutBtn.addEventListener("click", logoutButtonPressed);
loginBtn.addEventListener("click", loginButtonPressed);
needAnAccountBtn.addEventListener("click", needAnAccountBtnPressed);
forgotPasswordBtn.addEventListener("click", forgotPasswordBtnPressed);
resetPasswordBtn.addEventListener("click", resetPasswordBtnPressed);
loginWithGooleBtn.addEventListener("click", loginWithGooleBtnPressed);
loginWithGithubBtn.addEventListener("click", loginWithGithubBtnPressed);

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
