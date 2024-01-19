
import logo1 from '../assets/logpic1.png';
import logo2 from '../assets/logpic2.png';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';


import React, {useState} from 'react';

function Login (){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorL,setErrorL] = useState('');

    const navigate = useNavigate();
    
    const EmailInput = (event) =>{

        setEmail(event.target.value);
    }
    const PassInput = (event) =>{

        setPass(event.target.value);
    }
    const Signin = async(event) =>{
        
        event.preventDefault();
        
        if(email.trim() === '' || pass.trim() === ''){

            setErrorL('please enter email and password');
        }else{

            setErrorL('');
        }
        const user = {

            email,
            pass
        }

        const response = await fetch('http://localhost:8081/login',{

            method: 'POST',
            body: JSON.stringify(user),
            headers: {

                'Content-Type':'application/json'
            }
        });

        if(response.ok){

            setEmail('');
            setPass('');
            setErrorL('');

            const data = await response.json();
            localStorage.clear();
            localStorage.setItem("user",JSON.stringify(data));
            navigate('/main');
        }else{

            setErrorL("please enter correct username or password");
        }
  
    }

    return <div>
    <NavBar /> 

    <div className='login-page'>
    <img src={logo1} className='lpic1'/>
    <div className='Login-container'>
        <h1 className='login-top'>Login to find someone you are waiting for</h1>
        <h3 className='login-undertop'>Don't Have an Account ?</h3>
        <Link to='/pbachelor'><button className='Login-reg'>Register</button></Link>
        <div className='LB'>
            <h1 className='Lh1'>Login</h1>
            <form onSubmit={Signin}>
        <div className="lbl">
                <label className='.labels'>Email</label>
                <input type='text' 
                className="user" 
                required 
                placeholder='   Enter Email' 
                onChange={EmailInput} 
                value={email}
                ></input>
                <span></span>
                
            </div>
        <div className="lbl">
                <label className='.labels'>Password</label>
                <input type="password" 
                required 
                className="pass" 
                placeholder='   Enter Password' 
                onChange={PassInput} 
                value={pass}
                ></input>
                <div><Link to='/forget' className="forgot">Forgot Password ?</Link></div>
                <span></span>
                
            </div>
            <button className="lgn" type='submit'>Login</button>
            {errorL && <div className='login-error'>{errorL}</div>}
            </form>
            

    </div>
    </div>
    <img src={logo2} className='lpic2'/>

    </div>
    </div>
}

export default Login;