# Link Multiple Auth Providers to an Account

<https://firebase.google.com/docs/auth/web/account-linking>

Firebase allows you to link multiple authentication providers to a single user account. This is useful when a user wants to sign in with different providers (e.g., Google, Facebook, Twitter) but still have the same account.

## Link Multiple Auth Providers

To link multiple authentication providers to an account, you can use the `linkWithPopup` method. This method allows you to link a new provider to an existing user account.

```javascript

import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Get the current user

const auth = getAuth();

const user = auth.currentUser;

// Create a new provider

const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

// Link the new provider to the user account

user.linkWithPopup(googleProvider).then((result) => {

  // Google account linked to the user account

}).catch((error) => {

  // An error occurred

});

user.linkWithPopup(facebookProvider).then((result) => {

  // Facebook account linked to the user account

}).catch((error) => {

  // An error occurred

});

```

In the code snippet above, we first get the current user and create new authentication providers for Google and Facebook. We then use the `linkWithPopup` method to link the new providers to the user account. If the linking is successful, the user will be able to sign in with either Google or Facebook and still have the same account.

This feature is useful for providing a seamless sign-in experience for users who want to use multiple authentication providers.
