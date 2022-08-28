import { Link, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AppContext";
import "../../Styles/Navbar/navTag.css"

export default function NavTag() {
  const navigate = useNavigate()
  const {auth} = useContext(AuthContext)
  // console.log(auth)
  return (
    <>
      <nav>
        <ul>
          <li className="host-link">
            <Link
            className="logoHost_Link"
              isExternal
              href="https://www.zoomcar.com/in/host/en?auth_required=true&amp;utm_sub_source=dweb_ingress&amp;platform=web"
            >
              <Text as={"span"}>Become a Host</Text>
            </Link>
          </li>
          <li>
            <Link href="/zoomcar-mobility-services">ZMS</Link>
          </li>
          <li>
            <Link onClick={()=>navigate("/login")} class="">
              Login/Signup
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
