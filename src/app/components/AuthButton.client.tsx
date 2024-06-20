"use client";
import { useSession } from "next-auth/react";

import Button from "@/app/components/Button";

import { signIn, signOut } from "@/auth/helpers";

export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <Button
      handleClick={async () => {
        await signOut();
        await signIn();
      }}>
      {session.data?.user?.name} : Sign Out
    </Button>
  ) : (
    <Button handleClick={async () => await signIn()}>Sign In</Button>
  );
}
