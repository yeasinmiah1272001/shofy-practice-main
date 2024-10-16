import Container from "@/Container/Container";
import ProductPageData from "@/Component/ProductPageData";

const ProductsPage = () => {
  // console.log("all", productArray);

  return (
    <Container>
      <h1 className="text-2xl font-semibold mt-5">Trending Products</h1>

      <ProductPageData />
    </Container>
  );
};

export default ProductsPage;
