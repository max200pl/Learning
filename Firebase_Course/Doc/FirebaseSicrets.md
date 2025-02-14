# FirebaseSecrets

When deploying your site, you should use the environment variable management features provided by your hosting service. Most modern hosting services, such as Firebase Hosting, Vercel, Netlify, and others, allow you to securely store and manage environment variables. This is important because you should never store sensitive information, such as API keys, in your codebase.

## Firebase Hosting Set Secrets

To set secrets in Firebase Hosting, you can use the Firebase CLI. The Firebase CLI allows you to set environment variables for your Firebase project. You can set these variables using the `firebase functions:config:set` command. This command allows you to set environment variables for your Firebase project that can be accessed by your Firebase Functions.

```bash
firebase functions:config:set  \
react_app.api_key=" " \
react_app.auth_domain=" " \
react_app.database_url=" " \
react_app.project_id="  " \
react_app.storage_bucket=" " \
react_app.messaging_sender_id=" " \
react_app.app_id=" "
```

## Firebase GET Hosting Secrets

To get secrets in Firebase Hosting, you can use the Firebase CLI. The Firebase CLI allows you to get environment variables for your Firebase project. You can get these variables using the `firebase functions:config:get` command. This command allows you to get environment variables for your Firebase project that can be accessed by your Firebase Functions.

```bash
firebase functions:config:get
```

### Firebase GET Secrets in client React from Firebase

## Config environment variables

<https://firebase.google.com/docs/functions/config-env?gen=1st>

We can use environment variables in our Firebase functions to store sensitive information such as API keys and secrets.
2. `firebase functions:secrets:set SENSITIVE` - sets environment variables for Firebase functions.
3. Or we can simply use a .env file in the root of the project.

```TypeScript
import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import { defineSecret } from "firebase-functions/params";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Define secrets
const apiKey = defineSecret("API_KEY");
const authDomain = defineSecret("AUTH_DOMAIN");
const projectId = defineSecret("PROJECT_ID");
const storageBucket = defineSecret("STORAGE_BUCKET");
const messagingSenderId = defineSecret("MESSAGING_SENDER_ID");
const appId = defineSecret("APP_ID");

// Define function
export const getFirebaseConfig = onRequest(
    {
        secrets: [
            apiKey,
            authDomain,
            projectId,
            storageBucket,
            messagingSenderId,
            appId,
        ],
    },
    async (req, res) => {
        try {
            // Get token from Authorization header
            const idToken = req.headers.authorization?.split("Bearer ")[1];

            if (!idToken) {
                res.status(401).json({
                    error: "Unauthorized - No token provided",
                });
                return;
            }

            // Verify user token
            await admin.auth().verifyIdToken(idToken);

            // Send configuration
            res.json({
                apiKey: apiKey.value(),
                authDomain: authDomain.value(),
                projectId: projectId.value(),
                storageBucket: storageBucket.value(),
                messagingSenderId: messagingSenderId.value(),
                appId: appId.value(),
            });
        } catch (error) {
            console.error("Error verifying token or fetching config:", error);
            res.status(403).json({ error: "Forbidden - Invalid token" });
        }
    }
);

```
