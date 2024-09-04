import Container from "@/Container/Container";
import { FaTruck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


const TopHeader = () => {
  return (
    <div className="bg-black text-white">
      <Container className="flex justify-between items-center py-2">
        <p className="flex item-center text-sm gap-2">
          <FaTruck className="text-2xl text-[#FFB342]" />
          FREE Express Shopping o orders $570+
        </p>
        <div className="flex gap-3 item-center text-sm">
          <p className="headerTop">
            English
            <IoIosArrowDown className="text-xl" />
          </p>
          <p className="headerTop">
            USD
            <IoIosArrowDown className="text-xl " />
          </p>
          <p className="headerTop">
            Setting
            <IoIosArrowDown className="text-xl" />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
