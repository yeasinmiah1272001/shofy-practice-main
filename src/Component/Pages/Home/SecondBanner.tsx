import { bannerImageTwo, rightImage } from "@/assets";
import Button from "@/Component/Header/ui/Button";
import Container from "@/Container/Container";
import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";


const getData = async() =>{
  const response = await fetch("http://localhost:3000/api/secondbanner",{

    method:"GET",
    headers:{
      "Content-Type" : "aplication/json"
    }
  })
  return response.json()
}




const SecondBanner = async() => {
  const {secondbanner} =await getData()
  console.log(secondbanner.priceText)
  
  return (
    <Container className="grid grid-cols-3 py-6 gap-7">
      {/* left-side */}
      <div className="col-span-2 flex items-center gap-52 bg-bannerColor2 p-8 rounded-md">
        <div className="space-y-4">
          <p>Sell 20% of all store</p>
          <h1 className="text-xl font-semibold">
            SmartPhone <br /> blog vivo s19 pro max
          </h1>
          <Button className="bg-bannerColor2 text-black flex items-center gap-2 w-32 hover:text-cyan-500 duration-300">
            Shop Now <FaArrowRightLong />{" "}
          </Button>
        </div>
        {/* right-side */}
        <div>
          <Image className="w-52" src={bannerImageTwo} alt="bannerimg" />
        </div>
      </div>

      <div className="col-span-1 flex gap-4 items-center bg-acquaColor">

      <div className="space-y-4 p-5">
      <h1 className="text-xl font-semibold">
            Wareless HeadPhone
          </h1>
          <p className="font-semibold">Sell 40% of </p>
          
          <Button className="bg-acquaColor  text-black flex items-center gap-2 w-32 hover:text-cyan-500 duration-700">
            Shop Now <FaArrowRightLong />{" "}
          </Button>
        </div>
        <div>
        <Image className="w-96" src={rightImage} alt="rightImage"/>
        </div>
      </div>
    </Container>
  );
};

export default SecondBanner ;
