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

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js";

const auth = getAuth();
const db = getFirestore();
let file = null;
const storage = getStorage();

const mainView = document.getElementById("main-view");

/** ======== Email Verification ======== */

const resendEmailBtn = document.getElementById("resend-email-btn");

/** ======== Sign Up ======== */
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");
const signUpErrorMessage = document.getElementById("error-message");
const haveAnAccountBtn = document.getElementById("have-an-account-btn");

const signUpFrom = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

/** ======== Console ======== */
const consoleBtn = document.getElementById("console-btn");
const verifyBtn = document.getElementById("verify-btn");
const emailVerificationForm = document.getElementById("email-verification");
const emailVerificationText = document.getElementById(
  "email-verification-text"
);
const emailVerificationClose = document.getElementById(
  "email-verification-close"
);

/** ======== User Profile ======== */
const UIuserProfileView = document.getElementById("user-profile");
const UIuserEmail = document.getElementById("user-email");
const userRole = document.getElementById("user-role");
const logoutBtn = document.getElementById("logout-btn");

/** ======== User Update Profile ======== */
const imageFileInput = document.getElementById("image-file-input");
const updateName = document.getElementById("update-name");
const updatePhone = document.getElementById("update-phone");
const updateEmail = document.getElementById("update-email");
const updateBtn = document.getElementById("update-btn");
const profilePicture = document.getElementById("profile-picture-img");
const updateUserMessage = document.getElementById("update-user-message");

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

async function setUserRole(uid, role) {
  await setDoc(doc(db, "users", uid), { role });
}

async function setCustomClaim(uid, role) {
  await getAuth().setCustomUserClaims(uid, { role });
}

/** @description
 * This function listens for auth state changes.
 * If the user is signed in, the user object is returned.
 * If the user is signed out, the user object is null.
 */
onAuthStateChanged(auth, async (user) => {
  //   console.log(user);
  if (user) {
    if (!user.emailVerified) {
      verifyBtn.style.display = "block";
      consoleBtn.style.display = "none";
    } else {
      verifyBtn.style.display = "none";
      consoleBtn.style.display = "block";
    }

    UIuserEmail.innerHTML = user.email;

    const docRef = doc(db, "users", user.uid);

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.data().role === "admin") {
        consoleBtn.style.display = "block";
      }

      if (docSnap.data().name) {
        updateName.value = docSnap.data().name;
      }
      if (docSnap.data().phone) {
        updatePhone.value = docSnap.data().phone;
      }
      if (docSnap.data().email) {
        updateEmail.value = docSnap.data().email;
      }
      userRole.innerText = docSnap.data().role || "User";

      if (docSnap.data().photoURL) {
        profilePicture.src = docSnap.data().photoURL;
      } else {
        const fileRef = ref(storage, `user_images/${user.uid}/profile_picture`);
        try {
          const url = await getDownloadURL(fileRef);
          console.log("profile_picture URL:", url);
          profilePicture.src = url;
        } catch (error) {
          if (error.code === "storage/object-not-found") {
            console.log("Profile picture does not exist.");
            // Optionally, set a default image or handle the error as needed
            profilePicture.src = "img/default_user.png";
          } else {
            console.error("Error fetching profile picture:", error);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }

    loginForm.style.display = "none";
    signUpFrom.style.display = "none";
    UIuserProfileView.style.display = "block";
  } else {
    loginForm.style.display = "block";
    UIuserProfileView.style.display = "none";
    consoleBtn.style.display = "none";
    verifyBtn.style.display = "none";
    signUpFrom.style.display = "none";
  }
  mainView.classList.remove("loading");
});

const signUpButtonPressed = async (e) => {
  e.preventDefault();
  mainView.classList.add("loading");
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    const docRef = await doc(db, "users", userCredential.user.uid);

    await setDoc(docRef, {
      name: name.value,
      phone: phone.value,
      email: email.value,
      role: "admin",
    });

    if (file !== null) {
      const storageRef = ref(
        storage,
        `user_images/${userCredential.user.uid}/profile_picture`
      );

      await uploadBytes(storageRef, file);
    }

    signUpFrom.style.display = "none";
    signUpErrorMessage.style.display = "none";
    console.log(`User credentials: ${userCredential}`);
  } catch (error) {
    console.error(error.code);
    signUpErrorMessage.innerText = formatErrorMessages(error.code, "signup");
    signUpErrorMessage.style.display = "block";
  } finally {
    mainView.classList.remove("loading");
  }
};

const logoutButtonPressed = async () => {
  try {
    await signOut(auth);

    // RESET FORM FIELDS and ERROR MESSAGES
    console.log("User signed out successfully!");

    email.value = "";
    password.value = "";
    name.value = "";
    phone.value = "";
    profilePicture.src = "";

    console.log(`Resetting form fields...`);

    loginErrorMessage.classList.remove(["error", "success"]);
    loginErrorMessage.style.display = "none";

    signUpErrorMessage.classList.remove(["visible", "error", "success"]);
    signUpErrorMessage.classList.add("hidden");

    updateUserMessage.classList.remove(["visible", "error", "success"]);
    updateUserMessage.style.display = "none";
  } catch (error) {
    console.error(error);
  }
};

const loginButtonPressed = async (e) => {
  e.preventDefault();
  mainView.classList.add("loading");
  try {
    await signInWithEmailAndPassword(
      auth,
      loginEmail.value,
      loginPassword.value
    );

    loginForm.style.display = "none";
  } catch (error) {
    console.error(error.code);
    loginErrorMessage.innerHTML = formatErrorMessages(error.code, "login");
    loginErrorMessage.style.display = "block";
  } finally {
    mainView.classList.remove("loading");
  }
};

const needAnAccountBtnPressed = () => {
  loginForm.style.display = "none";
  signUpFrom.style.display = "block";
};

const haveAnAccountBtnPressed = () => {
  signUpFrom.style.display = "none";
  loginForm.style.display = "block";

  signUpErrorMessage.classList.remove(["visible", "error", "success"]);
  signUpErrorMessage.style.display = "none";
};

const forgotPasswordBtnPressed = () => {
  loginForm.style.display = "none";
  resetPasswordForm.style.display = "block";
};

const resetPasswordBtnPressed = async (e) => {
  e.preventDefault();
  mainView.classList.add("loading");
  try {
    await sendPasswordResetEmail(auth, resetPasswordEmail.value);
    resetPasswordMessage.innerText = `An email has been sent to ${resetPasswordEmail.value}`;
    resetPasswordMessage.classList.add("success");
    resetPasswordMessage.style.display = "block";
  } catch (error) {
    console.error(error.code);
    resetPasswordMessage.innerHTML = "Please enter a valid email address.";
    resetPasswordMessage.classList.add("error");
  } finally {
    mainView.classList.remove("loading");
  }

  setInterval(() => {
    resetPasswordMessage.classList.add("hidden");
    resetPasswordForm.style.display = "none";
    loginForm.style.display = "block";
  }, 5000);
};

const loginWithGooleBtnPressed = async (e) => {
  e.preventDefault();
  mainView.classList.add("loading");
  try {
    loginForm.style.display = "none";
    const result = await signInWithPopup(auth, new GoogleAuthProvider());

    const docRef = doc(db, "users", result.user.uid);
    console.log(result.user);

    const userData = {
      name: result.user.displayName,
      email: result.user.email,
      role: "admin",
      photoURL: result.user.photoURL,
    };

    const existingDoc = await getDoc(docRef);
    if (existingDoc.exists()) {
      const existingData = existingDoc.data();
      if (existingData.phone) {
        userData.phone = existingData.phone;
      }
    }

    await setDoc(docRef, userData, { merge: true });

    if (userData.photoURL) {
      profilePicture.src = userData.photoURL;
    }
  } catch (error) {
    console.error(error);
  } finally {
    mainView.classList.remove("loading");
  }
};

const loginWithGithubBtnPressed = async (e) => {
  e.preventDefault();
  mainView.classList.add("loading");
  try {
    await signInWithPopup(auth, new GithubAuthProvider());
  } catch (error) {
    console.error(error);
  } finally {
    mainView.classList.remove("loading");
  }
};

const updateButtonPressed = async (e) => {
  e.preventDefault();

  const user = auth.currentUser;

  mainView.classList.add("loading");
  try {
    const docRef = doc(db, "users", user.uid);
    const oldDataSnap = await getDoc(docRef);

    const oldData = oldDataSnap.data();

    console.log(oldData);
    const updatedData = {
      photoURL: oldData.photoURL,
      role: oldData.role,
      name: updateName.value || oldData.name,
      phone: updatePhone.value || oldData.phone,
      email: updateEmail.value || oldData.email,
    };

    Object.keys(updatedData).forEach((key) => {
      if (updatedData[key] === undefined) {
        delete updatedData[key];
      }
    });

    await setDoc(docRef, updatedData);

    updateUserMessage.classList.add("success");
    updateUserMessage.innerText = "User profile updated successfully!";
    updateUserMessage.style.display = "block";
    console.log("Document successfully written!");
  } catch (error) {
    updateUserMessage.classList.add("error");
    updateUserMessage.innerText = "An error occurred. Please try again.";
    updateUserMessage.style.display = "block";
    console.error("Error writing document: ", error);
  } finally {
    mainView.classList.remove("loading");
  }
};

const imageFileChosen = (e) => {
  file = e.target.files[0];
};

const closeMessage = () => {
  emailVerificationForm.classList.add("hidden");
  emailVerificationForm.classList.remove("visible");
};

const sendVerificationButtonPressed = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    emailVerificationForm.classList.add("visible");
  } catch (error) {
    emailVerificationForm.classList.add("visible");
    emailVerificationText.innerText = `An error occurred: ${error.code}`;
    emailVerificationForm.classList.add("error");
    console.error(error);
  }
};

const resendButtonPressed = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    emailVerificationForm.classList.add("hidden");
  } catch (error) {
    emailVerificationForm.classList.add("visible");
    emailVerificationForm.classList.add("error");
    emailVerificationText.innerText = `An error occurred: ${error.code}`;
    console.error(error);
  }
};

/** ======== Email Verification ======== */
verifyBtn.addEventListener("click", sendVerificationButtonPressed);
resendEmailBtn.addEventListener("click", resendButtonPressed);
emailVerificationClose.addEventListener("click", closeMessage);

/** ======== Sign Up ======== */
signupBtn.addEventListener("click", signUpButtonPressed);
haveAnAccountBtn.addEventListener("click", haveAnAccountBtnPressed);

/** ======== User Profile ======== */
logoutBtn.addEventListener("click", logoutButtonPressed);

/** ======== User Update Profile ======== */
updateBtn.addEventListener("click", updateButtonPressed);
imageFileInput.addEventListener("change", imageFileChosen);

/** ======== Login ======== */
loginBtn.addEventListener("click", loginButtonPressed);
needAnAccountBtn.addEventListener("click", needAnAccountBtnPressed);
forgotPasswordBtn.addEventListener("click", forgotPasswordBtnPressed);

/** ======== Reset Password ======== */
resetPasswordBtn.addEventListener("click", resetPasswordBtnPressed);

/** ======== Login With Google ======== */
loginWithGooleBtn.addEventListener("click", loginWithGooleBtnPressed);

/** ======== Login With Github ======== */
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
      errorCode === "auth/weak-password" ||
      errorCode === "auth/missing-password"
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
      message = "Email is incorrect";
    } else if (
      errorCode === "auth/missing-password" ||
      errorCode === "auth/wrong-password"
    ) {
      message = "Password is incorrect";
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
