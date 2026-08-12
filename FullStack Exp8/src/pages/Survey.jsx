import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import "../styles/Survey.css";

function Survey() {
  const navigate = useNavigate();

  const [randomQuestions, setRandomQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setRandomQuestions(shuffledQuestions.slice(0, 5));
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    const current = randomQuestions[currentQuestion];

    if (!answers[current.id]) {
      alert("Please select an answer before proceeding.");
      return;
    }

    if (currentQuestion < randomQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const current = randomQuestions[currentQuestion];

    if (!answers[current.id]) {
      alert("Please answer the last question.");
      return;
    }

    alert("Survey Submitted Successfully!");

    navigate("/result", {
      state: {
        answers,
      },
    });
  };

  if (randomQuestions.length === 0) {
    return (
      <div className="survey-container">
        <h2>Loading Questions...</h2>
      </div>
    );
  }

  const question = randomQuestions[currentQuestion];

  return (
    <div className="survey-container">
      <div className="survey-card">

        <h2>Online Survey</h2>

        <p className="progress">
          Question {currentQuestion + 1} of {randomQuestions.length}
        </p>

        <div className="question-box">
          <h3>{question.question}</h3>

          {question.options.map((option, index) => (
            <div className="option" key={index}>
              <input
                type="radio"
                id={`${question.id}-${index}`}
                name={`question-${question.id}`}
                value={option}
                checked={answers[question.id] === option}
                onChange={() =>
                  handleAnswerChange(question.id, option)
                }
              />

              <label htmlFor={`${question.id}-${index}`}>
                {option}
              </label>
            </div>
          ))}
        </div>

        <div className="buttons">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion === randomQuestions.length - 1 ? (
            <button
              className="submit-btn"
              onClick={handleSubmit}
            >
              Submit Survey
            </button>
          ) : (
            <button onClick={handleNext}>
              Next
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Survey;