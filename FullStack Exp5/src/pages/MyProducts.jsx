import "../css/myproducts.css";

function MyProducts() {
  const products = [
    {
      id: 1,
      name: "iPhone 13",
      price: "₹38,000",
      status: "Available",
    },
    {
      id: 2,
      name: "HP Laptop",
      price: "₹42,000",
      status: "Sold",
    },
    {
      id: 3,
      name: "Study Table",
      price: "₹3,000",
      status: "Available",
    },
  ];

  return (
    <div className="my-products">
      <h1>My Listings</h1>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyProducts;