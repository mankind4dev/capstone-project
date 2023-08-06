import { useEffect, React, useState } from 'react';
import { Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Event from './components/Event';
import Create from './components/Creat';
import LearnMore from './components/LearnMore';
import Search from './components/Search';

import JokesApi from './components/JokesApi';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  //If you're logedin, it load and cross check your details. You'r good to go if it recognize you  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if(user) {
      setIsLoggedIn(true)
    }
  }, []);

    //Befor having access to this, you must login
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

    //To logout
    //This make the ROUTE protected
    //This is like Spreed Operator
    //Object run the function
    //This spreed every Rout accrose the component
  const ProtectedRoute = ({path, element}) => {
    return isLoggedIn ? element : <Navigate to="/login" />
  }
       //second path of logout
  // const PrivateRoute = ({component: component, ...rest}) => {
  //   <Route {...rest} render={(props) => (
  //     isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
  //   )} />
  // }

 

  return (
   <div className='App'>
    <Nav />


    {/* //To protect a specific Route, We use SWITCH
    //It depend on the arrangement of the components
    //PrivateRoute means you have to athurize befor you have access to the component */}
    
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='event' element={<Event />} />
        <Route exact path='create' element={<ProtectedRoute path="create" element={<Create />} />} />
        <Route exact path='learnMore' element={<LearnMore />} />
        <Route exact path='search' element={<Search />} />

        <Route exact path='jokes-api' element={<JokesApi />} />
        <Route exact path='register' element={<Register />} />

        {/* //If the user logedin is true, Then navigate to Home Route. If it's FALSE, Navigate to  logedin page */}
        <Route exact path='login' element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />

          //
        
    </Routes>
    <Footer />
   </div>
  )
}

export default App
