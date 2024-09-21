"use client";
import React, { useEffect, useState } from "react";
import { ProductType } from "../../../type";
import FormatedPrice from "../FormatedPrice";
import Button from "../Header/ui/Button";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

interface Props {
  cart: ProductType[];
}

const CartSummary = ({ cart }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountAmt, setDiscountAmt] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    let amt = 0;
    let discount = 0;
    cart.map((item) => {
      amt += item.price * (item.quantity || 1);
      discount += ((item.price * item.discountPercentage) / 100) * (item.quantity || 1);
    });
    setTotalPrice(amt - discount);
    setDiscountAmt(discount);
  }, [cart]);

  // payment
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: cart,
        email: session?.user?.email,
        
      }),
      
    });

    const data = await response.json();
    if (response.ok) {
      stripe?.redirectToCheckout({ sessionId: data.id });
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
    console.log('data',data);
    
  };

  return (
    <div className="bg-gray-200 h-72 p-6 rounded-md">
      <h1 className="text-2xl text-black font-semibold">Cart Summary</h1>

      <div className="mt-3 px-2 space-y-7">
        <div className="flex justify-between border-b border-black">
          <h1 className="font-medium text-black">Sub Total</h1>
          <h1 className="text-black font-medium">
            <FormatedPrice className="" amount={totalPrice + discountAmt} />
          </h1>
        </div>
        <div className="flex justify-between border-b border-black">
          <h1 className="font-medium text-black">Discount</h1>
          <h1 className="text-black font-medium">
            <FormatedPrice className="" amount={discountAmt} />
          </h1>
        </div>
        <div className="flex justify-between border-b border-black mb-2">
          <h1 className="font-medium text-black">Payable Amount</h1>
          <h1 className="text-black font-bold">
            <FormatedPrice className="" amount={totalPrice} />
          </h1>
        </div>
        <div onClick={handleCheckout}>
          <Button className="w-full rounded-md">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
