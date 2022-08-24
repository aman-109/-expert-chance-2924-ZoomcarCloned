import { Box } from "@chakra-ui/react";
import "../../Styles/Navbar/Navbar.css";
import Sidebar from "../Navbar/Hamburger";

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
        
      </div>
    </>
  );
}

export default Navbar;
