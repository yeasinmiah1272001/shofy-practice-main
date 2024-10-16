import { bannerImageTwo, rightImage } from "@/assets";
import Button from "@/Component/Header/ui/Button";
import Container from "@/Container/Container";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const SecondBanner = () => {
  const secondBanner = {
    _id: 1001,
    priceText: "Starting at $999.90",
    title: "The Best Tablet Collection 2024",
    textOne: "Exclusive Offer",
    offerPrice: "-40%",
    textTwo: "Off This Week",
    buttonLink: "/products",
    image: bannerImageTwo,
  };

  return (
    <Container className="relative py-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/path/to/your/background/image.jpg')` }}
      ></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-7">
        {/* Left Side */}
        <div className="col-span-2 flex flex-col lg:flex-row items-center gap-8 bg-white p-8 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="space-y-4">
            <p className="text-red-500 font-semibold text-lg">
              {secondBanner.textOne}
            </p>
            <h1 className="text-3xl font-bold text-gray-800">
              {secondBanner.title}
            </h1>
            <p className="text-lg font-semibold text-gray-700">
              {secondBanner.priceText}
            </p>
            <span className="text-red-600 font-bold text-xl">
              {secondBanner.offerPrice}
            </span>
            <p className="font-semibold text-gray-700">
              {secondBanner.textTwo}
            </p>
          </div>
          {/* Right Image */}
          <div className="flex-shrink-0">
            <Image
              className="w-52 rounded-md shadow-md"
              src={secondBanner.image}
              alt="Tablet Collection Banner"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-1 flex flex-col items-center bg-acquaColor p-5 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-xl font-bold text-gray-800">
            Wireless Headphones
          </h1>
          <p className="font-semibold text-red-500">Sale 40% Off</p>

          <div className="mt-4">
            <Image
              className="w-full h-auto rounded-md"
              src={rightImage}
              alt="Wireless Headphone"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SecondBanner;
