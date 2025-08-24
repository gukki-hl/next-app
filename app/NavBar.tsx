"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;
  return (
    <div>
      <div className="flex p-5 bg-sky-200 text-black-200 space-x-10">
        <Link href="/">Next.js</Link>
        <Link href="/users">Users</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/components">Componement</Link>
        {status === "authenticated" && (
          <div>
            {session.user?.name}
            <Link href="/api/auth/signout" className="ml-10">
              SignOut
            </Link>
          </div>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
