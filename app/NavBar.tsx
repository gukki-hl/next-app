import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="p-5 bg-sky-200 text-black-200">
        <Link href="/" className="mr-5">
          Next.js
        </Link>
        <Link href="/users" className="mr-5">
          Users
        </Link>
        <Link href="/admin" className="mr-5">
          Admin
        </Link>
        <Link href="/components" className="mr-5">
          Componement
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
