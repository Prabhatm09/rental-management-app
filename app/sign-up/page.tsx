import { getSessionCookie } from "better-auth/cookies";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import AuthCard from "@/components/auth/AuthCard";

export default async function SignUpPage() {
  const requestHeaders = await headers();
  const googleEnabled = Boolean(
    process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
  );

  if (
    getSessionCookie(requestHeaders, {
      cookiePrefix: "rentalms",
    })
  ) {
    redirect("/dashboard");
  }

  return <AuthCard mode="sign-up" googleEnabled={googleEnabled} />;
}
