"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./Pages/Home/ProductCard/ProductCard";
import { ProductType } from "../../type";
import { getData } from "@/helper";

const ProductPageData = () => {
  const [allProduct, setAllProduct] = useState<ProductType[]>([]);
  const [filterProduct, setFilterProduct] = useState<ProductType[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const endPoint = `https://dummyjson.com/products`;

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getData(endPoint);
      const allData = product.products;
      setAllProduct(allData);
      setFilterProduct(allData);
    };
    fetchProduct();
  }, []);

  const handleCategoryClick = (category: string) => {
    if (category === "All Products") {
      filterByPrice(allProduct);
    } else {
      const filtered = allProduct.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      filterByPrice(filtered);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMaxPrice(value);
    filterByPrice(allProduct);
  };

  const filterByPrice = (products: ProductType[]) => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilterProduct(filtered);
  };

  return (
    <div className="flex mt-6 gap-6">
      {/* Sidebar */}
      <div className="hidden lg:block w-1/4 h-[600px] bg-gray-100 p-4 rounded-md shadow-sm sticky top-20">
        <h2 className="text-xl font-medium mb-4">Categories</h2>
        <ul className="space-y-3">
          <li
            onClick={() => handleCategoryClick("All Products")}
            className="hover:text-blue-600 cursor-pointer"
          >
            All Products
          </li>
          <li
            onClick={() => handleCategoryClick("beauty")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Beauty
          </li>
          <li
            onClick={() => handleCategoryClick("fragrances")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Fragrances
          </li>
          <li
            onClick={() => handleCategoryClick("furniture")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Furniture
          </li>
          <li
            onClick={() => handleCategoryClick("groceries")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Groceries
          </li>
        </ul>

        <h2 className="text-xl font-medium mt-8 mb-4">Filters</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Price Range</h3>
            <input
              type="range"
              className="w-full mt-2"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={handlePriceChange}
            />
            <div className="flex justify-between text-sm">
              <span>${minPrice}</span>
              <span>${maxPrice}+</span>
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
        {filterProduct.map((item: ProductType) => (
          <ProductCard key={item?.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductPageData;
