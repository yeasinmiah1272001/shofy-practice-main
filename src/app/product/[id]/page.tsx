"use client";

import AddToCartBtn from "@/Component/AddToCartdBtn";
import ProductImage from "@/Component/ProductImage";
import Container from "@/Container/Container";
import { getData } from "@/helper";

import React from "react";

const SinglePage = async ({ params }) => {
  const { id } = params;
  const endPoint = `https://dummyjson.com/products/${id}`;
  const product = await getData(endPoint);

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full">
        <ProductImage product={product} />
      </div>
      <div className="flex flex-col gap-2 max-w-sm">
        <div>
          <p className="text-sm capitalize text-lightText font-semibold">
            {product?.category}
          </p>
          <h1 className="text-2xl">{product?.title}</h1>
        </div>
        <div>
          {product?.availabilityStatus && (
            <span className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-md">
              In Stock
            </span>
          )}
        </div>
        <p className="text-sm tracking-wide max-w-sm">{product?.description}</p>
        <AddToCartBtn product={product}/>
       
      </div>
    </Container>
  );
};

export default SinglePage;
