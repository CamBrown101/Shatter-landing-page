import React from 'react';
import './Main.scss';
import logo from '../images/group1_fixed_trimmed.png';
import { MailchimpForm } from './MailchimpForm';

const Main = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('!!');
  };
  return (
    <div className="main-container">
      <div>
        <img alt="Shatter Logo" className="logo" src={logo}></img>
      </div>
      <h3 className="quote">THERE IS NO VICTORY WITHOUT A BATTLE.</h3>
      <MailchimpForm />
    </div>
  );
};

export default Main;
