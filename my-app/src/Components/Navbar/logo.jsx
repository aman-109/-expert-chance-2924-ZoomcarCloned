import { Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Navbar/logo.css";

export default function Logo() {
  const navigate =useNavigate()

  return (
    <>
      <h1 className="logoBox" onClick={()=>navigate("/")}>
        <Link className="router_logo_link">ZOOMCAR</Link>
      </h1>
    </>
  );
}
