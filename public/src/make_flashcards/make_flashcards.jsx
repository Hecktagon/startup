import React, { useState } from 'react';

export function Make_Flashcards() {
    const folderId = localStorage.getItem('currentFolderId');
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const handleDeleteSet = () => {
        const userConfirmed = window.confirm("Are you sure you would like to delete this set?");
        if (userConfirmed) {
            const userDoubleConfirmed = window.confirm("Are you SURE you're sure?");
        if(userDoubleConfirmed){
            // Add your deletion logic here
            console.log("Set deleted");
        } else{
            console.log("Deletion cancelled");
        }
        } else {
        console.log("Deletion cancelled");
        }
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
              <textarea className="textbox" id="csvInput" name="csvInput" placeholder="Paste CSV data here..."></textarea>
              <button type="submit" className="simple_button">Submit</button>
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
