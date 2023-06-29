import React, { useState } from 'react';

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = [
    // Replace this with your actual array of question objects
    { question: 'Sample question 1' },
    { question: 'Sample question 2' },
    { question: 'Sample question 3' },
  ];

  const currentQuestion = questions[questionIndex];

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div>
      {currentQuestion && (
        <div>
          <h2>Question:</h2>
          <p>{currentQuestion.question}</p>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
