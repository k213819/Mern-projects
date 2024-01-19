import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Start from './components/Start';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Forgot from './components/Forgot';
import Main from './components/Main';
import Profile from './components/Profile';
import About from './components/About';
import Chat from './components/Chat';
import Pbachelor from "./components/Pbachelor";
import Registration from './components/Registration';

function App() {

  return (
    <div className='main-div'>
    
           <Routes>
             <Route path='/' element={<Start />}/>
             <Route path='/login' element={<Login />}/>
             <Route path='/signup' element={<SignUp />}/>
             <Route path='/forget' element={<Forgot />}/>
             <Route path='/about' element={<About />}/>
             <Route path='/contact' element={<h1>Contact Page</h1>}/>
             <Route path='/members' element={<h1>Members Page</h1>}/>
             <Route path='/main' element={<Main/>}/>
             <Route path='profile' element={<Profile/>}/>
             <Route path='/chat' element={<Chat />}/>
             <Route path='/pbachelor' element={<Pbachelor />}/>
             <Route path='/registration' element={<Registration />}/>
    </Routes>
            
    </div>
    
  );
}

export default App;
