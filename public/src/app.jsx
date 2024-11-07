import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='app'>
        <header>
            <h1 id = "title">Lingua Franca</h1>

                {/* this will eventually only be displayed if we are past the login page */}
            <div class = "username_box">
                <h3 id="username">User_Name789</h3> 
                <img  id="user_profile_pic" src="Globe_icon.jpg" alt="User Profile Image"></img>
            </div>
        </header> 

        <main>App components go here</main>

        <footer>
            <nav class = "nav_box">
                <menu class = "link_menu">
                    {/* this href will be replaced by a variable tracking what the previous page was at some point. */}
                <a href="menu.html">&lt;- Back</a> 
                <a href="login.html">Login</a>
                <a href="menu.html">Home</a>
                </menu>
            </nav> 
            <div class = "github_linkbox">
                <span class="text-reset">Tayler Hilton</span>
                <br/>
                <a href="https://github.com/Hecktagon/startup">GitHub</a>
            </div>
        </footer>
    </div>
  );
}