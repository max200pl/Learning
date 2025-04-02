# AngularJS: Project Structure

## 🔧 1. Why do we need the `controllers` and `services` folders?

### controllers

These are AngularJS controllers (not to be confused with C# controllers).

They contain the presentation logic: handling user interactions, determining what data to display, and how to load it.

Examples:

- `userlist.controller.js` — manages the display of the user list.
- `useredit.controller.js` — handles the logic for editing a user.

### services

These are utility modules that handle server-side logic: sending HTTP requests, loading/saving data, etc.

They are used by controllers.

Examples:

- `user.service.js` — retrieves the list of users.
- `role.service.js` — retrieves roles.
- `http.service.js` — a wrapper around `$http` with authorization/error handling logic.

### Relationship

A controller uses a service to fetch/send data → then passes the data to the HTML (via `$scope` or `vm`).

---

## ⚙️ 2. Are these files minified?

Yes. The `gulpfile.js` includes a task `gulp.task('scripts')`, which:

1. Takes the source `.js` files grouped by functionality (e.g., `manage-users.js`).
2. Processes them through:
   - `ngAnnotate()` — ensures safe dependency injection after minification.
   - `uglify()` — minifies the code (removes spaces, shortens variable names).
3. Saves the result in the `/js/` directory.

➡️ As a result, the browser receives a small and optimized JS file.

---

## 📄 3. How are `users.cshtml` and "manage-users" related?

On the `users.cshtml` page, you can see:

```html
<div ng-app="manage-users">
```

This means that the AngularJS application named `manage-users` will run within this HTML fragment.

At the bottom of the page:

```html
<script src="@url.js('manage-users')"></script>
```

This line loads the minified JS file built by Gulp (e.g., `manage-users.js`), which:

- declares the Angular module `manage-users`.
- includes dependencies (`ngRoute`, `auth`, `ui.bootstrap`).
- configures routing and initializes controllers.

### 💡 In summary

```plaintext
users.cshtml
│
├─ loads the JS file manage-users.js
│
├─ this file declares the Angular application "manage-users"
│
├─ the application consists of:
│   ├─ controllers/ — presentation logic
│   └─ services/ — server communication logic
│
└─ everything is minified through gulp and loaded as a single file
```
