import React from 'react';

export function Login() {
  return (
    <div className = "body">
      <main className='main_box'>
        <form className = "index_input" method="get" action="menu">
          <div>
              <span>Email: </span>
              <input className = "simple_input" type="text" placeholder="your@email.com" />
          </div>
          <div>
              <span>Username: </span>
              <input className = "simple_input" type="text" placeholder="username" />
          </div>
          <div>
              <span>Password: </span>
              <input className = "simple_input" type="password" placeholder="password" />
          </div>
          <div>
              <button type="submit">Login</button>
              <button type="submit">Create</button>
          </div>
      </form>
      </main>
    </div>
  );
}