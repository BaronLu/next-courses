"use client"

import { Suspense } from "react";
import UserTable from "./UserTable";
import Link from 'next/link';

interface Props{
  searchParams : {
    sortby : string
  }
}

const UsersPage = ({searchParams:{sortby}}:Props) => {
  return (
    <div>
        <UserTable sortby={sortby} />
        {/* <Link href="/users/new" className="p-2 bg-slate-300 m-2">New User</Link> */}
    </div>
  );
};

export default UsersPage;
