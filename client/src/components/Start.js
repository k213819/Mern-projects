import './start.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';

function Start(){

    return(
        
        <div>
            <NavBar />  
        <div className='start-container'>   
                  <div className="background-image"></div>
                  <div className="background-overlay"></div>
                  <div className='start-content'>
                  <h4 className='start-discp-1'>A step away to know what you deserved</h4>
                  <h1 className='start-discp-2'>Get noticed for who you are, not what you look</h1>
                  <Link to='/login'><button className='single'>Find Someone Now</button></Link>
                  </div>   
        </div>
        <Footer />
        </div>
        
    );
}

export default Start;