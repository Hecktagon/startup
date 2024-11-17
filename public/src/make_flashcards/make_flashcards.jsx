
import React, { useState, useEffect } from 'react';


export function Make_Flashcards() {
    const [figures, setFigures] = useState(() => {
      const savedFigures = localStorage.getItem('figures');
      return savedFigures ? JSON.parse(savedFigures) : [
        {id: "1", src: 'spain_flag.png', caption: 'Spanish Flashcards', TSVData: []}
      ];
    });

    const folderId = localStorage.getItem('currentFolderId');
    const currentFigure = figures.find(figure => figure.id === folderId);
    const [flashData, setFlashData] = useState([])
    const handleTSVChange = (e) => {
      setFlashData(e.target.value);
    };
    const total_flashcards = currentFigure ? currentFigure.TSVData.length : 0;
    const [sliderValue, setSliderValue] = useState(total_flashcards);

    const [newFront, setNewFront] = useState('');
    const [newBack, setNewBack] = useState('');
    const [newImageBack, setNewImageBack] = useState(null);
    const [newImageFront, setNewImageFront] = useState(null);

    const handleFrontChange = (e) => {
      setNewFront(e.target.value);
    };

    const handleImageChangeFront = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewImageFront(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleBackChange = (e) => {
      setNewBack(e.target.value);
    };

    const handleImageChangeBack = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewImageBack(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const isBase64ImageOrVideo = (str) => {
      return /^data:image\/[a-zA-Z]+;base64,/.test(str) || /^data:video\/[a-zA-Z]+;base64,/.test(str);
    };

    useEffect(() => {
      localStorage.setItem('figures', JSON.stringify(figures));
      setSliderValue(total_flashcards + 1)
    }, [figures]);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const handleDeleteSet = () => {
        const userConfirmed = window.confirm("Are you sure you would like to delete this set?");
        if (userConfirmed) {
            const userDoubleConfirmed = window.confirm("Are you SURE you're sure?");
        if(userDoubleConfirmed){
          setFigures(prevFigures => {
            return prevFigures.map(figure => {
                if (figure.id === folderId) {
                    // Return null to remove later with .filter
                    return null;
                } else if (figure.id > folderId) {
                    // Subtract 1 from ids greater than folderId
                    return {
                        ...figure,
                        id: figure.id - 1
                    };
                }
                // Return the figure unchanged if id is not greater than folderId
                return figure;
            }).filter(figure => figure !== null); // Remove null values
        });
      
            console.log("Set deleted");
            window.location.href = '/vocab';
        } else{
            console.log("Deletion cancelled");
        }
        } else {
        console.log("Deletion cancelled");
        }
  };


  const is2DArray = (array) => {
    // Check if array is an array
    if (!Array.isArray(array)) {
      return false;
    }
  
    // Check if each element in the array is also an array
    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        return false;
      }
    }
  
    return true;
  };



  const updateTSV = () =>{
    // Parse the TSV string into an array of objects
    if(!flashData) {return};
    const newTSVData = flashData.split('\n').map(row => row.split('\t').map(item => item.trim()));

    // Update the figures state
    setFigures(prevFigures => {
        setFlashData([])
        return prevFigures.map(figure => {
            if (figure.id === folderId) {
                return {
                    ...figure,
                    TSVData: figure.TSVData ? [...figure.TSVData, ...newTSVData] : newTSVData
                };
            }
            return figure;
        });
    });
}

  const handleAddFlashcard = () => {
      if ((newFront || newImageFront) && (newBack || newImageBack)) {
        const newFlashcard = `${newFront ? newFront : newImageFront}\t${newBack ? newBack : newImageBack}\t${sliderValue}\t0\tnull`;
        setFlashData(newFlashcard);
        updateTSV();
        setFlashData([]);
        setNewFront('');
        setNewBack('');
        setNewImageFront(null);
        setNewImageBack(null);
      }
    }

const handleDeleteFlashcard = (index) => {
  setFigures(prevFigures => {
      return prevFigures.map(figure => {
          if (figure.id === folderId) {
              const newTSVData = figure.TSVData.filter((_, i) => i !== index);
              return {
                  ...figure,
                  TSVData: newTSVData
              };
          }
          return figure;
      });
  });
};

  return (
    <div className="body">
      <main className='main_box_editor'>
        {/* Will eventually source a translation service to help users fill out the back sides of their flashcards */}
        <div className="flashcard_editor">
          <div className="make_flashcards">
            <div>
              <button className="delete_button" id="delete_set" onClick={handleDeleteSet}>
                Delete Set
              </button>
            </div>

            <form className="TSV_input_box" action="flashcards" method="get">
              <textarea className="textbox" id="TSVInput" name="TSVInput" onChange = {handleTSVChange} placeholder="Paste TSV data here..."></textarea>
              <button type="button" onClick = {updateTSV} className="simple_button">Submit</button>
            </form>

            {/* <hr id = "TSV_sep"></hr> */}
            <p className = "or_sep">───── OR ─────</p>

            <form className="side_flaschard" action="flashcards" method="get">
              <textarea className="textbox" id="front_word" name="front_word" placeholder="Front of card" onChange={handleFrontChange}></textarea>
              <input className="flash_img" type="file" accept="image/*,video/*" onChange={handleImageChangeFront} />
            </form>

            <form className="side_flaschard" action="flashcards" method="get">
              <textarea className="textbox" id="back_word" name="back_word" placeholder="Back of card" onChange={handleBackChange}></textarea>
              <input className="flash_img" type="file" accept="image/*,video/*" onChange={handleImageChangeBack} />
            </form>

            <div className="input_div">
                <label htmlFor="slider">Priority:</label>
                    <div className="slider_and_output">
                        <input
                            type="range"
                            id="slider"
                            name="slider"
                            min="1"
                            max={total_flashcards + 1}
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                        <output>{sliderValue}</output>
                    </div>
            </div>

            {/* will eventually add another set of inputs for a front and back word */}
            <button id="add_flashcard_button" className="simple_button" onClick={handleAddFlashcard}>
              Add Flashcard
            </button>
          </div>

          <div className="separator" id="editor_split"></div>

          <div className="flashcard_display">
              {/* {currentFigure && currentFigure.TSVData && currentFigure.TSVData.map((row, index) => (
                <div key={index} className="made_flashcard">
                  <div className="front">{row[0]}</div>
                  <p>|</p>
                  <div className="back">{row[1]}</div>
                  <button className="delete_button" onClick={() => handleDeleteFlashcard(index)}>X</button>
                </div>
              ))} */}

              {currentFigure && currentFigure.TSVData && currentFigure.TSVData.map((row, index) => (
                <div key = {index} className = "made_flashcard">
                  {isBase64ImageOrVideo(row[0]) ? (
                    <div  className="front">
                      {/^data:image\//.test(row[0]) ? (
                        <img className="made_IMG" src={row[0]} alt={`Flashcard ${index} front`} />
                      ) : (
                        <video controls>
                          <source className="made_IMG" src={row[0]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ) : (
                    <span>{row[0]}</span>
                  )}
                  |
                  {isBase64ImageOrVideo(row[1]) ? (
                    <div className = "back">
                      {/^data:image\//.test(row[1]) ? (
                        <img className="made_IMG" src={row[1]} alt={`Flashcard ${index} back`} />
                      ) : (
                        <video controls>
                          <source className="made_IMG" src={row[1]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ) : (
                    <span>{row[1]}</span>
                  )}
                  <button className = "delete_button" onClick={() => handleDeleteFlashcard(index)}>X</button>
                </div>
              ))}
            
          </div>
        </div>
      </main>
    </div>
  );
}

