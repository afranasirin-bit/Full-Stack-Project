import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([
    "Hello Everyone 👋"
  ]);

  const addPost = () => {
    if (text.trim() === "") {
      alert("Please enter a post!");
      return;
    }

    setPosts([text, ...posts]);
    setText("");
  };

  return (
    <div className="container">
      <h1>Micro Blogging App</h1>

      <textarea
        placeholder="What's happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button onClick={addPost}>Post</button>

      <h2>Recent Posts</h2>

      {posts.map((post, index) => (
        <div className="post" key={index}>
          <h3>@Afranasirin</h3>
          <p>{post}</p>
        </div>
      ))}
    </div>
  );
}

export default App;