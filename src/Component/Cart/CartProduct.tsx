import Image from "next/image";
import { ProductType } from "../../../type";
import FormatedPrice from "../FormatedPrice";
import AddToCartBtn from "../AddToCartdBtn";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteCount } from "@/redux/shopySlice";
import toast from "react-hot-toast";

interface Props {
  product: ProductType;
}

const CartProduct = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCount(product.id));
    toast.success("deleted success");
  };

  return (
    <div className="shadow-md shadow-black text-black border-gray-500 p-5 my-2 rounded-md flex items-center justify-between ">
      <div className="flex gap-6 items-center">
        <Link
          href={{
            pathname: `/product/${product.id}`,
            query: { id: product.id },
          }}
        >
          <div className="border-2 border-green-600 w-40 h-40 rounded-md">
            <Image
              className="w-40 h-40 hover:scale-110 duration-500 p-2 ml-1 items-center"
              src={product.images[0]}
              alt={product.title} // Improved alt text to be more descriptive
              height={200}
              width={200}
            />
          </div>
        </Link>
        <div className="space-y-1">
          <h1 className="font-semibold text-lg">
            {product.title.slice(0, 20)}
          </h1>
          <p className="text-gray-600">Category: {product.category}</p>
          <p className="text-gray-600">Brand: {product.brand}</p>
          <p className="text-black font-medium">
            <span className="text-black font-medium">
              {" "}
              Price:{" "}
              <FormatedPrice
                className=""
                amount={product.price * product.quantity!}
              />
            </span>
          </p>
          <div>
            {product?.availabilityStatus && (
              <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mt-2">
                In Stock
              </span>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-600 mt-1">
              You are saving{" "}
              <FormatedPrice
                className="text-sm  mt-1 text-red-400"
                amount={
                  product.price *
                  (product.discountPercentage / 100) *
                  product.quantity!
                }
              />{" "}
              on this purchase
            </p>
          </div>
          <div className="mt-2">
            <AddToCartBtn product={product} />
          </div>
        </div>
      </div>
      <div onClick={handleDelete} className="cursor-pointer flex items-center">
        <span className="bg-gray-300 text-black border h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg">
          <IoClose size={20} />
        </span>
      </div>
    </div>
  );
};

export default CartProduct;
