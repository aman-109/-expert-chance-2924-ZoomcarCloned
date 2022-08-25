import Footer from "./Footer/Footer";
import Homepage from "./Homepage/HomePage";
import Navbar from "./Navbar/Navbar";
import "../Styles/Navbar/Navbar.css"

export default function LandingPage() {
  return (
    <div className="bodyBox">
      <div>
        <Navbar />
      </div>
      <div>
        <Homepage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
