"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export const SignIn = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <button onClick={() => signIn()}>Sign in</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </>
  );
};
