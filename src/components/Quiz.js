import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Quiz = () => {
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const quizData = [
    {
      question: 'How many people are on Earth?',
      choices: ['5 billion', '6 billion', '7 billion'],
      correctAnswer: '7 billion'
    },
    {
      question: 'How many continents are there?',
      choices: ['5', '6', '7'],
      correctAnswer: '7'
    },
    {
      question: 'Which country has Tokyo as its capital?',
      choices: ['South Korea', 'Japan', 'Taiwan'],
      correctAnswer: 'Japan'
    }
  ];

  const handleAnswerClick = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setCorrectAnswers(prevCount => prevCount + 1);
    } else {
      setIncorrectAnswers(prevCount => prevCount + 1);
    }
    setShowResult(true);
  };

  return (
    <div>
      <h2>Quiz</h2>
      <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
        {quizData.map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            <ul>
              {question.choices.map((choice, choiceIndex) => (
                <li key={choiceIndex}>
                  <button onClick={() => handleAnswerClick(choice, question.correctAnswer)}>
                    {choice}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
      {showResult && (
        <div>
          <h3>Quiz Result</h3>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
