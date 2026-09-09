import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <div className="home-card">
          <h1>📝 Online Survey Application</h1>

          <p className="subtitle">
            Welcome! Share your opinions by answering five randomly selected
            questions.
          </p>

          <div className="instructions">
            <h3>Survey Instructions</h3>

            <ul>
              <li>✔️ A total of 5 random questions will be displayed.</li>
              <li>✔️ Answer every question.</li>
              <li>✔️ Use Next and Previous buttons to navigate.</li>
              <li>✔️ Submit after completing all questions.</li>
              <li>✔️ Your responses are used only for learning purposes.</li>
            </ul>
          </div>

          <Link to="/survey">
            <button className="start-btn">
              Start Survey →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;