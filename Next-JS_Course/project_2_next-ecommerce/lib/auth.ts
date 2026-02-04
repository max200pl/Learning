import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // Dynamic import to avoid loading Prisma in Edge Runtime
        const { prisma } = await import("@/lib/prisma");

        const parsedCredentials = LoginSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          console.log("Invalid credentials format");
          return null;
        }

        const { email, password } = parsedCredentials.data;

        try {
          const user = await prisma.user.findUnique({
            where: { email },
          });

          if (!user) {
            console.log("No user found with this email");
            return null;
          }

          const passwordsMatch = await comparePasswords(
            password,
            user.password,
          );

          if (!passwordsMatch) {
            console.log("Password does not match");
            return null;
          }

          return user;
        } catch (error) {
          console.error("Error finding user:", error);
          return null;
        }
      },
    }),
  ],
});

export async function hashPassword(password: string) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(
  password: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(password, hashedPassword);
}
