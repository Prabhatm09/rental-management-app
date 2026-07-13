"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Building2, Loader2, Mail, ShieldCheck } from "lucide-react";

import { signIn, signUp } from "@/lib/auth-client";

type Mode = "sign-in" | "sign-up";

type Props = {
  mode: Mode;
  googleEnabled: boolean;
};

function getErrorMessage(error?: { message?: string; code?: string } | null) {
  if (!error) return "Something went wrong. Please try again.";
  return error.message || error.code || "Something went wrong. Please try again.";
}

export default function AuthCard({ mode, googleEnabled }: Props) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const isSignUp = mode === "sign-up";

  function handleSubmit(formData: FormData) {
    setError("");

    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const name = String(formData.get("name") ?? "").trim();
    const confirmPassword = String(
      formData.get("confirmPassword") ?? ""
    );

    if (!email || !password || (isSignUp && !name)) {
      setError("Please fill all required fields.");
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    startTransition(async () => {
      const response = isSignUp
        ? await signUp.email({
            name,
            email,
            password,
            callbackURL: "/dashboard",
          })
        : await signIn.email({
            email,
            password,
            callbackURL: "/dashboard",
          });

      if (response.error) {
        setError(getErrorMessage(response.error));
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    });
  }

  function continueWithGoogle() {
    if (!googleEnabled) {
      setError("Google sign-in is not configured yet.");
      return;
    }
    setError("");
    startTransition(async () => {
      const response = await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });

      if (response.error) {
        setError(getErrorMessage(response.error));
      }
    });
  }

  return (
    <main className="grid min-h-screen place-items-center px-4 py-8">
      <section className="premium-card w-full max-w-md overflow-hidden">
        <div className="electric-strip h-1.5" />
        <div className="p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-[var(--charge-soft)] text-[var(--charge)]">
              <Building2 size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-[var(--ink)]">
                {isSignUp ? "Create owner account" : "Owner sign in"}
              </h1>
              <p className="text-sm font-medium text-[var(--muted)]">
                RentalMS property billing workspace
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={continueWithGoogle}
            disabled={isPending || !googleEnabled}
            className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] border border-[var(--line)] bg-[var(--surface)] px-4 py-3 font-bold text-[var(--ink)] transition hover:border-[var(--charge)] disabled:opacity-60"
          >
            <ShieldCheck size={18} />
            {googleEnabled ? "Continue with Google" : "Google sign-in unavailable"}
          </button>
          {!googleEnabled && (
            <p className="mt-2 text-xs font-medium text-[var(--muted)]">
              Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env` to enable Google sign-in.
            </p>
          )}

          <div className="my-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            <span className="h-px flex-1 bg-[var(--line)]" />
            or use email
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <form action={handleSubmit} className="space-y-4">
            {isSignUp && (
              <label className="block">
                <span className="text-sm font-bold text-[var(--muted)]">
                  Owner name
                </span>
                <input
                  name="name"
                  autoComplete="name"
                  className="electric-input mt-1 min-h-12 w-full px-4"
                  required
                />
              </label>
            )}

            <label className="block">
              <span className="text-sm font-bold text-[var(--muted)]">
                Email
              </span>
              <div className="relative mt-1">
                <Mail
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                />
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="electric-input min-h-12 w-full px-11"
                  required
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-[var(--muted)]">
                Password
              </span>
              <input
                name="password"
                type="password"
                autoComplete={isSignUp ? "new-password" : "current-password"}
                minLength={8}
                className="electric-input mt-1 min-h-12 w-full px-4"
                required
              />
            </label>

            {isSignUp && (
              <label className="block">
                <span className="text-sm font-bold text-[var(--muted)]">
                  Confirm password
                </span>
                <input
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  className="electric-input mt-1 min-h-12 w-full px-4"
                  required
                />
              </label>
            )}

            {error && (
              <p className="rounded-[12px] border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-semibold text-[var(--danger)]">
                {error}
              </p>
            )}

            <button
              disabled={isPending}
              className="electric-primary flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] px-5 py-3 font-black"
            >
              {isPending && <Loader2 size={18} className="animate-spin" />}
              {isSignUp ? "Create account" : "Sign in"}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-[var(--muted)]">
            {isSignUp ? "Already have an account?" : "New owner?"}{" "}
            <Link
              href={isSignUp ? "/sign-in" : "/sign-up"}
              className="font-black text-[var(--charge)]"
            >
              {isSignUp ? "Sign in" : "Create an account"}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
