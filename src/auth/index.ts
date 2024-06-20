import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import authConfig from "./auth.config";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  ...authConfig,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
