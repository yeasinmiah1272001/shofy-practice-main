"use client"
import { navigation } from "@/Constant";
import Container from "@/Container/Container";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export const Bottomheader = () => {
  const {data:session} = useSession()
  return (
    <div className="border-2 py-2">
      <Container className="flex justify-between items-center">
        <div className="flex gap-5">
          {navigation.map((item) => (
            <p className="hover:text-red-500 duration-300" key={item.title}>
              {item.title}
            </p>
          ))}
          {
            session &&   <p onClick={() => signOut()}>LogOut</p>
          }
         
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
