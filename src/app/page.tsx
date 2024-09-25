import { Banner } from "@/Component/Pages/Home/Banner";
import ProductList from "@/Component/Pages/Home/ProductList/ProductList";
import SecondBanner from "@/Component/Pages/Home/SecondBanner";
import { getData } from "@/helper";

export default async function Home() {
  const endPoint = `https://dummyjson.com/products`;

  const product = await getData(endPoint);

  return (
    <main>
      <Banner />
      <ProductList product={product} />
      <h1 className="text-red-600">E-Commarce-Shopy</h1>
    </main>
  );
}
