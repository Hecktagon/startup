import React, { useState, useEffect} from 'react';

export function Make_Flashcards() {
    const [flashData, setFlashData] = useState(null)

    const handleCSVChange = (e) => {
      setFlashData(e.target.value);
    };

    const folderId = localStorage.getItem('currentFolderId');
    const [sliderValue, setSliderValue] = useState(50);
    const [figures, setFigures] = useState(() => {
      const savedFigures = localStorage.getItem('figures');
      return savedFigures ? JSON.parse(savedFigures) : [
        {id: "1", src: 'spain_flag.png', caption: 'Spanish Flashcards', csvData: null}
      ];
    });

    useEffect(() => {
      localStorage.setItem('figures', JSON.stringify(figures));
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
              <button type="submit" onClick = {updateCSV} className="simple_button">Submit</button>
            </form>

            {/* <hr id = "csv_sep"></hr> */}
            <p className = "or_sep">───── OR ─────</p>

            <form className="side_flaschard" action="flashcards" method="get">
              <textarea className="textbox" id="front_word" name="front_word" placeholder="Front of card"></textarea>
            </form>

            <form className="side_flaschard" action="flashcards" method="get">
              <textarea className="textbox" id="back_word" name="back_word" placeholder="Back of card"></textarea>
            </form>

            <div className="input_div">
                <label htmlFor="slider">Priority:</label>
                    <div className="slider_and_output">
                        <input
                            type="range"
                            id="slider"
                            name="slider"
                            min="1"
                            max="100"
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                        <output>{sliderValue}</output>
                    </div>
            </div>

            {/* will eventually add another set of inputs for a front and back word */}
            <button id="add_flashcard_button" className="simple_button">
              Add Flashcard
            </button>
          </div>

          <div className="separator" id="editor_split"></div>

          <div className="flashcard_display">
            <div className="made_flashcard">
              <p className="frontword">To speak</p> <p>|</p> <p className="backword">Hablar</p>
              <button className="delete_button">X</button>
            </div>
            <div className="made_flashcard">
              <p className="frontword">I</p> <p>|</p> <p className="backword">Yo</p>
              <button className="delete_button">X</button>
            </div>
            <div className="made_flashcard">
              <p className="frontword">You</p> <p>|</p> <p className="backword">Tu</p>
              <button className="delete_button">X</button>
            </div>
            <div className="made_flashcard">
              <p className="frontword">He</p> <p>|</p> <p className="backword">El</p>
              <button className="delete_button">X</button>
            </div>
            <div className="made_flashcard">
              <p className="frontword">She</p> <p>|</p> <p className="backword">Ella</p>
              <button className="delete_button">X</button>
            </div>
            <div className="made_flashcard">
              <p className="frontword">We</p> <p>|</p> <p className="backword">Nosotros</p>
              <button className="delete_button">X</button>
            </div>
            <div className="made_flashcard">
              <p className="frontword">They</p> <p>|</p> <p className="backword">Ellos</p>
              <button className="delete_button">X</button>
            </div>
            <div className="made_flashcard">
              <p className="frontword">Spanish</p> <p>|</p> <p className="backword">Espanol</p>
              <button className="delete_button">X</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
