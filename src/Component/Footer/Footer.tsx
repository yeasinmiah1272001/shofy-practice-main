import { logo } from "@/assets";
import Container from "@/Container/Container"
import Image from "next/image";
import { SocialLink } from "../SocialLink";
import { navigation } from "@/Constant";
import { GoDotFill } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";


export const Footer = () => {
  return (
    <div>
      <Container className="grid grid-cols-4 gap-10 h-[300px] mt-10">
        <div className="col-span-1 space-y-6">
          <Image src={logo} alt="logo" />
          <p>
            We are a team of designers and developers that create high quality
            WordPress
          </p>
          <SocialLink />
        </div>
        <div className="col-span-3 flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold">My Account</h1>
            <div className="space-y-3 mt-6">
              {navigation.map((item) => (
                <p className="flex gap-1 items-center" key={item.title}>
                  {" "}
                  <GoDotFill size={10} /> {item.title}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">My Account</h1>
            <div className="space-y-3 mt-6">
              {navigation.map((item) => (
                <p className="flex gap-1 items-center" key={item.title}>
                  {" "}
                  <GoDotFill size={10} /> {item.title}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Talk to Us</h1>
            <div className="space-y-2">
              <span>Got Questions? Call us</span>
              <h1 className="font-semibold">01910255376</h1>
      
                <h1 className="flex gap-2 items-center">
                  <BsEnvelopeAt /> shofy@suppert.com
                </h1>
                <h1 className="flex gap-2 items-center">
                  <GrLocation /> Dhaka, Bangladesh
                </h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
