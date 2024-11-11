import React from 'react';

export function Flashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const folderId = localStorage.getItem('currentFolderId');

  useEffect(() => {
    // Load flashcards based on folderId
    const savedFlashcards = localStorage.getItem(`flashcards_${folderId}`);
    if (savedFlashcards) {
      setFlashcards(JSON.parse(savedFlashcards));
    } 
  }, [folderId]);


  return (
    <div className = "body">
      <main className='main_box'>

        <a href="make_flashcards"><button className="simple_button">Edit Flashcards</button></a>

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
    </div>
  );
}