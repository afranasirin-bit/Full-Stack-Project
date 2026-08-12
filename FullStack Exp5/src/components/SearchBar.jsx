import { FaSearch } from "react-icons/fa";
import "../css/searchbar.css";

function SearchBar() {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search products..."
      />

      <select>

        <option>All Categories</option>

        <option>Electronics</option>

        <option>Vehicles</option>

        <option>Furniture</option>

        <option>Fashion</option>

        <option>Books</option>

        <option>Sports</option>

      </select>

      <button>

        <FaSearch />

      </button>

    </div>
  );
}

export default SearchBar;