import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { BiSolidUser } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { FaUnlock } from 'react-icons/fa';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';


export default function Register({}) {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const handleSubmit = async(e) => {
        e.preventDefault();

        //! faill fast. If username and password does not match, then throw err. 
    if(!firstName || !lastName || !email || !phoneNumber || !password || !retypePassword) {
            setError('Please fill the fields');
            return;
        }
       
            //getItem is 1 of the 4 propertices of localstorage
            //JSON.parse helps to pass data in a JSON format
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

            //find is attach to the localstorage, and it take the call back function
        const user = existingUsers.find(user => user.email === email);

            //If the username is already exist
        if(user) {
            setError('User already exist');
            return;
        }

        const newUser = {
            firstName, lastName, email, phoneNumber, password
        }
            //setItem is 1 of the 4 properties of localStorage.
            //JSON.stringify helps to structure data verywell.
            //JSON.parse helps to convert any data that's not in JSON back to JSON.
            //After the form is successfully registered, then navigate to login page.
        localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
        navigate('/login');
            //Your users and existingUsers must tally with your login
            //Okay?
    }

  return (
    <div className='Register'>
      <h1>GogoLive</h1>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='first-user'>
            <div className="user"><BiSolidUser /></div>
        <input 
            type="text"
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        </div>

        <div>
            <div className='user'><BiSolidUser /></div>
            <input 
            type="text"
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
        </div>

        <div>
            <div className='user'><MdEmail /></div>
            <input 
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div>
            <div className='user'><HiPhone /></div>
        <input 
            type="number"
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </div>

        <div>
            <div className='user'><FaUnlock /></div>
            <div className='user2' onClick={togglePasswordVisibility}>{showPassword ? <MdVisibilityOff /> : <MdVisibility />}</div>
        <input 
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div>
        <div className='user'><FaUnlock /></div>
            <div className='user2' onClick={togglePasswordVisibility}>{showPassword ? <MdVisibilityOff /> : <MdVisibility />}</div>
        <input 
            type={showPassword ? 'text' : 'password'}
            placeholder='Retype Password'
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            
        />
        </div>
        {error && <p>{error}</p>}
        <button type='submit'>Register</button>
        <div>
        <p>Already have an account? <Link to='/'>Login</Link></p>
        </div>
      </form>
      <div className="login-links">
            <div className="login-links_or">Or</div>
        </div>
        <div className="loginWith">
            <button>
                <div className="google"><MdEmail /><Link t0='/'>Sign Up with Google</Link></div>
            </button>  
        </div>
    </div>
  )
}
