import React from "react";
import Card from "./Card";
import "./FinalPage.css";
function FinalPage({
  score,
  setScore,
  topScore,
  setTopScore,
  setShowStartingPage,
  setShowFinalPage,
  username,
  setUsername,
}) {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }
    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setUsername("");
  };
  return (
    <div>
      <Card>
        <h1 className="heading">
          Quiz Completed!
          {username}
        </h1>
        <h3 className="primary_text">Your Final Score is:</h3>
        <h3 className="final_score">{score}</h3>
        <button className="play_again_btn" onClick={handleClick}>
          Play Again
        </button>
      </Card>
    </div>
  );
}

export default FinalPage;
