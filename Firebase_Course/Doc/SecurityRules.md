# Must-Know Security Rules

## 1 Read Permission For Anyone

Let’s say you have a posts collection and you want to show all documents from it to anyone who visits your site. You can do something like this:

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{docId} {
      allow read;
    }
  }
}
```

Pretty straight forward!

The ```allow:read`` gives permission to read the all documents in a give path, in this case,
```/posts/{docId}```

Other operations such as create, update and delete can be a different statement or merged with the read statement depending upon what type of rule you’re trying to write.

But newer use ```allow: write``` without any condition, it will allow anyone to write to your database.

## 2 For Authenticated Users Only

Instead of showing the posts to anyone, how about showing them to only authenticated users.

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{docId} {
      allow read: if request.auth != null;
    }
  }
}
```
