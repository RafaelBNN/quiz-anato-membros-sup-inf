import './App.css';
import React from 'react';
import QuizScreen from './QuizScreen';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function HomeScreen(props) {
  const { onCheckboxChange, selectedCheckboxes } = props;
  const navigate = useNavigate();

  const handleQuizButtonClick = () => {
    navigate('/quizscreen');
  };

  return (
    <div className="container">
      <h1>Home Screen</h1>
      <form>
        <div className="option">
          <input type="checkbox" id="option1" name="option1" value="option1" onChange={onCheckboxChange} checked={selectedCheckboxes.includes('option1')} />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="option">
          <input type="checkbox" id="option2" name="option2" value="option2" onChange={onCheckboxChange} checked={selectedCheckboxes.includes('option2')} />
          <label htmlFor="option2">Option 2</label>
        </div>
        <div className="option">
          <input type="checkbox" id="option3" name="option3" value="option3" onChange={onCheckboxChange} checked={selectedCheckboxes.includes('option3')} />
          <label htmlFor="option3">Option 3</label>
        </div>
      </form>
      <button onClick={handleQuizButtonClick}>Start Quiz</button>
    </div>
  );
}

export default HomeScreen;