# 🧩 View Model / Data Model Separation

Separating the UI model (View Model) from the data model (Data Model) helps make the code cleaner, more scalable, and easier to maintain.

---

## 🔹 View Model (UI Model)

> A model designed for building and displaying the user interface.

### Used for

- displaying lists (e.g., dropdowns),
- default values,
- auxiliary data (e.g., current user, flags, etc.).

### ❗ Not sent to the server

### Example

```json
{
  "AllProducts": [{ "Id": 1, "Name": "Product A" }],
  "DefaultEnvironment": "Dev",
  "CurrentUser": "admin"
}
```

## 🔸 Data Model (Server Model)

A clean model containing only the data required by the server.

Used for:

- form submissions,
- API requests.

Example

```json
{
  "SelectedProductId": 1,
  "Environment": "Dev",
  "EnableLogs": true
}
```
