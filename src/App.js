import './App.css';
import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

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
    'option1': { // musculos toraco-apendiculares anteriores
      'option1-q1': {
        question: 'Qual dessas nao eh uma funcao do musculo pectoral maior?',
        imagePath: '/images/toraco_apendiculares_anteriores/pectoralis_major_muscle.jpeg',
        options: ['Aducao do umero', 'Flexao do braco', 'Protracao da escapula'],
        correctOption: 'Protracao da escapula',
      },
      'option1-q2': {
        question: 'Qual eh a insercao do musculo abaixo?',
        imagePath: '/images/toraco_apendiculares_anteriores/pectoralis_minor_muscle.jpeg',
        options: ['Processo coracoide da escapula', 'Face inferior do terço médio da clavícula', 'Crista do tuberculo maior do umero'],
        correctOption: 'Processo coracoide da escapula',
      },
      'option1-q3': {
        question: 'Qual eh a insercao do musculo abaixo?',
        imagePath: '/images/toraco_apendiculares_anteriores/musculus_subclavius_02.jpeg',
        options: ['Option P', 'Option Q', 'Face inferior do terço médio da clavícula'],
        correctOption: 'Face inferior do terço médio da clavícula',
      },
      'option1-q4': {
        question: 'Qual eh a origem do musculo abaixo?',
        imagePath: '/images/toraco_apendiculares_anteriores/musculus_serratus_anterior.jpeg',
        options: ['Faces externas e laterais da I a VI ou VII costelas', 'Faces externas e laterais da I a VII ou IX costelas', 'Faces externas e laterais da I a VIII ou IX costelas'],
        correctOption: 'Faces externas e laterais da I a VIII ou IX costelas',
      },
      // Add more mappings as needed
    },
    'option2': { // musculos toraco-apendiculares posteriores
      'option2-q1': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/toraco_apendiculares_posteriores/latissimus_dorsi_1.jpeg',
        options: ['Option A', 'Option B', 'Option C'],
        correctOption: 'Option A',
      },
      'option2-q2': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/toraco_apendiculares_posteriores/rhomboid_major.jpeg',
        options: ['Option X', 'Option Y', 'Option Z'],
        correctOption: 'Option Y',
      },
      'option2-q3': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/toraco_apendiculares_posteriores/rhomboid_minor-1.jpeg',
        options: ['Option P', 'Option Q', 'Option R'],
        correctOption: 'Option R',
      },
      'option2-q4': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/toraco_apendiculares_posteriores/trapezius_2.jpeg',
        options: ['Option P', 'Option Q', 'Option R'],
        correctOption: 'Option R',
      },
      'option2-q5': {
        question: 'Qual eh a origem do musculo abaixo?',
        imagePath: '/images/toraco_apendiculares_anteriores/musculus_levator_scapulae_1.jpeg',
        options: ['Tubérculos posteriores dos processos transversos das vértebras, C I a C III', 'Tubérculos posteriores dos processos transversos das vértebras, C I e C II', 'Tubérculos posteriores dos processos transversos das vértebras, C I a C IV'],
        correctOption: 'Tubérculos posteriores dos processos transversos das vértebras, C I a C IV',
      },
      // Add more mappings as needed
    },
    'option3': { // musculos escapulo-umerais
      'option3-q1': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/escapulo_umerais/deltoideus_2.jpeg',
        options: ['Option A', 'Option B', 'Option C'],
        correctOption: 'Option A',
      },
      'option3-q2': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/escapulo_umerais/supraspinatus_1.jpeg',
        options: ['Option X', 'Option Y', 'Option Z'],
        correctOption: 'Option Y',
      },
      'option3-q3': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/escapulo_umerais/pasted_image_0.jpeg',
        options: ['Option P', 'Option Q', 'Option R'],
        correctOption: 'Option R',
      },
      'option3-q4': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/escapulo_umerais/M._subscapularis.jpeg',
        options: ['Option A', 'Option B', 'Option C'],
        correctOption: 'Option A',
      },
      'option3-q5': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/escapulo_umerais/M._teres_major.jpeg',
        options: ['Option X', 'Option Y', 'Option Z'],
        correctOption: 'Option Y',
      },
      'option3-q6': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/escapulo_umerais/teres_minor_2.jpeg',
        options: ['Option P', 'Option Q', 'Option R'],
        correctOption: 'Option R',
      },
      // Add more mappings as needed
    },
    'option4': { // musculos do braco
      'option4-q1': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/braco/biceps_intro.jpeg',
        options: ['Option A', 'Option B', 'Option C'],
        correctOption: 'Option A',
      },
      'option4-q2': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/braco/brachialis_1.jpeg',
        options: ['Option X', 'Option Y', 'Option Z'],
        correctOption: 'Option Y',
      },
      'option4-q3': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/braco/M._coracobrachialis_1.jpeg',
        options: ['Option P', 'Option Q', 'Option R'],
        correctOption: 'Option R',
      },
      'option4-q4': {
        question: 'Qual eh a origem e insercao do musculo abaixo?',
        imagePath: '/images/braco/M.M._triceps_brachii.jpeg',
        options: ['Option P', 'Option Q', 'Option R'],
        correctOption: 'Option R',
      },
      // Add more mappings as needed
    },
    'option5': { // antebraco anterior e posterior
      'option5-q1': {
        question: 'Qual eh a origem do musculo abaixo?',
        imagePath: '/images/antebraco_anterior/flexor_carpi_ulnaris_2.jpeg',
        options: [
            'epicôndilo medial do úmero, olécrano e parte posterior da ulna',
            'epicôndilo lateral do úmerom olécrano e parte anterior da ulna',
            'epicôndilo medial do úmero e olécrano'
          ],
        correctOption: 'epicôndilo medial do úmero, olécrano e parte posterior da ulna',
      },
      'option5-q2': {
        question: 'Qual eh a insercao do musculo abaixo?',
        imagePath: '/images/antebraco_anterior/palmaris_longus_1.jpeg',
        options: ['Base do II e III metacarpal', 'Metade lateral da diáfise do rádio', 'Aponeurose palmar'],
        correctOption: 'Aponeurose palmar',
      },
      'option5-q3': {
        question: 'Qual eh a insercao do musculo abaixo?',
        imagePath: '/images/antebraco_anterior/flexor_carpi_radialis_1.jpeg',
        options: ['Base do II e III metacarpal', 'Metade lateral da diáfise do rádio', 'Aponeurose palmar'],
        correctOption: 'Base do II e III metacarpal',
      },
      'option5-q4': {
        question: 'Qual eh a insercao do musculo abaixo?',
        imagePath: '/images/antebraco_anterior/pronator_teres_1.jpeg',
        options: ['Base do II e III metacarpal', 'Metade lateral da diáfise do rádio', 'Aponeurose palmar'],
        correctOption: 'Metade lateral da diáfise do rádio',
      },
      'option5-q5': {
        question: 'Qual eh a insercao do musculo abaixo?',
        imagePath: '/images/antebraco_anterior/Flexor_digitorum_superficialis_2.jpeg',
        options: ['Face palmar dos dedos II ao V (nas flanges médias)', 'Faces palmares das falanges distais do II ao V dedos', 'Face anterior distal do rádio'],
        correctOption: 'Face palmar dos dedos II ao V (nas flanges médias)',
      },
      'option5-q6': {
        question: 'Qual eh a insercao do musculo abaixo?',
        imagePath: '/images/antebraco_anterior/flexor_digitorum_profundus_1.jpeg',
        options: ['Face palmar dos dedos II ao V (nas flanges médias)', 'Faces palmares das falanges distais do II ao V dedos', 'Face anterior distal do rádio'],
        correctOption: 'Faces palmares das falanges distais do II ao V dedos',
      },
      'option5-q7': {
        question: 'Qual eh a origem do musculo abaixo?',
        imagePath: '/images/antebraco_anterior/flexor_pollicis_longus.jpeg',
        options: ['Face anterior do rádio e metade radial da membrana interóssea', 'Face anterior distal da ulna', 'Face medial e anterior da ulna e metade ânteromedial da membrana interóssea'],
        correctOption: 'Face anterior do rádio e metade radial da membrana interóssea',
      },
      'option5-q8': {
        question: 'Qual eh a origem do musculo abaixo?',
        imagePath: '/images/antebraco_anterior/pronator_quadratus_1_copy.jpeg',
        options: ['Face anterior distal da ulna', 'Face anterior distal do radio', 'Face posterior distal da ulna'],
        correctOption: 'Face anterior distal da ulna',
      },
      'option5-q9': {
        question: 'Qual eh a origem do musculo abaixo?',
        imagePath: '/images/antebraco_posterior/brachioradialis_1__1_.jpeg',
        options: ['Crista supraepicondilar lateral do úmero e septo intermuscular do braço', 'Crista supraepicondilar lateral da ulna e septo intermuscular do braço', 'Crista infraepicondilar lateral do úmero e septo intermuscular do braço'],
        correctOption: 'Crista supraepicondilar lateral do úmero e septo intermuscular do braço',
      },
      'option5-q11': {
        question: 'Qual eh a insercao do musculo abaixo?',
        imagePath: '/images/antebraco_posterior/extensor_carpi_radialis_longus_1.jpeg',
        options: ['Base do metacarpal II', 'Base dos metacarpais II e III', 'Base do metacarpal III'],
        correctOption: 'Base do metacarpal II',
      },
      'option5-q12': {
        question: 'Qual eh a origem do musculo abaixo?',
        imagePath: '/images/antebraco_posterior/Captura de tela 2023-04-23 120623.jpeg',
        options: ['Crista supraepicondilar lateral do úmero e septo intermuscular do braço', 'Epicôndilo medial do úmero', 'Epicôndilo lateral do úmero'],
        correctOption: 'Epicôndilo lateral do úmero',
      },
      'option5-q13': {
        question: 'Qual eh a insercao do musculo abaixo?',
        imagePath: '/images/antebraco_posterior/extensor_carpi_ulnaris_2.jpeg',
        options: ['Base do metacarpal IV', 'Base do metacarpal V', 'Base do metacarpal IV e V'],
        correctOption: 'Base do metacarpal V',
      },
      'option5-q14': {
        question: 'Qual eh a e insercao do musculo abaixo?',
        imagePath: '/images/antebraco_posterior/anconeus.jpeg',
        options: ['Face medial do olécrano e parte superior e posterior da ulna', 'Face lateral do olécrano e parte superior', 'Face lateral do olécrano e parte superior e posterior da ulna'],
        correctOption: 'Face lateral do olécrano e parte superior e posterior da ulna',
      },
      // Add more mappings as needed
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