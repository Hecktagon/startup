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
  const [defaultSide, setDefaultSide] = useState(true);
  const [flashSide, setFlashSide] = useState(defaultSide);

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

  useEffect(() => {
    localStorage.setItem('figures', JSON.stringify(figures));
  }, [figures]);

  return (
    <div className = "body">
      <main className='main_box'>

        <a href="make_flashcards"><button className="simple_button">Edit Flashcards</button></a>

        <div className = "flashcard_button_box">
          <button className = "arrow_button" id = "swipe_left">&lt;</button>

          <button className = "simple_button" id = "flashcard_button" >
              {/* <!-- Will add an audio element with sourced audio from an AI reader --> */}
              {currentFigure && currentFigure.TSVData && currentFigure.TSVData.map((row, index) => (
              <div key = {index} onClick = {handleFlashcardClick} className = "flashcard_display">
                {isBase64ImageOrVideo(row[flashSide ? 1 : 0]) ? (
                  <div  className="flashcard_side">
                    {/^data:image\//.test(row[flashSide ? 1 : 0]) ? (
                      <img className="flash_IMG" src={row[flashSide ? 1 : 0]} alt={`Flashcard ${index} front`} />
                    ) : (
                      <video controls>
                        <source className="flash_IMG" src={row[flashSide ? 1 : 0]} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ) : (
                  <span>{row[flashSide ? 1 : 0]}</span>
                )}
              </div>
            ))}
          </button>

          <button className = "arrow_button" id = "swipe_right">&gt;</button>
        </div>
        <button className = "simple_button" id = "previous_button">&lt;Previous</button>
      </main>
    </div>
  );
}