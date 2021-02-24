import React from 'react';
import './Main.scss';
import logo from '../images/group1_fixed.png';

const Main = () => {
  return (
    <div className="main-container">
      <div>
        <img className="logo" src={logo}></img>
      </div>
      <h3 className="quote">THERE IS NO VICTORY WITHOUT A BATTLE.</h3>
      <form className="form-container">
        <input placeholder="Enter Email Address"></input>
        <button type="submit">LEVEL UP</button>
      </form>
    </div>
  );
};

export default Main;
