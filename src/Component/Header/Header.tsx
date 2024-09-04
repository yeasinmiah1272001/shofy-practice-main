
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import { Bottomheader } from "./Bottomheader";


const Header = () => {
       return (
        <div className="sticky top-0 z-50 bg-themeWhite">
          <TopHeader/>
          <MiddleHeader/>
          <Bottomheader/>
        </div>
       );
};

export default Header;