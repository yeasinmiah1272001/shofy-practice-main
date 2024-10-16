import { categories } from "@/Constant";
import Container from "@/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const SlideCategory = () => {
  return (
    <Container className="text-2xl text-red-500 mt-10">
      <Marquee gradient={false} speed={50}>
        <div className="flex gap-5">
          {categories.map((item, index) => (
            <Link
              href={"/products"}
              key={index}
              className="border border-gray-400 text-center"
            >
              <Image
                className="w-52 h-28 hover:scale-105 duration-300"
                src={item.img}
                width={400}
                height={200}
                alt={`category-${index}`}
              />
            </Link>
          ))}
        </div>
      </Marquee>
    </Container>
  );
};

export default SlideCategory;
