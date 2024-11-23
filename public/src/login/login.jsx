import React, { useState, useEffect } from 'react';

export function Login() {

  const [usernameChange, setUsernameChange] = useState(null);
  const [passwordChange, setPasswordChange] = useState(null);
  const [emailChange, setEmailChange] = useState(null);

  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  const handlePasswordChange = (e) => {
    setPasswordChange(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailChange(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsernameChange(e.target.value);
  };

  async function handleClickLogin() {
    loginOrCreate(`/api/auth/login`);
  }

  async function handleClickCreate() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: usernameChange, email: emailChange, password: passwordChange }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', usernameChange);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }


  return (
    <div className = "body">
      <main className='main_box'>
        <form className = "index_input" method="get" action="vocab">
          <div>
              <span>Email: </span>
              <input className = "simple_input" type="text" placeholder="your@email.com" onChange = {handleEmailChange}/>
          </div>
          <div>
              <span>Username: </span>
              <input className = "simple_input" type="text" placeholder="username" onChange = {handleUsernameChange}/>
          </div>
          <div>
              <span>Password: </span>
              <input className = "simple_input" type="password" placeholder="password" onChange={handlePasswordChange}/>
          </div>
          <div>
              <button href = 'vocab' className = "simple_button login_button" onClick={() => handleClickLogin()}>Login</button>
              <button href = "vocab" className = "simple_button login_button" onClick={() => handleClickCreate()}>Create</button>
          </div>
      </form>
      <p className="quote">{quote} - {quoteAuthor}</p>
      </main>
    </div>
  );
}