import CartProducts from "@/Component/Cart/CartProducts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const session = await getServerSession();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div>
      <CartProducts />
    </div>
  );
};

export default CartPage;
