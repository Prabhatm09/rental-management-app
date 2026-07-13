import "server-only";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

export type CurrentOwner = {
  id: string;
  name: string;
  email: string;
};

export async function getCurrentOwner(): Promise<CurrentOwner | null> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    return null;
  }

  return {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  };
}

export async function requireOwner(): Promise<CurrentOwner> {
  const owner = await getCurrentOwner();

  if (!owner) {
    redirect("/sign-in");
  }

  return owner;
}
