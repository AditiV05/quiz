import React from "react";

const QuizComponent = () => {
  return (
    <div>
      <div className="container">
        <div className="container2">
          <h2 id="text1">Question</h2>
          <p id="text2">1 of 15</p>
          <p id="text3">Which is the only Mammal that can jump?</p>
        </div>
        <div className="container3">
          <div class="box">Dog</div>
          <div class="box">Elephent</div>
          <div class="box">Goat</div>
          <div class="box">Lion</div>
        </div>
        <div className="container4">
          <button>Previous</button>
          <button>Next</button>
          <button>Quit</button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
