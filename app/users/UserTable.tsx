"use client";
import React, { useEffect, useState } from "react";
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
  }

interface Props {
    sortby : string
}


const UserTable = ({sortby}:Props) => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
          cache: 'no-store',
        });
        const users: User[] = await res.json();
        setUsers(users);
      };
  
      fetchUsers();
    }, []);

    const sortById = () => {
      setUsers(sort(users).asc(u => u.id));
    };

    const sortByName = () => {
      setUsers(sort(users).asc(u => u.name));
    };

    const sortByEmail = () => {
      setUsers(sort(users).asc(u => u.email));
    };

    useEffect(() => {
      if (sortby === 'id') {
        sortById();
      } else if (sortby === 'name') {
        sortByName();
      } else if (sortby === 'email') {
        sortByEmail();
      }
    }, [sortby]);


  return <div>
  <div className="overflow-x-auto">
    <table className="table table-md">
      {/* head */}
      <thead>
        <tr>
          <th  className="bg-slate-500 text-white cursor-pointer">
            <Link href="/users?sortby=id">id</Link>
          </th>
          <td  className="bg-slate-500 text-white cursor-pointer">
            <Link href="/users?sortby=name">name</Link>
          </td>
          <td  className="bg-slate-500 text-white cursor-pointer">
            <Link href="/users?sortby=email">email</Link>
          </td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>;
};

export default UserTable;
