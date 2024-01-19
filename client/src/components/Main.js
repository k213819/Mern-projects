import './main.css';
import Card from './Card';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';

function Main(props) {

  const [card, setCard] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  const navigate = useNavigate();
  const StoredData = localStorage.getItem("user");
  const data = JSON.parse(StoredData);
  const fetchComponents = async () => {

    const response = await fetch('http://localhost:8081/card');
    const data = await response.json();
    const response2 = await fetch('http://localhost:8081/getphoto');
    const data2 = await response2.json();
    const data1 = [...data]
    const combined = data1.map((user1) => {

      const user2 = data2.find((user2) => user2.email === user1.email);

      return {
        ...user1,
        ...(user2 && { photo: user2.path }),
      };
    });

    setCard(combined);
    setFilteredCards(combined);

  };
  useEffect(() => {
    fetchComponents();
  }, []);

  const handleSearch = (filteredProfiles) => {
    console.log('Filtered Profiles:', filteredProfiles);
    setFilteredCards(filteredProfiles);
  };

  const Logout = () =>{

       navigate('/');
  }

  return (

    <div>
      <div className='main-page'>

        <div className='user-panel'>
                 
                 <div className='up-1'>
                <img src={data.photoPath} className='up-img'></img>
                 <h2 className='up-name'>{data.fullname}</h2>
                 <h4 className='up-email'>{data.email}</h4>
               <button className='up-logout' onClick={Logout}>Logout</button>
                 </div>

                 <div className='up-2'>
                 <button className='up-btn'>Emails</button>
                 <button className='up-btn'>Saved Profiles</button>
                 <button className='up-btn'>Reviews</button>
                 </div>

        </div>
        <div className='cards-panel'>
              
        <div className='search-bar'>
          <Search cards={card} handleSearch={handleSearch} />
        </div>
         
        <div className='cards-container'>
          {filteredCards.map((card) => (
            <Card
              key={card.email}
              name={card.fullname}
              email={card.email}
              age={card.dob}
              city={card.city}
              area={card.area}
              religion={card.religion}
              dob={card.dob}
              occupation={card.occupation}
              company={card.company}
              cast={card.caste}
              degree={card.deg}
              status={card.status}
              institute={card.institute}
              children={card.children}
              smoking={card.smoking}
              drinking={card.drinking}
              single={card.marital_status}
              mood={card.mood}
              description={card.description}
              photo={card.photo}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;