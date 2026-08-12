import "../styles/FeaturedRestaurants.css";
import RestaurantCard from "./RestaurantCard";

const foods = [
  {
    id: 1,
    name: "Chicken Biryani",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d29c?w=700",
    price: 249,
    rating: 4.9,
    time: "25 mins",
  },
  {
    id: 2,
    name: "Garden Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700",
    price: 399,
    rating: 4.8,
    time: "30 mins",
  },
  {
    id: 3,
    name: "Cheese Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
    price: 199,
    rating: 4.7,
    time: "20 mins",
  },
  {
    id: 4,
    name: "White Sauce Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700",
    price: 279,
    rating: 4.8,
    time: "25 mins",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700",
    price: 180,
    rating: 4.9,
    time: "15 mins",
  },
  {
    id: 6,
    name: "Fresh Mojito",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700",
    price: 120,
    rating: 4.8,
    time: "10 mins",
  },
];

function FeaturedRestaurants() {
  return (
    <section className="featured">
      <div className="title">
        <span>MK Garden Kitchen</span>
        <h2>Most Popular Dishes</h2>
        <p>
          Freshly prepared with premium ingredients and delivered hot to your
          doorstep.
        </p>
      </div>

      <div className="foodGrid">
        {foods.map((food) => (
          <RestaurantCard
            key={food.id}
            image={food.image}
            name={food.name}
            price={food.price}
            rating={food.rating}
            time={food.time}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedRestaurants;