"use client";

import { addTocart, decressQuantity, incressQuantity } from "@/redux/shopySlice";
import { ProductType } from "../../type";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";

interface Props {
  product: ProductType;
}

const AddToCartBtn = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addTocart(product));
      toast.success(`${product.title} added`)
    }
  };

  const { cart } = useSelector((state) => state.shopy);
  const [existing, setExisting] = useState<ProductType | null>(null);

  useEffect(() => {
    const availableProduct = cart.find((item) => item.id === product.id);
    setExisting(availableProduct || null);
  }, [cart, product.id]);

  const handlePlus = () =>{
    dispatch(incressQuantity(product.id)),
    toast.success(`${product.title} added`)
  }
  const handleMinus = () =>{
    dispatch(decressQuantity(product.id))
    toast("decress success")
  
    
  }

  return (
    <>
      {existing ? (
        <div className="flex items-center space-x-4">
          <button onClick={handleMinus} className="flex items-center bg-transparent border border-skyColor text-black rounded-full px-4 py-1.5 hover:bg-skyColor hover:text-black duration-300">
            <FiMinus />
          </button>
          <span className="text-lg font-semibold">{existing.quentity}</span>
          <button  onClick={handlePlus} className="flex items-center bg-transparent border border-skyColor text-black rounded-full px-4 py-1.5 hover:bg-skyColor hover:text-black duration-300">
            <FiPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-transparent border border-skyColor text-black rounded-full px-6 py-1.5 hover:bg-skyColor hover:text-black duration-300 my-2"
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
