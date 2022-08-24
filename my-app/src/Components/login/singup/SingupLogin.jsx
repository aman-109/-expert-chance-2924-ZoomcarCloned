import { Img } from "@chakra-ui/react";
import "../../../Styles/signup/signup.css";

export default function SignupLogin() {
  return (
    <div className="signupBox">
      <div className="imgBox">
        <Img
          width={"100%"}
          height={"100%"}
          alt="carLogo"
          src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"
        />
      </div>
      <div className="detailsHeading">Enter details to login/sign-up</div>

      <div className="mobileNoDiv">
        <div className="countryCodes">
          <div>
            <Img
              boxSize={"30px"}
              src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png"
              alt="indianFlag"
            />
          </div>
          <div style={{ fontSize: "1.2rem" }}>+91</div>
        </div>
        <span>Enter Mobile Number</span>
      </div>

      <div className="option">Continue with Email ID</div>

      <div className="option_social option">
        <span>Continue via Social</span>
        <Img ml={"1rem"} src="https://www.zoomcar.com/build/62ba375ec1a9fbcbee9e9099181c8d38.svg" alt="fb-login" />
        <Img
          src="https://www.zoomcar.com/build/279de03b0c8ecdb4db56a79da6e775e6.svg"
          alt="google-login"
        />
      </div>
    </div>
  );
}
