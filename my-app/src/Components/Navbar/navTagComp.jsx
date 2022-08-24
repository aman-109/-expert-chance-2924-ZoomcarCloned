import { Link, Text } from "@chakra-ui/react";
import "../../Styles/Navbar/navTag.css"

export default function NavTag() {
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
            <Link href="/login" class="">
              Login/Signup
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
