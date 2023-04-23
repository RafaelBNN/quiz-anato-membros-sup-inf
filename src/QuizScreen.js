import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuizScreen(props) {
    const { selectedCheckboxes, clearSelectedCheckboxes, questionDetails, handleFinishQuiz } = props;
    const navigate = useNavigate();
  
    // An array containing the selected checkbox values
    const selectedValues = selectedCheckboxes.filter(value => value !== '');
  
    return (
      <div className="container">
        <h1>Quiz Screen</h1>
        {/* Map through the selected values to display the corresponding images and options */}
        {selectedValues.map(selectedValue => {
          const optionDetails = questionDetails[selectedValue];
          return (
            <React.Fragment key={selectedValue}>
              {Object.keys(optionDetails).map(questionKey => {
                const { question, imagePath, options } = optionDetails[questionKey];
                return (
                  <div key={questionKey}>
                    <p>{question}</p>
                    <img src={imagePath} style={{ width: '200px', height: 'auto' }}/>
                    <ul>
                      {options.map(option => (
                        <li key={option}>
                          <label>
                            <input type="radio" name={questionKey} value={option} />
                            {option}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </React.Fragment>
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