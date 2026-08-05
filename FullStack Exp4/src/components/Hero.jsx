import "../styles/Hero.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="heroContent">

        <span className="tag">
          🌿 Welcome to MK Garden Kitchen
        </span>

        <h1>
          Experience Premium
          <br />
          Dining at Home
        </h1>

        <p>
          Fresh ingredients, authentic recipes, and
          lightning-fast delivery. Every meal is
          prepared with love and served with perfection.
        </p>

        <div className="heroButtons">

          <button className="primaryBtn">
            Order Now
            <FaArrowRight />
          </button>

          <button className="secondaryBtn">
            View Menu
          </button>

        </div>

      </div>

      <div className="heroImage">

        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900"
          alt="Food"
        />

      </div>

    </section>
  );
}

export default Hero;