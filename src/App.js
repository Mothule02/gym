import './App.css';
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from './assets/flexa2.svg'
import facebbok from './assets/contact/facebook.png'
import whatsapp from './assets/contact/whatsapp.png'

function App() {

  
  
  return (
    <div className="App">
      
      <header className="App-header">
       <div className="logo">
         
       <img height={60} src={logo} alt="" />
       </div>
       <div className="contact-links">
        <a href="tel:+27678525100">067 852 5100</a>
       </div>
       <div className="header-links">
        <NavLink to='' className='link'>Home</NavLink>
        <NavLink to='plans' className='link'>Plans</NavLink>
        <NavLink to='contact' className='link'>Contact</NavLink>
       </div>
      </header>
      
      <div className="App-content">
        
        <Outlet/>
      </div>
      <footer className="App-footer">
        <div className="f-wrap">
        <div className="social">
          <h3>Social</h3>
          <div><img src={facebbok} alt="" /> <i>Facebook</i></div>
          <div><img src={whatsapp} alt="" /> <i>Whatsapp</i></div>
          
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <a href="tel:+27678525100">067 852 5100</a>
          <a href="mailto:info@flexafitness.co.za">info@flexafitness.co.za</a>
        </div>
        <div className="f-links">
          <h3>Navigation</h3>
          <Link className='f-a' to=''>Contact form</Link>
          <Link className='f-a' to=''>Where to find us</Link>
          <Link className='f-a' to=''></Link>
        </div>
        </div>
        <div className="copyright">
        ©  Copyright Flexa Fitness 2022
        </div>
      </footer>
    </div>
  );
}

export default App;
