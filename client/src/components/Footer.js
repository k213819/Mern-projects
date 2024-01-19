import './footer.css';
import people from '../assets/connecting.png';
import chatmate from '../assets/chatmate.png';
import videosharing from '../assets/videosharing.png';
import privacy from '../assets/privacy.png';
import chatbot from '../assets/chatbot.png';
import membership from '../assets/membership.png';
import search from '../assets/search.png';
import star from '../assets/star.png';
import React, {useState} from 'react';
import AnimatedtextWord from './AnimatedTextWord';
import AnimatedTextCharacter from './AnimatedTextCharacter'
import  { useContext, useEffect } from 'react';
import ScrollContext from './ScrollContext';


function Footer(){
    const { boxTop, setBoxTop } = useContext(ScrollContext);
    const [Content, setContent] = useState('false');
    const [Content2, setContent2] = useState('false');
    const [Content3, setContent3] = useState('false');
    const [Content4, setContent4] = useState('false');


    useEffect(() => {
      
    
        function checkBoxes(){
            const box=document.getElementsByClassName("journey-text");
            const boxtop=box[0].getBoundingClientRect().top;
            const box1=document.getElementsByClassName("peoplepic");
            const boxtop1=box1[0].getBoundingClientRect().top;
            const box2=document.getElementById("line1");
            const boxtop2=box2.getBoundingClientRect().top;
            const box3=document.getElementsByClassName("line2");
            const boxtop3=box3[0].getBoundingClientRect().top;
            const box4=document.getElementsByClassName("line3");
            const boxtop4=box4[0].getBoundingClientRect().top;
            const box5=document.getElementsByClassName("steps");
            const box6=document.getElementsByClassName("star1");
            const boxtop6=box6[0].getBoundingClientRect().top;
            const box7=document.getElementsByClassName("users");
            const boxtop7=box7[0].getBoundingClientRect().top;
        
           
          
        
        
        
            const maxBottom=window.innerHeight-105;
        
            if(boxtop<maxBottom){
                box[0].classList.remove("show");
            }
            
            if(boxtop1<maxBottom){
                box1[0].classList.add("show2");
            }
            if(boxtop2<maxBottom){
                setContent('true');
            }
            if(boxtop3<maxBottom){
                setContent2('true');
            }
            if(boxtop4<maxBottom){
                setContent3('true');
            }
            if(boxtop7<maxBottom){
                setContent4('true');
            }
        
        
            for(let i=0;i<box5.length;i++){
                const boxtop5=box5[i].getBoundingClientRect().top;
                if(boxtop5<maxBottom+200){
                    box5[i].classList.add("show3");
                }
            }
         
            if(boxtop6<maxBottom){
               box6[0].classList.add("show4");
               document.getElementsByClassName("star2")[0].classList.add("show4");
               document.getElementsByClassName("star3")[0].classList.add("show4");
        
            }
        
           }
        




        window.addEventListener('scroll',checkBoxes);
    
        return () => {
          window.removeEventListener('scroll', checkBoxes);
        };
      }, [setBoxTop]);


    
 
   
   
 
   


    return(

        <div className='Footer'>
            
             <div className='footer-comp-1' >
                     
             <h1 className='journey-text show '>A Journey to Feel the Life</h1>
          
             {}
             </div>
             <div className='footer-comp-2'>
                <div>
                <img src={people} className='peoplepic'/>
                </div>
                <div>
                   
                <h1 id='line1'>
                {Content==="true"?  <AnimatedTextCharacter text="Why Join Us?"/> : ''}  </h1>
                
                <p className='line2'>
                   {Content2==="true"? <AnimatedtextWord  text='We have  connected over million of people around the globe to find, chat and match with their right partners. Currently ranking #1 Matrimonial or dating website we had acheived 96% success stories.' />  :' '} 
                   </p>
                <p className='line3'>
                    { Content3==="true"?<AnimatedtextWord  text="Having religious beliefs and customs being respected as our top priority we provide you with membership packages in finding the best among the best. So join us, You might be the next! " /> : ' '}</p>
               
               
                </div>
             </div>
             <div className='footer-comp-3'> 
                <div className='container'>
                    <div className='steps'>
                        <img src={chatmate} className='service-1'/>
                        <h3>Chatmate</h3>
                        <p>You can chat with your partner 24/7, enable notifications and set privacy settings. Talk to more then one at the same time.</p>
                        <button className='button'>Readmore</button>
                    </div>
                    <div className='steps'>
                        <img src={videosharing} className='service-2'/>
                        <h3>videosharing</h3>
                        <p>Connect with your loved ones and talk face to face. Having fast digital network feel free from buffering. Latest features are embedded to make your experience worth</p>
                        <button className='button'>Readmore</button>
                    </div>
                    <div className='steps'>
                        <img src={privacy} className='service-3'/>
                        <h3>Privacy</h3>
                        <p>When it comes to online data transfer our privacy policies are the safest, using latest protected software and huge cyber-team your data is totally saved</p>
                        <button className='button'>Readmore</button>
                    </div>
                    <div className='steps'>
                        <img src={chatbot} className='service-4'/>
                        <h3>Assistant-Bot</h3>
                        <p>We offer youyour very own asssitant in finding your partner and helping you walkthrough our website.</p>
                        <button className='button'>Readmore</button>
                    </div>
                    <div className='steps'>
                        <img src={membership} className='service-5'/>
                        <h3>Membership</h3>
                        <p>Buying our premium member packages opens whole new features designed for improving user experience. </p>
                        <button className='button'>Readmore</button>
                    </div>
                    <div className='steps'>
                        <img src={search} className='service-6'/>
                        <h3>Search-filter</h3>
                        <p>Use our search and filter options to find the partner as per your desire, filter out religion, skin-tone etc as you like.</p>
                        <button className='button'>Readmore</button>
                    </div>
                </div>     
            </div>
            <div className='footer-comp-4'>
                <h3 className='client-text'><AnimatedTextCharacter text="Our User's Experience"></AnimatedTextCharacter></h3>
                <div className='new-container'>
                <div className='row'>
                    <div className='users'>
                    <img src={star} className='star1 '/>
                        <p className='comment1'>{Content4==="true"? <AnimatedtextWord text='" It has been a great expereince, in within 3 weeks i found the right match for myself "' ></AnimatedtextWord>:''}</p>
                        <p className='name1'>{Content4==="true"?<AnimatedTextCharacter  text="Shahzaib Mirza"></AnimatedTextCharacter>:""}</p>
                    </div>
                    <div className='users'>
                    <img src={star} className='star2 '/>
                        <p className='comment2'>{Content4==="true"? <AnimatedtextWord text='"Loved the features and prvacy along with premimum packages. Really amazing website "'></AnimatedtextWord> :""}</p>
                        <p className='name2'>{Content4==="true"? <AnimatedTextCharacter text="Arsal Jawaid" ></AnimatedTextCharacter>:""} </p>
                    </div>
                    <div className='users'>
                    <img src={star} className='star3 '/>
                        <p className='comment3'>{Content4==="true"?<AnimatedtextWord text='" A really amazing site to find your love interest in most easiest and halal way"'></AnimatedtextWord>:""}</p>
                        <p className='name3'>{Content4==="true"? <AnimatedTextCharacter text="Muhammad Khizir "></AnimatedTextCharacter>:""}</p>
                    </div>
                </div>
             </div>
             </div>
             <div className='footer5'>
                <div className='foot-container'>
                    <div className='foot-row'>
                        <div className='footer-col'>
                            <h4>company</h4>
                            <ul>
                                <li><a href='#'>Our team</a></li>
                                <li><a href='#'>Programs offered</a></li>
                                <li><a href='#'>Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4>global partners</h4>
                            <ul>
                                <li><a href='#'>Tinder</a></li>
                                <li><a href='#'>Muslima</a></li>
                                <li><a href='#'>Muzz</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4>Accolades</h4>
                            <ul>
                                <li><a href='#'>Ranking</a></li>
                                <li><a href='#'>Awards</a></li>
                                <li><a href='#'>Our Gold</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4>follow us</h4>
                            <div className='social-links'>
                                <a href='#'><i className='fab fa-facebook-f'></i></a>
                                <a href='#'><i className='fab fa-twitter'></i></a>
                                <a href='#'><i className='fab fa-instagram'></i></a>
                                <a href='#'><i className='fab fa-linkedin -in'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            {/*  {window.addEventListener('scroll',checkBoxes) } */}
             
          
       
        </div>
     
    );
  
}

export default Footer;