"use client";
import QueryProvider from "./Query";
import type * as React from "react";
import UserProvider from "./User";
// import { Session } from "next-auth";

export default function Providers({
  children,
}: // session,
{
  children: React.ReactNode;
  // session: Session | null;
}) {
  return (
    <QueryProvider>
      <UserProvider>{children}</UserProvider>
    </QueryProvider>
  );
}
