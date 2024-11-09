import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Flashcards } from './flashcards/flashcards';
import { Login } from './login/login';
import { Make_Flashcards } from './make_flashcards/make_flashcards';
import { Menu } from './menu/menu';
import { Settings } from './settings/settings';
import { Vocab } from './vocab/vocab';

<Routes>
    <Route path='/flashcards' element={<Flashcards />} />
    <Route path='/login' element={<Login />} />
    <Route path='/make_flashcards' element={<Make_Flashcards />} />
    <Route path='/menu' element={<Menu />} />
    <Route path='/settings' element={<Settings />} />
    <Route path='/vocab' element={<Vocab />} />
    <Route path='*' element={<NotFound />} />
</Routes>

function ProfilePicture() {
    const [image, setImage] = useState(null);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
      return (
        <div>
          <label htmlFor="upload-button">
            {image ? (
              <img className="user_profile_pic" src={image} alt="Profile" />
            ) : (
              <div className="user_profile_pic">
              </div>
            )}
          </label>
          <input
            id="upload-button"
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </div>
      );
    }

export default function App() {
  return (
    <BrowserRouter>
        <div className='app'>
            <header>
                <h1 id = "title">Lingua Franca</h1>

                    {/* this will eventually only be displayed if we are past the login page */}
                <div className = "username_box">
                    <h3 id="username">User_Name789</h3> 
                    <ProfilePicture />
                    {/* <img  id="user_profile_pic" src="Globe_icon.jpg" alt="User Profile Image"></img> */}
                </div>
            </header> 

            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/flashcards' element={<Flashcards />} />
                <Route path='/login' element={<Login />} />
                <Route path='/make_flashcards' element={<Make_Flashcards />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/vocab' element={<Vocab />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <nav className = "nav_box">
                    <menu className = "link_menu">
                        {/* this href will be replaced by a variable tracking what the previous page was at some point. */}
                    <NavLink to="menu">&lt;- Back</NavLink> 
                    <NavLink to="login">Login</NavLink>
                    <NavLink to="menu">Menu</NavLink>
                    </menu>
                </nav> 
                <div className = "github_linkbox">
                    <span className="text-reset">Tayler Hilton</span>
                    <br/>
                    <NavLink to="https://github.com/Hecktagon/startup">GitHub</NavLink>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}



function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}