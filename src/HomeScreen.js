import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeScreen(props) {
  const { onCheckboxChange, selectedCheckboxes } = props;
  const navigate = useNavigate();

  const handleQuizButtonClick = () => {
    navigate('/quizscreen');
  };

  return (
    <div className="container">
      <h1>Quiz Anatomia Músculos Membros Inferiores e Superiores</h1>
      <form>
        <div className="option">
          <input type="checkbox" id="option1" name="option1" value="option1" onChange={onCheckboxChange} checked={selectedCheckboxes.includes('option1')} />
          <label htmlFor="option1">MÚSCULOS TÓRACO-APENDICULARES ANTERIORES (PEITORAIS)</label>
        </div>
        <div className="option">
          <input type="checkbox" id="option2" name="option2" value="option2" onChange={onCheckboxChange} checked={selectedCheckboxes.includes('option2')} />
          <label htmlFor="option2">MÚSCULOS TÓRACO-APENDICULARES POSTERIORES</label>
        </div>
        <div className="option">
          <input type="checkbox" id="option3" name="option3" value="option3" onChange={onCheckboxChange} checked={selectedCheckboxes.includes('option3')} />
          <label htmlFor="option3">MÚSCULOS ESCÁPULO-UMERAIS</label>
        </div>
        <div className="option">
          <input type="checkbox" id="option4" name="option4" value="option4" onChange={onCheckboxChange} checked={selectedCheckboxes.includes('option4')} />
          <label htmlFor="option4">MÚSCULOS DO BRAÇO</label>
        </div>
        <div className="option">
          <input type="checkbox" id="option5" name="option5" value="option5" onChange={onCheckboxChange} checked={selectedCheckboxes.includes('option5')} />
          <label htmlFor="option5">MÚSCULOS DO ANTEBRAÇO</label>
        </div>
      </form>
      <button onClick={handleQuizButtonClick}>Start Quiz</button>
    </div>
  );
}

export default HomeScreen;