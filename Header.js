import React from 'react';
import './App.css';
import MobileIcon from './assets/mobile.svg';
import RgrLogo from './assets/rgrlogo.png';

function Header() {
  return (
    <div>
      <header>
        <div className="main-nav">
          <div className="rgr-logo">
            <img src={RgrLogo} alt='rgrlogo'/>
          </div>
          <div className="input-div">
            <input type="text" className="plc" placeholder="რას ეძებთ?" id=""/>
          </div>
          <div className="orive">
            <img src={MobileIcon} alt='mobileicon' />
          </div>
          <div className="lukasnomeri">557210626</div>
        </div>
      </header>
    </div>
  );
}

export default Header;