import React from 'react';

export function Vocab() {
  return (
    <div className = "body">
        <main className='vocab_box'>
        {/* <!-- Each of these buttons will eventually link to a user-unique folder of flashcards, or a pre-made folder of flashcards --> */}
        <figure className="button-figure">
            <a href="flashcards">
            <button className = "vocab_button">                       
                <img className = "vocab_img" src="spain_flag.png" alt="Button Image"></img>                             
            </button>
            </a> 
            <figcaption className = "vocab_button_caption">Spanish Flashcards</figcaption>
        </figure>

        <figure className="button-figure">
            <a href="flashcards">
            <button className = "vocab_button">
                <img className = "vocab_img" src="Ukraine_flag.png" alt="Button Image"></img>   
            </button>
            </a>
            <figcaption className = "vocab_button_caption">Ukranian Flashcards</figcaption>
        </figure>

        <figure className="button-figure">
            <a href="flashcards">
            <button className = "vocab_button">                       
                <img className = "vocab_img" src="Japanese_flag.png" alt="Button Image"></img> 
            </button>
            </a> 
            <figcaption className = "vocab_button_caption">Japanese Flashcards</figcaption>
        </figure>

        <figure className="button-figure">
            <a href = "make_flashcards">
            <button className = "vocab_button">
                {/* <!-- This button will let you make a new folder for flashcards --> */}
                <img className = "vocab_img" src="plus-icon-black.png" alt="Button Image"></img>  
            </button>
            </a>
            <figcaption className = "vocab_button_caption">Make new folder</figcaption>
        </figure>
        </main>
    </div>
  );
}