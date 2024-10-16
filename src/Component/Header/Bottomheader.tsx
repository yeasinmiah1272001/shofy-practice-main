"use client";
import { categories, navigation } from "@/Constant";
import Container from "@/Container/Container";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Bottomheader = () => {
  const { data: session } = useSession();
  return (
    <div className="border-2 py-2 mt-2">
      <Container className="flex justify-between items-center">
        <div className="flex gap-7">
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="border border-gray-400 p-1 px-2 rounded-md"
            >
              All Category
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu space-y-3 overflow-auto bg-slate-800 text-white rounded-box z-[1] w-52 p-3 shadow"
            >
              {categories.map((item) => (
                <div key={item.id} className="flex gap-2   ">
                  <Image
                    className="w-10"
                    src={item.img}
                    alt="img"
                    height={300}
                    width={300}
                  />
                  <li>{item.name}</li>
                </div>
              ))}
            </ul>
          </div>
          {navigation.map((item) => (
            <Link
              href={item.href}
              className="hover:text-red-500 duration-300"
              key={item.title}
            >
              {item.title}
            </Link>
          ))}
          {session && <p onClick={() => signOut()}>LogOut</p>}
        </div>
        <div>
          <p className="text-xs hidden md:inline-flex font-medium text-gray-500">
            Hotline: <span className="text-black">+88 01023456789</span>
          </p>
        </div>
      </Container>
    </div>
  );
};
