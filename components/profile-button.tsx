"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function ProfileButton() {
  return (
    <Button variant="outline" onClick={() => signIn()}>
      Login
    </Button>
  );
}
