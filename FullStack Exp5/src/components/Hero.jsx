import { FaSearch } from "react-icons/fa";
import "../css/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Buy & Sell Used Products</h1>

        <p>
          Discover amazing deals on Electronics, Furniture,
          Fashion, Vehicles and more.
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
          />

          <button>
            <FaSearch />
          </button>
        </div>

        <div className="hero-buttons">
          <button className="browse-btn">
            Browse Products
          </button>

          <button className="sell-btn">
            Sell Product
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;