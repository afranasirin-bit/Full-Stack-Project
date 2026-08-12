import "../css/addproduct.css";

function AddProduct() {
  return (
    <div className="add-product-container">

      <div className="add-product-card">

        <h1>Sell Your Product</h1>

        <input
          type="text"
          placeholder="Product Name"
        />

        <input
          type="number"
          placeholder="Price"
        />

        <select>
          <option>Select Category</option>
          <option>Electronics</option>
          <option>Vehicles</option>
          <option>Furniture</option>
          <option>Fashion</option>
          <option>Books</option>
        </select>

        <input
          type="text"
          placeholder="Location"
        />

        <textarea
          rows="5"
          placeholder="Product Description"
        ></textarea>

        <button>Add Product</button>

      </div>

    </div>
  );
}

export default AddProduct;