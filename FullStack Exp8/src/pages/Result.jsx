import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const answers = location.state?.answers || {};

  return (
    <div className="result-container">
      <div className="result-card">

        <h1>🎉 Thank You!</h1>

        <p>
          Your survey has been submitted successfully.
        </p>

        <h2>Your Responses</h2>

        {Object.keys(answers).length === 0 ? (
          <p>No responses found.</p>
        ) : (
          <div className="answers-list">
            {Object.entries(answers).map(([questionId, answer]) => (
              <div className="answer-box" key={questionId}>
                <strong>Question {questionId}</strong>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => navigate("/")}>
          Take Survey Again
        </button>

      </div>
    </div>
  );
}

export default Result;