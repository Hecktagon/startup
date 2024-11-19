import React, { useState, useEffect } from 'react';

export function Login() {

  const [usernameChange, setUsernameChange] = useState('User789');
  const [username, setUsername] = useState('User789');
  const handleUsernameChange = (e) => {
    setUsernameChange(e.target.value);
  };

  const handleClickLogin = (e) => {
    setUsername(usernameChange);
  };

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  return (
    <div className = "body">
      <main className='main_box'>
        <form className = "index_input" method="get" action="vocab">
          <div>
              <span>Email: </span>
              <input className = "simple_input" type="text" placeholder="your@email.com" />
          </div>
          <div>
              <span>Username: </span>
              <input className = "simple_input" type="text" placeholder="username" onChange = {handleUsernameChange}/>
          </div>
          <div>
              <span>Password: </span>
              <input className = "simple_input" type="password" placeholder="password" />
          </div>
          <div>
              <button href = 'vocab' className = "simple_button login_button" onClick = {handleClickLogin}>Login</button>
              <button href = "vocab" className = "simple_button login_button" onClick = {handleClickLogin}>Create</button>
          </div>
      </form>
      </main>
    </div>
  );
}