import './Search.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CountryFlag from 'react-country-flag';
import { getCode } from 'iso-3166-1-alpha-2';

function Search(props){

    function calculateAge(dateOfBirth){
        const dob = new Date(dateOfBirth);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - dob.getFullYear();
        if(currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth === dob.getMonth() && currentDate.getDate() < dob.getDate())){
            return age - 1;
        }
        return age;
    }

    const [selectedReligion,setSelectedReligion] = useState('');
    const [selectedNationality,setSelectedNationality] = useState('');
    const [selectedAge,setSelectedAge] = useState('');
    
    const handleSearch= () => {
        console.log('Before filtering:', props.cards);
        const ageLowerLimit = selectedAge !== '' ? parseInt(selectedAge) - 2 : -Infinity;
        const ageUpperLimit = selectedAge !== '' ? parseInt(selectedAge) + 3 : Infinity;
        const filtered = props.cards.filter((card)=>{
            const religionMatch = selectedReligion === '' || card.religion === selectedReligion;
            const nationalityMatch = selectedNationality === '' || card.city === selectedNationality;
            console.log('Selected Nationality:', selectedNationality);
            console.log('Card:', card);
            console.log('Nationality Match:', nationalityMatch);
            const profileAge = calculateAge(card.dob);
            const ageMatch = ageLowerLimit <= profileAge && profileAge <= ageUpperLimit;
            return religionMatch && nationalityMatch && ageMatch;
        });
        console.log('After filetering:', filtered);
        props.handleSearch(filtered);
    };
   const StoredData = localStorage.getItem("user");
   const data = JSON.parse(StoredData);
   const navigate = useNavigate();
   const getISOCode = (countryName) => {
    const isoCode = getCode(countryName);
    return isoCode ? isoCode : null;
  };
  const countryName = data.nationality;
  const isoCode = getISOCode(countryName);
  
  const logout = () =>{
      
      localStorage.clear();
      navigate('/');
  }

    return(
        <div>
        <div className='search-container'>
            <div className='search-row'>
            {<div className='select-box'>
            <label className='option'>Nationality:</label>
                <select value={selectedNationality} onChange={event=>setSelectedNationality(event.target.value)}>
                    <option>Canada</option>
                    <option>Pakistan</option>
                    <option>China</option>
                    <option>United States</option>
                    <option>Turkey</option>
                    <option>Russia</option>
                    <option>Australia</option>
                    <option>India</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>Switzerland</option>
                    <option>United Kingdom</option>
                </select>
                <span className='arrow'></span>
    </div>}
            <div className='select-box'>
            <label className='option'>Religon:</label>
                <select value={selectedReligion} onChange={event=>setSelectedReligion(event.target.value)}>
                        <option>Muslim</option>
                        <option>Shia</option>
                        <option>Christian</option>
                        <option>Jewish</option>
                        <option>Hindu</option>
                        <option>Buddhist</option>
                        <option>Aethist</option>
                </select>
                <span className='arrow'></span>
            </div>
            <div className='select-box'>
            <label className='option'>Age:</label>
            <input type='number' min='18' max='50' placeholder='Enter Age Limit' id='age' value={selectedAge} onChange={event=>setSelectedAge(event.target.value)}/>
            <span className='arrow'></span>
</div>
            <div className='select-box'>
                <button className='button2' onClick={handleSearch}>Search</button>
            </div>
        </div>
        </div>
            </div>
    );
}

export default Search;

