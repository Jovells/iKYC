"use client";
import QueryProvider from "./Query";
import type * as React from "react";
import UserProvider from "./User";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <UserProvider>{children}</UserProvider>
    </QueryProvider>
  );
}
