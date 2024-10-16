"use client";
import Container from "@/Container/Container";
import { ProductType } from "../../../../../type";
import ProductCard from "../ProductCard/ProductCard";

interface props {
  product: {
    products: [];
  };
}

const ProductList = ({ product }: props) => {
  // console.log("thsis is product list page", product.products)

  const productArray = product.products;

  return (
    <Container>
      <h1 className="text-2xl font-semibold mt-5">Tranding Product</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8 mt-6">
        {productArray.slice(0, 10).map((item: ProductType) => (
          <ProductCard key={item?.id} product={item} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
