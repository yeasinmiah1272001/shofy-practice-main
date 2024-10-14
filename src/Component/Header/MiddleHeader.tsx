"use client";
import Image from "next/image";

import Container from "@/Container/Container";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useEffect } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { logo } from "@/assets";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "@/redux/shopySlice";
import { StateType } from "../../../type";
import SearchInput from "../SearchInput";

const MiddleHeader = () => {
  const { data: session } = useSession();
  const disPatch = useDispatch();
  const { cart } = useSelector((state: StateType) => state.shopy);
  // console.log("this is cart", cart)
  useEffect(() => {
    if (session) {
      disPatch(addUser(session.user));
    } else {
      disPatch(removeUser());
    }
  }, [session?.user]);

  return (
    <Container className="py-1">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          {" "}
          <Image className="w-32" src={logo} alt="logo" />
        </Link>

        <SearchInput />
        {/* content */}
        <div>
          <div className="flex gap-3 items-center">
            {session?.user ? (
              <Link href={"/profile"}>
                <div className="flex  items-center gap-1">
                  <div className="">
                    <Image
                      className="h-14 w-14 rounded-full"
                      src={session.user.image!}
                      width={200}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <div>
                    <h1 className="text-sm">Hello,{session?.user?.name}</h1>
                    <p className=" font-serif">View Profile </p>
                  </div>
                </div>
              </Link>
            ) : (
              <>
                <div
                  onClick={() => signIn()}
                  className="flex  items-center gap-1"
                >
                  <div className="border-2 border-gray-600 p-3 text-xl rounded-full">
                    <FaRegUser />
                  </div>
                  <div>
                    <h1 className="text-sm">Hello,{session?.user?.name}</h1>
                    <p className=" font-serif">Login /register </p>
                  </div>
                </div>
              </>
            )}

            <Link href={"/favourite"} className="relative">
              <MdFavoriteBorder className="text-3xl text-gray-600" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-themeColor text-white w-4 h-4 font-semibold rounded-full inline-flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href={"/cart"} className="relative">
              <IoBagOutline className="text-3xl text-gray-600" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-themeColor text-white w-4 h-4 font-semibold rounded-full inline-flex items-center justify-center">
                {cart.length > 0 ? cart.length : "0"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MiddleHeader;
