import { Link } from "@chakra-ui/react";
import "../../Styles/Navbar/logo.css";

export default function Logo() {
  return (
    <>
      <h1 className="logoBox">
        <Link className="router_logo_link">ZOOMCAR</Link>
      </h1>
    </>
  );
}
