import './card.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const [name, setName] = useState(props.name);
  const [dob,setDOB] = useState(props.dob);
  const [email,setEmail] = useState(props.email);
  const [country, setNationality] = useState(props.city);
  const [city, setCity] = useState(props.area);
  const [religion, setReligion] = useState(props.religion);
  const [occupation,setKaam] = useState(props.occupation);
  const [company,setCompany] = useState(props.company);
  const [degree,setParhai] = useState(props.degree);
  const [institute,setInst] = useState(props.institute); 
  const [status,setStatus] = useState(props.status);
  const [cast,setCast] = useState(props.cast);
  const [single, setSingle] = useState(props.single);
  const [children,setChild] = useState(props.children);
  const [smoking,setSmoke] = useState(props.smoking);
  const [drinking,setDrink] = useState(props.drinking);
  const [mood,setMood] = useState(props.mood);
  const [description, setDesc] = useState(props.description);
  const [formattedDOB, setFormattedDOB] = useState("");
  const [image, setImage] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    if (props.photo) {
      setImage(props.photo);
    } else {
      setImage(props.photo);
    }

    if (props.dob) {
      const dobDate = new Date(props.dob);
      const day = String(dobDate.getDate()).padStart(2, '0');
      const month = String(dobDate.getMonth() + 1).padStart(2, '0');
      const year = dobDate.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;
      setFormattedDOB(formattedDate);
    }
  }, [props.photo], [props.dob]);
  const TextLimiter = (text, limit) => {
    if (text && text.split(' ').length > limit) {
      const words = text.split(' ');
      const LimitedText = words.slice(0, limit).join(' ');
      return LimitedText + '...';
    }
    return text;
  };

  const handleViewClick = () => {

    const profile = {

      name,
      email,
      country,
      city,
      religion,
      dob,
      occupation,
      company,
      cast,
      degree,
      institute,
      status,
      smoking,
      drinking,
      single,
      children,
      mood,
      description,
      image
    }
    console.log("Profile of User: ",profile);
    
     navigate('/profile',{state: {profile}});
  }
  
  return (
    <div className='user-card'>
      <div style={{ display: 'none' }}>{email}</div>
      <div className='img-container'>
        <img src={image} className='user-image'/>
      </div>
      <div className='info-1'>{name}</div>
      <div className='info-2'>Date of Birth: {formattedDOB}</div>
      <div className='info-2'>{country}/{city}</div>
      <div className='info-2'>{religion} , {single}</div>
      <div className='info-3'>{TextLimiter(description, 22)}</div>
      <div className='view-container'>
        <h4 className='card-occupation'>{occupation} at {company}</h4>
        <button className='view-button' onClick={handleViewClick}>View</button>
      </div>
    </div>
  );
}

export default Card;