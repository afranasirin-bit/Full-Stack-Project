import "../styles/Navbar.css";
import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logoIcon">🌿</span>
        <div>
          <h2>MK Garden Kitchen</h2>
          <p>Fresh • Premium • Delicious</p>
        </div>
      </div>

      <ul className="navLinks">
        <li>Home</li>
        <li>Menu</li>
        <li>Categories</li>
        <li>Offers</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>

      <div className="navRight">

        <div className="searchBox">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Food..."
          />
        </div>

        <button className="iconBtn">
          <FaShoppingCart />
        </button>

        <button className="iconBtn">
          <FaUserCircle />
        </button>

      </div>

    </nav>
  );
}

export default Navbar;