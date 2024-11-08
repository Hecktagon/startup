import React from 'react';

export function Flashcards() {
  return (
    <main className='main_box'>
      <div className = "flashcard_button_box">
        <button className = "arrow_button">&lt;</button>

        <button className = "simple_button" id = "flashcard_button">
            {/* <!-- Will add an audio element with sourced audio from an AI reader --> */}
            Click to flip (to be implemented)
        </button>

        <button className = "arrow_button">&gt;</button>
      </div>
      <button className = "simple_button" id = "previous_button">&lt;Previous</button>
    </main>
  );
}