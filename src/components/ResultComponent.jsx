import React from "react";

const ResultComponent = () => {
  return (
    <div className="sqaure">
      <div className="box1">
        <h3>You need more Practice!</h3>
        <h2>Your Score is 20%</h2>
      </div>
      <div>
        <p>Total numbers of questions: 12</p>
        <p>Number of attempted questions: 8 </p>
        <p>Number of correct answers: 6</p>
        <p>Number of wrong answers: 2 </p>
      </div>
      <div className="square2">
        <button>Play Again </button>
        <button>Back To Home</button>
      </div>
    </div>
  );
};

export default ResultComponent;
