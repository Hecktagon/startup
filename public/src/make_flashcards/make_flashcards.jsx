import React from 'react';

export function Make_Flashcards() {
  return (
    <div className = "body">
        <main className='main_box_editor'>
            {/* Will eventually source a translation service to help users fill out the back sides of their flashcards */}
            <div className = "flashcard_editor">
                

                <div className = "make_flashcards">

                    <form className = "csv_input_box" action="flashcards" method="get">
                        <label for="csvInput">Paste your CSV data here:</label>
                        <textarea  className = "textbox" id="csvInput" name="csvInput" placeholder="Paste CSV data here..."></textarea>
                        <button type="submit"  className = "simple_button">Submit</button>
                    </form>

                    <hr />

                    <form className = "side_flaschard" action="flashcards" method="get">
                        <label for="front_word">Front</label>
                        <textarea className = "textbox" id="front_word" name="front_word" placeholder="Front of card"></textarea>
                    </form>

                    <form className = "side_flaschard" action="flashcards" method="get">
                        <label for="back_word">Back</label>
                        <textarea className = "textbox" id="back_word" name="back_word" placeholder="Back of card"></textarea>
                    </form>

                    {/* will eventually add another set of inputs for a front and back word */}
                    <button id = "add_flashcard_button" className = "simple_button">
                        Add Flashcard
                    </button>
                </div>
                
                <div className = "separator" id = "editor_split"></div>

                <div className = "flashcard_display">
                    <div className = "made_flashcard"><p className = "frontword">To speak</p> <p>|</p> <p className = "backword">Hablar</p><button className = "delete_button">X</button></div>
                    <div className = "made_flashcard"><p className = "frontword">I</p> <p>|</p> <p className = "backword">Yo</p><button className = "delete_button">X</button></div>
                    <div className = "made_flashcard"><p className = "frontword">You</p> <p>|</p> <p className = "backword">Tu</p><button className = "delete_button">X</button></div>
                    <div className = "made_flashcard"><p className = "frontword">He</p> <p>|</p> <p className = "backword">El</p><button className = "delete_button">X</button></div>
                    <div className = "made_flashcard"><p className = "frontword">She</p> <p>|</p> <p className = "backword">Ella</p><button className = "delete_button">X</button></div>
                    <div className = "made_flashcard"><p className = "frontword">We</p> <p>|</p> <p className = "backword">Nosotros</p><button className = "delete_button">X</button></div>
                    <div className = "made_flashcard"><p className = "frontword">They</p> <p>|</p> <p className = "backword">Ellos</p><button className = "delete_button">X</button></div>
                    <div className = "made_flashcard"><p className = "frontword">Spanish</p> <p>|</p> <p className = "backword">Espanol</p><button className = "delete_button">X</button></div>
                </div>
            </div>
        
        </main>
    </div>
  );
}