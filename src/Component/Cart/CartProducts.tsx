"use client";

import Container from "@/Container/Container";
import { useSelector } from "react-redux";
import Button from "../Header/ui/Button";
import CartProduct from "./CartProduct";
import { ProductType, StateType } from "../../../type";
import CartSummary from "./CartSummary";
interface props {
  product: {
    products: [];
  };
}

const CartProducts = () => {
  const { cart } = useSelector((state:StateType) => state.shopy);

  return (
    <Container className="mt-3">
      <section>
        {cart.length > 0 ? (
          <section className=" ">
            <p className="text-green-500 text-xl font-semibold">Products Available</p>
            <section className="grid lg:grid-cols-3 gap-5 ">
              {/* left */}
              <div className=" col-span-2">
                {cart.map((item: ProductType) => (
                  <CartProduct key={item.id} product={item} />
                ))}
              </div>
              {/* right */}
              <div className=" col-span-1 h-30">
                <CartSummary cart={cart}/>
              </div>
            </section>
          </section>
        ) : (
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-10">
            <p className="text-3xl font-bold text-gray-700">
              Oops! Product Not Available
            </p>
            <p className="text-lg text-gray-500">
              It seems your cart is empty. Lets get you back to the store!
            </p>
            <Button href={"/"} className="rounded-md">
              Back home
            </Button>
          </div>
        )}
      </section>
    </Container>
  );
};

export default CartProducts;
