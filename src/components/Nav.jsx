import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav( { isLoggedIn, handleLogout }) {
  return (
    <>
    <div className='Nav'>
      <div className='logo'>
        <Link to='/'><h1>GogoLive</h1></Link>
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/create'>Create</Link></li>
        <li><Link to='/learnMore'>Learn-More</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>

    </div>
    <li>{isLoggedIn ? (<button onClick={handleLogout}>Logout</button>) : <Link to="login">Login</Link>}</li>
    </>

    
  );
}
