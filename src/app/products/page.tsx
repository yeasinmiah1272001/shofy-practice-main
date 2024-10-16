import ProductCard from "@/Component/Pages/Home/ProductCard/ProductCard";
import Container from "@/Container/Container";
import React from "react";
import { ProductType } from "../../../type";
import { getData } from "@/helper";

const ProductsPage = async () => {
  const endPoint = `https://dummyjson.com/products`;

  const product = await getData(endPoint);
  const productArray = product.products;

  return (
    <Container>
      <h1 className="text-2xl font-semibold mt-5">Trending Products</h1>

      <div className="flex mt-6 gap-6">
        {/* Sidebar */}
        <div className="hidden lg:block w-1/4 h-[600px] bg-gray-100 p-4 rounded-md shadow-sm sticky top-20">
          <h2 className="text-xl font-medium mb-4">Categories</h2>
          <ul className="space-y-3">
            <li className="hover:text-blue-600 cursor-pointer">All Products</li>
            <li className="hover:text-blue-600 cursor-pointer">Electronics</li>
            <li className="hover:text-blue-600 cursor-pointer">Fashion</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Home & Garden
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Beauty & Health
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Toys</li>
            <li className="hover:text-blue-600 cursor-pointer">Sports</li>
          </ul>

          <h2 className="text-xl font-medium mt-8 mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Price Range</h3>
              <input type="range" className="w-full mt-2" min="0" max="1000" />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium">Brand</h3>
              <ul className="space-y-2">
                <li className="hover:text-blue-600 cursor-pointer">Brand A</li>
                <li className="hover:text-blue-600 cursor-pointer">Brand B</li>
                <li className="hover:text-blue-600 cursor-pointer">Brand C</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full">
          {productArray.map((item: ProductType) => (
            <ProductCard key={item?.id} product={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
