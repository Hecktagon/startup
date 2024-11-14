import React, { useState, useEffect } from 'react';

export function Vocab() {
  const [figures, setFigures] = useState(() => {
    const savedFigures = localStorage.getItem('figures');
    return savedFigures ? JSON.parse(savedFigures) : [
      {id: "1", src: 'spain_flag.png', caption: 'Spanish Flashcards', csvData: null}
    ];
  });
  const [newImage, setNewImage] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [showInputs, setShowInputs] = useState(false);

  useEffect(() => {
    localStorage.setItem('figures', JSON.stringify(figures));
  }, [figures]);

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

  const handleButtonClick = (id) => {
    localStorage.setItem('currentFolderId', id);
    window.location.href = 'flashcards';
  };

  const addFigure = () => {
    if (newImage && newTitle) {
      const newFigure = {id: length(figures)+1, src: newImage, caption: newTitle, csvData: null};
      setFigures([...figures, newFigure]);
      setNewImage(null);
      setNewTitle('');
      setShowInputs(false);
    } else {
      alert('Please select an image and enter a title.');
    }
  };

  const handleAddFolderClick = () => {
    setShowInputs(true);
  };

  const handleCloseInputs = () => {
    setShowInputs(false);
    setNewImage(null);
    setNewTitle('');
  };

  return (
    <div className="body">
      <main className="vocab_box">
        {figures.map((figure, index) => (
          <figure key={index} className="button-figure">
            <a href="flashcards">
              <button className="vocab_button" onClick={() => handleButtonClick(figure.id)}>
                <img className="vocab_img" src={figure.src} alt="Button Image" />
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
              Add Flashcard
            </button>
          </div>
        )}
      </main>
    </div>
  );
}



// export function Vocab() {
//   return (
//     <div className = "body">
//         <main className='vocab_box'>
//         {/* <!-- Each of these buttons will eventually link to a user-unique folder of flashcards, or a pre-made folder of flashcards --> */}
//         <figure className="button-figure">
//             <a href="flashcards">
//             <button className = "vocab_button">                       
//                 <img className = "vocab_img" src="spain_flag.png" alt="Button Image"></img>                             
//             </button>
//             </a> 
//             <figcaption className = "vocab_button_caption">Spanish Flashcards</figcaption>
//         </figure>

//         <figure className="button-figure">
//             <a href="flashcards">
//             <button className = "vocab_button">
//                 <img className = "vocab_img" src="Ukraine_flag.png" alt="Button Image"></img>   
//             </button>
//             </a>
//             <figcaption className = "vocab_button_caption">Ukranian Flashcards</figcaption>
//         </figure>

//         <figure className="button-figure">
//             <a href="flashcards">
//             <button className = "vocab_button">                       
//                 <img className = "vocab_img" src="Japanese_flag.png" alt="Button Image"></img> 
//             </button>
//             </a> 
//             <figcaption className = "vocab_button_caption">Japanese Flashcards</figcaption>
//         </figure>

//         <figure id="add_folder" className="button-figure">
//             <a href = "make_flashcards">
//             <button className = "vocab_button">
//                 {/* <!-- This button will let you make a new folder for flashcards --> */}
//                 <img className = "vocab_img" src="plus-icon-black.png" alt="Button Image"></img>  
//             </button>
//             </a>
//             <figcaption className = "vocab_button_caption">Make new folder</figcaption>
//         </figure>
//         </main>
//     </div>
//   );
// }