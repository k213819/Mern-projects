import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar(){
    
    const auth = localStorage.getItem("user");

    const logout = () => {

        localStorage.clear();
    }
    return(

        <div>
            <div className='title-container'>
                <div className='nav-1'><h1 className='title'>Single2Mingle</h1></div>
                <div className='nav-2'>{auth?
             <Link to="/">
             <button className='about'>Home</button>
             </Link>:<Link to="/">
             <button className='about'>Home</button>
             </Link>}
             <Link to="/">
             <button className='about'>Members</button>
             </Link>
             <Link to="/about">
             <button className='about'>About Us</button>
             </Link>
             </div>  
                <div className='nav-3'>
             <Link to="/login">
             <button className='about' id='login-button'>Login</button>
             </Link>
             <Link to="/pbachelor">
             <button className='registration-button'>Register</button>
             </Link>
            </div>
             
             </div>
        </div>
    );
}

export default NavBar;