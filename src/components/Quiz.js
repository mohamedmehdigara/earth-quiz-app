import React, { useState } from 'react';

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const questions = [
    {
      question: 'How many people are on Earth?',
      choices: ['5 billions', '6 billions', '7 billions'],
      correctAnswer: '7 billions',
    },
    {
      question: 'How many continents are there?',
      choices: ['3', '4', '7'],
      correctAnswer: '7',
    },
    {
      question: 'Which country has Tokyo as its capital?',
      choices: ['South Korea', 'Japan', 'Taiwan'],
      correctAnswer: 'Japan',
    },
  ];

  const currentQuestion = questions[questionIndex];

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setShowMessage(false);
    setMessage('');
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setShowMessage(true);
      setMessage('Correct!');
    } else {
      setShowMessage(true);
      setMessage('Incorrect!');
    }
  };

  return (
    <div>
      {currentQuestion && (
        <div>
          <h2>Question:</h2>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.choices.map((choice, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(choice)}>{choice}</button>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next Question</button>
          {showMessage && <p>{message}</p>}
        </div>
      )}
    </div>
  );
};

export default Quiz;
