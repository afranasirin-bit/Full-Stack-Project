import "../css/product.css";

function ProductCard({ product }) {

  return (

    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <div className="product-info">

        <h2>{product.price}</h2>

        <h3>{product.title}</h3>

        <p>{product.condition}</p>

        <span>📍 {product.location}</span>

        <button>
          View Details
        </button>

      </div>

    </div>

  );

}

export default ProductCard;