import React from 'react';
import './App.css';


const App = () =>{
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://cryptologos.cc/logos/tether-usdt-logo.png?v=013'></img>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
        <img src='https://get.wallhere.com/photo/landscape-lights-sea-night-reflection-vehicle-evening-bridge-Golden-Gate-Bridge-dusk-suspension-bridge-port-mast-3750x1200-px-cable-stayed-bridge-704358.jpg'></img>
        </div>
        <div>
        <img src='https://avatars.mds.yandex.net/get-mpic/1923922/img_id6394160592464985123.jpeg/orig'></img>
        </div>

        </div>
    </div>
  );
}

export default App;
