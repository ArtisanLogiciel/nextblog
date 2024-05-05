"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton: React.FC = () => {
  return <button onClick={() => signIn()}>Login</button>;
};

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>logout</button>;
};
