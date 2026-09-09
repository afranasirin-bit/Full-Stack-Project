import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div>
          <h2>🌿 MK Garden Kitchen</h2>

          <p>
            Serving delicious food with premium quality,
            fresh ingredients, and unforgettable taste.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Categories</li>
            <li>Offers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +91 9876543210
          </p>

          <p>
            <FaEnvelope /> support@mkgardenkitchen.com
          </p>

          <p>
            <FaMapMarkerAlt /> Chennai, Tamil Nadu
          </p>
        </div>

        <div>
          <h3>Follow Us</h3>

          <div className="socialIcons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2026 MK Garden Kitchen. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;