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
