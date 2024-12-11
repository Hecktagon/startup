import React, { useState, useEffect } from 'react';

export function Vocab() {
  const [figures, setFigures] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [showInputs, setShowInputs] = useState(false);

  React.useEffect(() => {
    fetch('/api/figures')
      .then((response) => response.json())
      .then((figures) => {
        setFigures(figures);
      });
  }, []);

  useEffect(() => {
    fetch('/api/change_figures', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(figures),
      }).then(() => {
          console.log("figures updated!");
      }).catch(error => {
          console.error("Error updating figures:", error);
      });
  }, [figures])

  console.log("FIGURES:\n",figures)
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleFolderClick = (id) => {
    localStorage.setItem('currentFolderId', id);
    window.location.href = 'flashcards';
  };

  const handleCloseInputs = () => {
    setShowInputs(false);
    setNewImage(null);
    setNewTitle('');
  };

  async function addFigure() {
    if (newTitle) {
      const newFigure = {id: String(figures.length + 1), src: newImage, caption: newTitle, TSVData: []};
      setFigures([...figures, newFigure]);
      handleCloseInputs();
      try {
          await fetch('/api/figure', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFigure),
        });

      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while saving the new figure.');
      }
    } else {
      alert('Please select an image and enter a title.');
    }
  };

  const handleAddFolderClick = () => {
    setShowInputs(true);
  };



  return (
    <div className="body">
      <main className="vocab_box">
        {figures.map((figure, index) => (
          <figure key={index} className="button-figure">
            <a href="flashcards">
              <button className="vocab_button" onClick={() => handleFolderClick(figure.id)}>
                <img className="vocab_img" src={figure.src} />
              </button>
            </a>
            <figcaption className="vocab_button_caption">{figure.caption}</figcaption>
          </figure>
        ))}
        <figure id="add_folder" className="button-figure">
          <button className="vocab_button" onClick={handleAddFolderClick}>
            <img className="vocab_img" src="plus-icon-black.png" alt="Button Image" />
          </button>
          <figcaption className="vocab_button_caption">Make new folder</figcaption>
        </figure>
        {showInputs && (
          <div className="input-container">
            <div id = "add_vocab_toprow">
              <button className="delete_button" id = "cancel_vocab" onClick={handleCloseInputs}>X</button>
              <input className="file_title" type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <input
              type="text"
              placeholder="Enter title"
              value={newTitle}
              onChange={handleTitleChange}
            />
            <button className="simple_button" onClick={addFigure}>
              Add Folder
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

