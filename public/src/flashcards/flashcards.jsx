import React, { useState, useEffect } from 'react';

export function Flashcards() {
  const [flashcards, setFlashcards] = useState();
  const folderId = localStorage.getItem('currentFolderId');
  const [figures, setFigures] = useState(() => {
    const savedFigures = localStorage.getItem('figures');
    return savedFigures ? JSON.parse(savedFigures) : [
      {id: "1", src: 'spain_flag.png', caption: 'Spanish Flashcards', TSVData: []}
    ];
  });
  const currentFigure = figures.find(figure => figure.id === folderId);
  const [defaultSide, setDefaultSide] = useState(false);
  const [flashSide, setFlashSide] = useState(defaultSide);
  const [currentIndex, setCurrentIndex] = useState(0);

  const finishedSet = () => {
    alert("Congratulations! You reached the end of the set!");
  }

  const handleNextFlashcard = () => {
    if (currentFigure.TSVData.length > 1){
      if (currentIndex === currentFigure.TSVData.length - 1) {
        setCurrentIndex(0);
        finishedSet();
      } else {
        setCurrentIndex(currentIndex + 1);
      }
      setFlashSide(defaultSide);
    }};

  const handlePrevious = () => {
    if (currentFigure.TSVData.length > 1){
      if (currentIndex === 0) {
        setCurrentIndex(currentFigure.TSVData.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
      setFlashSide(defaultSide);
  }};

  const isBase64ImageOrVideo = (str) => {
    return /^data:image\/[a-zA-Z]+;base64,/.test(str) || /^data:video\/[a-zA-Z]+;base64,/.test(str);
  };

  const handleFlashcardClick = () => {
    setFlashSide(!flashSide);
    if (flashSide){
      console.log("front")
    } else {
      console.log("back")
    }
  };

  // const handleFlashcardFront = () => {
  //   null
  // }
  // const handleFlashcardBack = () => {
  //   null
  // }

  // useEffect(() => {
  //   handleFlashcardFront();
  //   handleFlashcardBack();
  // }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem('figures', JSON.stringify(figures));
  }, [figures]);

  return (
    <div className = "body">
      <main className='main_box'>

        <a href="make_flashcards"><button className="simple_button">Edit Flashcards</button></a>

        <div className = "flashcard_button_box">
          {/* <button className = "arrow_button" id = "swipe_left">&lt;</button> */}

          <button className = "simple_button" id = "flashcard_button" onClick= {handleFlashcardClick}>
              {/* <!-- Will add an audio element with sourced audio from an AI reader --> */}
              {(currentFigure && currentFigure.TSVData.length > 0) && 
                <div className = "flash_display" key = {currentIndex}>
                  {isBase64ImageOrVideo(currentFigure.TSVData[currentIndex][+(flashSide)])? 
                  <img className = "flash_IMG" src = {currentFigure.TSVData[currentIndex][+(flashSide)]} /> 
                  : <p>{currentFigure.TSVData[currentIndex][+(flashSide)]}</p>}
                </div>
              }
          </button>

          <button className = "arrow_button" id = "swipe_right" onClick = {handleNextFlashcard}>&gt;</button>
        </div>
        <button className = "simple_button" id = "previous_button" onClick = {handlePrevious}>&lt;Previous</button>
      </main>
    </div>
  );
}