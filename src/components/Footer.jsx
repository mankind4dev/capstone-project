import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const today = new Date();
  return (
    <footer className='Footer'>
        <div className='footer-menu'>
        <p>Copyright &copy; {today.getFullYear()} GogoLive. All right reserved.</p>
        </div>      
    </footer>
  )
}

export default Footer