import React from "react";
import Card from "./Card";
import "./Card.css";
import "./StartingPage.css";
function StartingPage({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) {
  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };
  return (
    <div>
      <Card>
        <h1 className="header">Welcome to Tech Quiz</h1>
        <h3 className="primary_text">Please enter your Username</h3>
        <input
          type="text"
          className="username_input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="start_btn" onClick={startGame}>
          Let's Start Quiz
        </button>
        <p className="top_score">
          Top Score : <span>{topScore}</span>
        </p>
      </Card>
    </div>
  );
}

export default StartingPage;
