import type { NextAuthConfig } from "next-auth";

// This config is used by middleware (Edge Runtime compatible)
export const authConfig = {
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnCheckout = nextUrl.pathname.startsWith("/checkout");

      // Protect dashboard and checkout routes
      if (isOnDashboard || isOnCheckout) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }

      return true;
    },
  },
  providers: [], // Providers will be added in auth.ts
} satisfies NextAuthConfig;
