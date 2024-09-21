import { bannerImageOne } from "@/assets";
import Button from "@/Component/Header/ui/Button";
import Container from "@/Container/Container";
import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div className="bg-bannerBg h-[480px] items-center">
      {/* left-side */}
      <Container className="flex justify-between items-center">
        <div className="mt-20 space-y-5">
          <p className="text-white font-semibold">Starting at $999.90</p>
          <h1 className="text-white font-bold text-6xl">
            The best tablet Collection 2024
          </h1>
          <h1 className="text-white font-semibold">
            off this week <span className="text-[#FFD441]">-40%</span>
          </h1>
          <Button className="bg-white text-black w-32  hover:text-white hover:bg-transparent hover:bg-bannerColor border hover:border-white/40 duration-300 rounded-md ">
            Shop now
          </Button>
        </div>

        <div className="mt-20">
          <Image className="w-80" src={bannerImageOne} alt="bannerImage" />
        </div>
      </Container>
    </div>
  );
};
