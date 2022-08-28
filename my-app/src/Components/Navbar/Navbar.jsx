import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AppContext";
import "../../Styles/Navbar/Navbar.css";
import Sidebar from "../Navbar/Hamburger";
import Logo from "./logo";
import NavTag from "./navTagComp";

function Navbar() {
  return (
    <>
      <div className="headerBox">
        <Box className="hamBox">
          <Sidebar
            pageWrapClass={"header"}
            outerContainerClass={"categories"}
          />
        </Box>

        {/* Logo here */}
          <Logo />
        
        {/* nav tag */}
          <NavTag/>
      </div>
    </>
  );
}

export default Navbar;
