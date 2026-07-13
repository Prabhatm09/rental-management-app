import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import { prisma } from "@/lib/prisma";

function pushOrigin(origins: string[], value?: string | null) {
  if (!value) return;

  try {
    const origin = new URL(value).origin;
    if (!origins.includes(origin)) {
      origins.push(origin);
    }
  } catch {
    // Ignore invalid URLs and fall through to the caller-provided origin list.
  }
}

export const auth = betterAuth({
  appName: "RentalMS",
  baseURL:
    process.env.BETTER_AUTH_URL ??
    process.env.AUTH_URL ??
    "http://localhost:3000",
  secret:
    process.env.BETTER_AUTH_SECRET ?? process.env.AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
    transaction: true,
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },
  socialProviders:
    process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        }
      : undefined,
  session: {
    storeSessionInDatabase: true,
  },
  trustedOrigins: async (request) => {
    const baseURL =
      process.env.BETTER_AUTH_URL ??
      process.env.AUTH_URL ??
      "http://localhost:3000";
    const origins = [baseURL];

    if (process.env.NODE_ENV !== "production") {
      origins.push(
        "http://localhost:*",
        "http://127.0.0.1:*",
        "http://[::1]:*"
      );
    }

    if (request) {
      pushOrigin(origins, request.headers.get("origin"));
      pushOrigin(origins, request.headers.get("referer"));
    }

    return Array.from(new Set(origins));
  },
  advanced: {
    cookiePrefix: "rentalms",
    useSecureCookies: process.env.NODE_ENV === "production",
  },
  plugins: [nextCookies()],
});
