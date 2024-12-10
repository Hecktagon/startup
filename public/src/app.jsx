import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Flashcards } from './flashcards/flashcards';
import { Login } from './login/login';
import { AuthState } from './login/authState';
import { Make_Flashcards } from './make_flashcards/make_flashcards';
// import { Menu } from './menu/menu';

import { Vocab } from './vocab/vocab';

<Routes>
    <Route path='/flashcards' element={<Flashcards />} />
    <Route path='/login' element={<Login />} />
    <Route path='/make_flashcards' element={<Make_Flashcards />} />
    <Route path='/vocab' element={<Vocab />} />
    <Route path='*' element={<NotFound />} />
</Routes>




// useEffect(() => {
//   usernameBox();
// }, [location])


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

export default function App(props) {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // const [previousPath, setPreviousPath] = useState("/vocab");

  useEffect(() => {
    const handlePathChange = () => {
      // setPreviousPath(currentPath);
      setCurrentPath(window.location.pathname);
      handlePathChange();
    };

    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      handlePushState();
    };

    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      handlePushState();
    };

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);


  return (
    <BrowserRouter>
        <div className='app'>
            <header>
                <h1 id = "title">Lingua Franca</h1>
                {currentPath !== "/login" && currentPath !== "/" &&
                <div className = "username_box">
                  <h3 id="username">{userName}</h3> 
                  <ProfilePicture />  
                </div>}
            </header> 

            <Routes>
                <Route exact path='/' element={<Login 
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
                />} />
                <Route path='/flashcards' element={<Flashcards />} />
                <Route path='/login' element={<Login 
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
                />} />
                <Route path='/make_flashcards' element={<Make_Flashcards />} />
                <Route path='/vocab' element={<Vocab />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <nav className = "nav_box">
                  {currentPath !== "/login" && currentPath !== "/" &&
                    <menu className = "link_menu">
                        {/* this href will be replaced by a variable tracking what the previous page was at some point. */}
                    
                    {/* <NavLink to={previousPath}>&lt;- Back</NavLink>  */}
                    <NavLink to="login">Login</NavLink>
                    <NavLink to="vocab">Menu</NavLink>
                    </menu>}
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
    return <main className='container-fluid bg-secondary text-center main_box'>404: Return to sender. Address unknown.</main>;
}