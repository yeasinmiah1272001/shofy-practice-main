"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// Define the types for the categories and images data
type Categories =
  | "All categories"
  | "Shoes"
  | "Bags"
  | "Electronics"
  | "Gaming";

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
  const [activeTab, setActiveTab] = useState<Categories>("All categories"); // State for active tab

  const categories: Categories[] = [
    "All categories",
    "Shoes",
    "Bags",
    "Electronics",
    "Gaming",
  ];

  // Image data for each category
  const imagesData: Record<Categories, string[]> = {
    "All categories": [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    ],
    Shoes: [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    ],
    Bags: [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    ],
    Electronics: [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    ],
    Gaming: [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8">E-commerce Blog</h1>

      {/* Categories (Tabs) */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(category)} // Set active tab on click
            type="button"
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${
              activeTab === category
                ? "text-blue-700 hover:text-white border-blue-600 bg-white hover:bg-blue-700 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
                : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imagesData[activeTab].map((imgSrc, idx) => (
          <Link href={"/products"} key={idx}>
            <img
              className="h-auto max-w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              src={imgSrc}
              alt={`Gallery image ${idx + 1}`}
            />
          </Link>
        ))}
      </div>

      {/* Social Media Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
