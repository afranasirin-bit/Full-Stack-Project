import "../css/productdetails.css";

function ProductDetails() {
  return (
    <div className="details-container">

      <img
        src="https://picsum.photos/500/350"
        alt="Product"
      />

      <div className="details-info">

        <h1>iPhone 13</h1>

        <h2>₹38,000</h2>

        <p>
          Excellent condition.
          128GB Storage.
          Battery Health 91%.
        </p>

        <h4>📍 Chennai</h4>

        <button>Contact Seller</button>

      </div>

    </div>
  );
}

export default ProductDetails;