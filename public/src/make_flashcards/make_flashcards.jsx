
import React, { useState, useEffect } from 'react';


export function Make_Flashcards() {
    const [figures, setFigures] = useState(() => {
      const savedFigures = localStorage.getItem('figures');
      return savedFigures ? JSON.parse(savedFigures) : [
        {id: "1", src: 'spain_flag.png', caption: 'Spanish Flashcards', csvData: null}
      ];
    });
    const folderId = localStorage.getItem('currentFolderId');
    const currentFigure = figures.find(figure => figure.id === folderId);
    const [flashData, setFlashData] = useState(null)
    const handleCSVChange = (e) => {
      setFlashData(e.target.value);
    };
    const total_flashcards = currentFigure.csvData.length
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


  const updateCSV = () =>{
    // Parse the CSV string into an array of objects
    const newCSVData = flashData.split('\n').map(row => row.split(','));

    // Update the figures state
    setFigures(prevFigures => {
        setFlashData(null)
        return prevFigures.map(figure => {
            if (figure.id === folderId) {
                return {
                    ...figure,
                    csvData: figure.csvData ? [...figure.csvData, ...newCSVData] : newCSVData
                };
            }
            return figure;
        });
    });
}

  const handleAddFlashcard = () => {
      if ((newFront || newImageFront) && (newBack || newImageBack)) {
        const newFlashcard = `${newFront ? newFront : newImageFront}, ${newBack ? newBack : newImageBack}, ${sliderValue}, 0, null`;
        setFlashData(newFlashcard);
        updateCSV();
        setFlashData(null);
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
              const newCSVData = figure.csvData.filter((_, i) => i !== index);
              return {
                  ...figure,
                  csvData: newCSVData
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

            <form className="csv_input_box" action="flashcards" method="get">
              <textarea className="textbox" id="csvInput" name="csvInput" onChange = {handleCSVChange} placeholder="Paste CSV data here..."></textarea>
              <button type="button" onClick = {updateCSV} className="simple_button">Submit</button>
            </form>

            {/* <hr id = "csv_sep"></hr> */}
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
              {currentFigure && currentFigure.csvData && currentFigure.csvData.map((row, index) => (
                <div key={index} className="made_flashcard">
                  <div className="front">{row[0]}</div>
                  <p>|</p>
                  <div className="back">{row[1]}</div>
                  <button className="delete_button" onClick={() => handleDeleteFlashcard(index)}>X</button>
                </div>
              ))}
            
          </div>
        </div>
      </main>
    </div>
  );
}

