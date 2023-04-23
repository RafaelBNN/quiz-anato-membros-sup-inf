import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultScreen(props) {

    const { correctAnswers, clearSelectedCheckboxes } = props;
    const navigate = useNavigate();

    return(
        <div className="container">
            <h1>Result Screen</h1>
            <p>You got {correctAnswers} correct answers!</p>
            <p>(te airbisp)</p>
            <button onClick={() => {
                navigate('/homescreen');
                clearSelectedCheckboxes();
            }}>Retake</button>
        </div>
    )

}

export default ResultScreen;