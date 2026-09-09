import ProductCard from "./ProductCard";

function FeaturedProducts() {

  const products = [

    {
      id: 1,
      title: "Apple iPhone 13",
      price: "₹38,000",
      condition: "Like New",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=600"
    },

    {
      id: 2,
      title: "HP Pavilion Laptop",
      price: "₹42,000",
      condition: "Excellent",
      location: "Madurai",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
    },

    {
      id: 3,
      title: "Wooden Study Chair",
      price: "₹2,500",
      condition: "Good",
      location: "Trichy",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
    },

    {
      id: 4,
      title: "Yamaha Bike",
      price: "₹95,000",
      condition: "Used",
      location: "Coimbatore",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600"
    },

    {
      id: 5,
      title: "Modern Sofa",
      price: "₹18,000",
      condition: "Excellent",
      location: "Salem",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
    },

    {
      id: 6,
      title: "Nike Running Shoes",
      price: "₹3,500",
      condition: "Like New",
      location: "Erode",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },

    {
      id: 7,
      title: "Wireless Headphones",
      price: "₹2,800",
      condition: "Good",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
    },

    {
      id: 8,
      title: "Study Table",
      price: "₹4,500",
      condition: "Used",
      location: "Madurai",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600"
    }

  ];

  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}

export default FeaturedProducts;