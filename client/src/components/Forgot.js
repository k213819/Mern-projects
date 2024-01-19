import './forgot.css'
import { useState } from 'react'
import logo1 from '../assets/forget1.png'
import logo2 from '../assets/forget2.png'
import {Link,useNavigate} from 'react-router-dom'
import NavBar from './NavBar';

function Forgot(){
    
    const [fmail,setFmail] = useState('');
    const [check1,setCheck1] = useState('right-input');
    const [check2,setCheck2] = useState('right-input');
    const [check3,setCheck3] = useState('right-input');
    const [mailcheck,setMailCheck] = useState(true);
    const [pass1,setPass1] = useState('');
    const [pass2,setPass2] = useState('');
    const [error,setError] = useState('');
    const [perror,setPError] = useState('');
    
    const navigate = useNavigate();
    const handleFmailChange = (e) => {

      setFmail(e.target.value);
    }
    const UpdatePasssword = async() => {
       
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
       if(fmail.trim() === ''){

        setError("please enter your email");
        setCheck1('wrong-input');
        return;
       }else{

        setError('');
        setCheck1('right-input');
       }

       if(!emailRegex.test(fmail)){
 
        setError("please enter a valid email");
        setCheck1('wrong-input');
        return;
       }else{

        setError('');
        setCheck1('right-input');
       }

       const email = {fmail};

       const response = await fetch('http://localhost:8081/fmail',{

         method: 'POST',
         body: JSON.stringify(email),
         headers:{

          'Content-Type':'application/json'
         }
       });
       
       if(response.ok){
        
        setMailCheck(false);
        setCheck1('right-input');
        setError('');

       }else{
        
        setCheck1('wrong-input');
        setError("email do not found");
       }
    }

    const handlePass1 = (e) => {

      setPass1(e.target.value);
    }
    const handlePass2 = (e) => {

      setPass2(e.target.value);
    }

    const ResetPass = async() => {

      if(pass1.trim() === ''){

        setPError("Enter Your Password");
        setCheck2('wrong-input');
        return;
      }else{

        setPError('');
        setCheck2('right-input');
      }

      if(pass2.trim() === ''){

        setPError("Re-Enter your Password");
        setCheck3('wrong-input');
        return;
      }else{

        setPError('');
        setCheck3('right-input');

      }
      
      if(pass1.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(pass1)){

        setPError("Password must contains atleast 8 and 1 special character");
        setCheck2('wrong-input');
        return;
      }else{

        setPError('');
        setCheck2('right-input');
      }
      
      if(!(pass1.trim() === pass2.trim())){

        setPError('passwords does not match');
        setCheck3('wrong-input');
        return;
      }else{

        setPError('');
        setCheck3('right-input');
      }
      const user = {

        fmail,
        pass1
      }
      console.log(pass1);
      const response = await fetch("http://localhost:8081/reset",{

      method: 'POST',
      body: JSON.stringify(user),
      headers: {

        'Content-Type':'application/json'
      }
      });
      

      navigate('/login');

    }
    return(
        
        <div>
          <NavBar />
        <div className='forget'>
              
              <div><img src={logo1} className='fpic'/></div>
              <div className='forget-form'>
               { mailcheck ? <div className='f-form1'>
                <h1 className='forget-heading'>Yo! Forget Your Password ?</h1>
                <h3 className='tassalli'>Don't worry just enter your email, we will provide the reset</h3>
                <input type='text' 
                className='fmail'
                id={check1}
                placeholder='Enter Your Email'
                onChange={handleFmailChange}
                value={fmail}
                ></input>
                {error && <div className='fmail-error'>{error}</div>}
                <button className='request-button' onClick={UpdatePasssword}>Send Request</button>
                <Link to='/login'><button className='btl'>Back To Login</button></Link>
                </div>: 
                <div className='f-form2'>
                     
                     <h1 className='forget-heading'>Yo! Forget Your Password ?</h1>
                     <h3 className='tassalli'>Don't worry just enter your email, we will provide the reset</h3>
                     <input type='password' 
                     className='fmail'
                     id={check2} 
                     placeholder='Enter New Password'
                     onChange={handlePass1}
                     value={pass1}
                     ></input>
                     <input type='password' 
                     className='fmail'
                     id={check3} 
                     placeholder='Re-Enter Password'
                     onChange={handlePass2}
                     value={pass2}
                     ></input>
                     {perror && <div className='fmail-error'>{perror}</div>}
                     <button className='request-button' onClick={ResetPass}>Update Password</button>
                     <Link to='/login'><button className='btl'>Back To Login</button></Link>
                     </div>
                     }
                
              </div>
              <div ><img src={logo2} className='fpic'/></div>
        </div>
        </div>
    );
}

export default Forgot;