import './profile.css';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import NavBar from './NavBar';

function Profile(){
    
    const location = useLocation();
    const {profile} = location.state;
    const [percentage, setPercentage] = useState(0);
    const [isContact,setContact] = useState(false);
    
    const navigate = useNavigate();

    const ContactClicked = (e) => {

        setContact(true);
    }
    
    const CancelContact = (e) => {

        setContact(false);
    }
    const ContactPerson = async() =>{
        
        const StoredData = localStorage.getItem("user");
        const user = JSON.parse(StoredData);
        const ContactMessage = document.getElementById('message').value;
        const templateParams = {

           name: profile.name,
           person: user.fullname,
           reciever: profile.email,
           message: ContactMessage,
           occupation: user.occupation,
           company: user.company,
           religion: user.religion,
           country: user.nationality,
           city: user.city,
           dob: user.dob,
           single: user.single,
           email: user.email
        };

        emailjs.send(
            "service_bwk1mya",
            "template_fju25nf",
            templateParams,
            "sK_ejLa3HG-WXvIUD"
          );
        setContact(false);
        
        let SenderEmail = user.email;
        let SenderName = user.fullname;
        let RecieverEmail = profile.email;
        let RecieverName = profile.name;
        let Message = ContactMessage;

        const mail = {
           
            SenderEmail,
            SenderName,
            RecieverEmail,
            RecieverName,
            Message
        }
        
        const response = await fetch('http://localhost:8081/email',{

             method: 'POST',
             body: JSON.stringify(mail),
             headers: {
                'Content-Type':'application/json'
             }
        });
    }
    const StoredData = localStorage.getItem("user");
    const data = JSON.parse(StoredData);
    useEffect(() => {
    const religion = data.religion;
    const occupation = data.occupation;
    const company = data.company;
    const nationality = data.country;
    const city = data.city;
    const cast = data.cast;
    const single = data.single;
    const smoking = data.smoking;
    const drinking = data.drinking;
    const dob = data.dob;
    var totalscore = 0;
    if(religion===profile.religion){
        totalscore = totalscore + 10;
    }if(occupation===profile.occupation ){
        totalscore = totalscore + 10;
    }if(nationality===profile.country){
        totalscore = totalscore + 10;
    }if(company === profile.company){
        totalscore = totalscore + 10;
    }if(city === profile.city){
        totalscore = totalscore + 10;
    }if(cast === profile.cast){
        totalscore = totalscore + 10;
    }if(single === profile.single){
        totalscore = totalscore + 10;
    }if(smoking===profile.smoking){
        totalscore = totalscore + 10;
    }if(drinking === profile.drinking){
        totalscore = totalscore + 10;
    }if(dob === profile.dob){
        totalscore = totalscore + 10;
    }
    const randomPercentage = totalscore;
    setPercentage(randomPercentage);},[]);
    
    
    const ChatHer = () =>{
        
        let name = profile.name;
        let image = profile.image;
        let occupation = profile.occupation;
        let discp = profile.description;

        const chatProfile = {

            name,
            image,
            occupation,
            discp

        }
        navigate('/chat', {state:{chatProfile}});
    }
    return(
          
        <div>
            <NavBar />
        <div className={`profile ${isContact ? 'blurred' : ''}`}>
            {isContact && 
                <div className='contact-form'>
                       
                       <div>
                             <textarea cols='20' rows='10' className='contact-message' id='message' placeholder=' Any Message you want to convey...'></textarea>
                       </div>
                       <div>
                              <button className='send-contact' onClick={ContactPerson}>Send</button>
                              <button className='cancel-contact' onClick={CancelContact}>Cancel</button>
                       </div>
                       <div>
                           <h4 className='contact-note'>This will send an Email to the person.</h4>
                       </div>
                </div>}
            <div className={`profile-content ${isContact ? 'blurred' : ''}`}>
            <div className='large-component'>
                <div className='large-compo1'>
                <img src={profile.image} className='u-image'/>
                <div className='u-name'>{profile.name}</div>
                <div className='u-home'>{profile.country},{profile.city}</div>
                </div>
                <div className='u-about-box'>
                <div className='u-about'>{profile.description}</div>
                </div>
                
                <div className='c-buttons'>
                    <div className='u-button1'><button onClick={ContactClicked}><i className='fas fa-phone'></i>Contact</button></div>
                    <div className='u-button2'><button onClick={ChatHer}><i className='fas fa-comment'></i>Chat</button></div>
                    <div className='u-button3'><button><i className='fas fa-share'></i>Share</button></div>
                    <div className='u-button4'><button><i className='far fa-save'></i>Save</button></div>
                </div>
            </div>
            <div className='small-components'>
                <div className='small-compo1'>
                    <h3>Matchability</h3>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${percentage}%`}}></div>
                        </div>
                        <div className="progress-label">{percentage}%</div>
                        <div className='progress-key'>
                            <ul>Above 80%: You found your match</ul>
                            <ul>50%-80% : An ordinary match</ul>
                            <ul>Below 50%: Not made for you</ul>
                        </div>
                </div>
                <div className='small-compo2'>
                    <h3><i className='fas fa-user'></i>Personal Details</h3>
                    <ul><i className='fas fa-birthday-cake'></i>DoB: {profile.dob}</ul>
                    <ul><i className='fas fa-praying-hands'></i>Religion: {profile.religion}</ul>
                    <ul><i className='fas fa-gem'></i>Cast: {profile.cast}</ul>
                    <ul><i className='fas fa-ring'></i>Marital-Status: {profile.single}</ul>
                    <ul><i className='fas fa-child'></i>Children: {profile.children}</ul>
                </div>
                <div className='small-compo3'>
                    <h3><i className='fas fa-briefcase'></i>Job details</h3>
                    <ul><i className='fas fa-building'></i>Company: {profile.company}</ul>
                    <ul><i className='fas fa-user-tie'></i>Occupation: {profile.occupation}</ul>
                    <div className='separator-compo3'></div>
                    <h3><i className='fas fa-graduation-cap'/>Education Details</h3>
                    <ul><i className='fas fa-graduation-cap'></i>Degree: {profile.degree}</ul>
                    <ul><i className='fas fa-university'></i>Institute: {profile.institute}</ul>
                    <ul><i className='fas fa-user-graduate'></i>Status: {profile.status}</ul>
                </div>
                <div className='small-compo4'>
                    <h3><i className='fas fa-heartbeat'></i>Health-Details</h3>
                    <ul><i className='fas fa-smoking'></i>Smoking: {profile.smoking}</ul>
                    <ul><i className='fas fa-cocktail'></i>Drinking: {profile.drinking}</ul>
                    <div className='separator-compo4'></div>
                    <ul><i className='fas fa-virus'></i>Disease: {profile.disease}</ul>
                </div>
                </div>
            </div>
        </div>
        </div>
    );

}

export default Profile;