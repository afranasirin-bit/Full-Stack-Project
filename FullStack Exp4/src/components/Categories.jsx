import "../styles/Categories.css";

const categories = [
  {
    id: 1,
    name: "Pizza",
    emoji: "🍕"
  },
  {
    id: 2,
    name: "Burger",
    emoji: "🍔"
  },
  {
    id: 3,
    name: "Biryani",
    emoji: "🍗"
  },
  {
    id: 4,
    name: "Dessert",
    emoji: "🍰"
  },
  {
    id: 5,
    name: "Drinks",
    emoji: "🥤"
  },
  {
    id: 6,
    name: "Chinese",
    emoji: "🍜"
  }
];

function Categories() {

  return (

    <section className="categories">

      <h2>
        Browse Categories
      </h2>

      <div className="categoryGrid">

        {categories.map((item) => (

          <div
            key={item.id}
            className="categoryCard"
          >

            <h1>{item.emoji}</h1>

            <p>{item.name}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Categories;