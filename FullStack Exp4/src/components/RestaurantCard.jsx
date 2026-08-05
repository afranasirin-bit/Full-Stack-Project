import {
  FaStar,
  FaHeart
} from "react-icons/fa";

function RestaurantCard({

  image,

  name,

  price,

  rating,

  time

}) {

  return (

    <div className="foodCard">

      <div className="imageBox">

        <img
          src={image}
          alt={name}
        />

        <button className="favBtn">

          <FaHeart />

        </button>

      </div>

      <div className="foodContent">

        <h3>{name}</h3>

        <p>

          Premium Recipe • Fresh

        </p>

        <div className="foodInfo">

          <span>

            <FaStar />

            {rating}

          </span>

          <span>{time}</span>

        </div>

        <div className="priceBox">

          <h2>

            ₹{price}

          </h2>

          <button>

            Add +

          </button>

        </div>

      </div>

    </div>

  );

}

export default RestaurantCard;