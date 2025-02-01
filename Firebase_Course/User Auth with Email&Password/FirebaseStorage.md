# Firebase Storage with Firebase SDK

## Work process

1. Create a Firebase Project
2. Create a Web App
3. Add Firebase SDK
4. Create a Firebase Storage [Link](https://console.firebase.google.com/project/learnfirebase-cfdf8/storage)
5. Upload Files to Firebase Storage
6. Get Download URL
7. Display Image
8. Delete File
9. Add Rules to Firebase Storage
10. Publish

## Upload Files to Firebase Storage

```javascript

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js";

const storage = getStorage();

const file = document.querySelector("#file").files[0];

const storageRef = ref(storage, "images/" + file.name);

uploadBytes(storageRef, file).then((snapshot) => {
  console.log("Uploaded a blob or file!", snapshot);
});

```

### Fixed Security Rules

- Allow only authenticated users to upload files

1. `match /b/{bucket}/o` - This is the root path of the storage bucket
2. `match /images/{fileName}` - This is the path where the files will be uploaded
3. `allow write: if request.auth != null;` - This is the rule that allows only authenticated users to upload files
4. `request.auth != null` - This is the condition that checks if the user is authenticated

```javascript
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /user_images/{userId}/{fileName}{
        allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Load Image from Firebase Storage

```javascript

import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js";

const storage = getStorage();

const storageRef = ref(storage, "images/" + file.name);

getDownloadURL(storageRef).then((url) => {
  console.log(url);
  document.querySelector("#image").src = url;
});

```

### Fixed Read Security Rules

- Allow only authenticated users to download files

1. `match /b/{bucket}/o` - This is the root path of the storage bucket
2. `match /images/{fileName}` - This is the path where the files will be uploaded
3. `allow read: if request.auth != null;` - This is the rule that allows only authenticated users to download files
4. `request.auth != null` - This is the condition that checks if the user is authenticated
5. `request.auth.uid == userId` - This is the condition that checks if the user is the owner of the file

```javascript
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    match /user_images/{userId}/{fileName}{
        allow read: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
