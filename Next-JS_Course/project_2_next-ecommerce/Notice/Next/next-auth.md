# Next Auth Integration

In this section, we will integrate Next Auth into our application to handle user authentication. We will set up a basic authentication system that allows users to sign in and sign out.

## Step 1: Install Next Auth

First, we need to install the Next Auth package. Run the following command in your terminal:

```bash
npm install next-auth
```

## Step 2: Create an Authentication Handler

Next, we will create an authentication handler that will manage our authentication logic. Create a new file called `auth.ts` in the `lib` directory and add the following code:

```typescript
import NextAuth from "next-auth";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
});
```

## Step 3: Set Up Middleware

To protect certain routes in our application, we will set up middleware that uses our authentication handler. Create a new file called `middleware.ts` in the root directory and add the following code:

```typescript
export { auth as middleware } from "./lib/auth";

```

## Step 4: Install bcryptjs

To securely handle user passwords, we will use the `bcryptjs` library. Install it by running the following command:

```bash
npm install bcryptjs
npm install --save-dev @types/bcryptjs
```

## Step 5: Seed User Data

We will modify our Prisma seed script to include user data with hashed passwords. Update your `prisma/seed.ts` file as follows:

## Step 6: Install Zod

To validate user input, we will use the `zod` library. Install it by running the following command:

```bash
npm install zod
```
