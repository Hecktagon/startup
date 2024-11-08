import React from 'react';

export function Settings() {
  return (
    <main className='main_box_settings'>
      {/* <!-- Will allow the user to customise color scheme -->
            <!-- the action will eventually send the data to some javascript to allow for changes to the websites functionality --> */}
            <form method="get" className = "color_setting">
                <label for="primary_color">Select primary color:</label>
                <input type="color" id="primary_color" name="primary_color" value="#FFFFFF"></input>
            </form>
            <br></br>

            <form method="get" className = "color_setting">
                <label for="secondary_color">Select secondary color:</label>
                <input type="color" id="secondary_color" name="secondary_color" value="#000000"></input>
            </form>
            <br></br>
            
            <form method="get">
                <label for="toggle_autoplay">Autoplay audio</label>
                <input type ="checkbox" id="toggle_autoplay" name="toggle_autoplay"></input>
            </form>
            <br></br>

            <form method = "get">
                <fieldset>
                    <legend>Choose which side of the flashcard is displayed first:</legend>
                    <div>
                        <input type="radio" id="front" name="card_side" value="front"></input>
                        <label for="html">Front</label>
                    </div>
                    <div>
                        <input type="radio" id="back" name="card_side" value="back"></input>
                        <label for="css">Back</label>
                    </div>
                </fieldset>
            </form>
    </main>
  );
}