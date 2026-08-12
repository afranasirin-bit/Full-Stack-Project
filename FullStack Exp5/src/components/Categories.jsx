import "../css/categories.css";
import {
  FaLaptop,
  FaCar,
  FaCouch,
  FaTshirt,
  FaBook,
  FaFootballBall,
} from "react-icons/fa";

function Categories() {
  const categories = [
    { icon: <FaLaptop />, title: "Electronics" },
    { icon: <FaCar />, title: "Vehicles" },
    { icon: <FaCouch />, title: "Furniture" },
    { icon: <FaTshirt />, title: "Fashion" },
    { icon: <FaBook />, title: "Books" },
    { icon: <FaFootballBall />, title: "Sports" },
  ];

  return (
    <section className="categories">

      <h2>Browse Categories</h2>

      <div className="category-grid">

        {categories.map((item, index) => (

          <div
            className="category-card"
            key={index}
          >

            <div className="icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;