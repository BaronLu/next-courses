import React from "react";
import Link from "next/link";

const NavBar = () => {
  return <div className="flex justify-evenly pb-2 bg-slate-600 text-white">
        <Link href="/" className="hover:bg-blue-500 hover:text-white p-5 rounded-lg mt-2">Home</Link>
        <Link href="/users" className="hover:bg-blue-500 hover:text-white p-5 rounded-lg mt-2">Users</Link>
        <Link href="/users/new" className="hover:bg-blue-500 hover:text-white p-5 rounded-lg mt-2">NewUser</Link>
        <Link href="/admin" className="hover:bg-blue-500 hover:text-white p-5 rounded-lg mt-2">Admin</Link>
  </div>;
};

export default NavBar;
