import React from 'react';

export function Menu() {
  return (
    <div className = "body">
      <main className='main_box'>
          <a href="vocab" className="button_link"><button className="menu_button">Vocab</button></a>
      
          <a href="settings" className="button_link"><button className="menu_button">Settings</button></a>

          <a href="" className="button_link"><button className="menu_button">Here is a link</button></a>

          <a href="" className="button_link"><button className="menu_button">Here is a link</button></a>
      </main>
    </div>
  );
}