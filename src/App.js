import './App.css';
import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function App() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((value) => value !== checkboxValue));
    }
  };

  const questionDetails = {
    'option1': {
      imagePath: '/images/gluteus/gluteus_maximus_02.jpeg',
      options: ['Option A', 'Option B', 'Option C'],
      correctOption: 'Option A',
    },
    'option2': {
      imagePath: '/images/gluteus/gluteus_med.jpeg',
      options: ['Option X', 'Option Y', 'Option Z'],
      correctOption: 'Option Y',
    },
    'option3': {
      imagePath: '/images/gluteus/gluteus_min.jpeg',
      options: ['Option P', 'Option Q', 'Option R'],
      correctOption: 'Option R',
    },
    // Add more mappings as needed
  };

  const handleHomeButtonClick = () => {
    setSelectedCheckboxes([]);
    navigate('/homescreen');
  };
  
  const handleFinishQuiz = () => {
    let count = 0;
    selectedCheckboxes.forEach(value => {
      const question = questionDetails[value];
      const selectedOption = document.querySelector(`input[name=${value}]:checked`)?.value;
      if (selectedOption === question.correctOption) {
        count++;
      }
    });
    setCorrectAnswers(count);
  };

  const clearSelectedCheckboxes = () => {
    setSelectedCheckboxes([]);
    setCorrectAnswers(0);
  };

  const showHomeButton = location.pathname !== '/homescreen' && location.pathname !== '/quizscreen';

  return (
    <div className="container">
      {showHomeButton && <button onClick={handleHomeButtonClick}>Home</button>}
      <Routes>
          <Route path="/homescreen" element={<HomeScreen onCheckboxChange={handleCheckboxChange} selectedCheckboxes={selectedCheckboxes} />} />
          <Route path="/quizscreen" element={<QuizScreen selectedCheckboxes={selectedCheckboxes} clearSelectedCheckboxes={clearSelectedCheckboxes} questionDetails={questionDetails} handleFinishQuiz={handleFinishQuiz} />} />
          <Route path="/resultscreen" element={<ResultScreen correctAnswers={correctAnswers} clearSelectedCheckboxes={clearSelectedCheckboxes} />} />
        </Routes>
    </div>
  );
}

export default App;