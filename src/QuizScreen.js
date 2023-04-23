import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function QuizScreen(props) {
  const { selectedCheckboxes, clearSelectedCheckboxes, questionDetails, handleFinishQuiz } = props;
  const navigate = useNavigate();

  // An array containing the selected checkbox values
  const selectedValues = selectedCheckboxes.filter(value => value !== '');

  return (
    <div className="container">
      <h1>Quiz Screen</h1>
      {/* Map through the selected values to display the corresponding images and options */}
      {selectedValues.map(value => {
        const { imagePath, options, correctOption } = questionDetails[value];
        return (
          <div key={value}>
            <p>Qual a insercao desse musculo?</p>
            <img src={imagePath} alt={`Image for value ${value}`} style={{ width: '200px', height: 'auto' }}/>
            <ul>
              {options.map(option => (
                <li key={option}>
                  <label>
                    <input type="radio" name={value} value={option} />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <button onClick={() => {
            handleFinishQuiz();
            navigate('/resultscreen');
      }}>Finish</button>
      <button onClick={() => {
          navigate('/homescreen');
          clearSelectedCheckboxes();
      }}>Go Back</button>
    </div>
  );
}

export default QuizScreen;
