import './SIgnUp.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRepass] = useState('');
    const [dob, setDOB] = useState('');
    const [occupation, setOccupation] = useState('');
    const [company, setCompany] = useState('');
    const [nationality, setNationality] = useState('');
    const [city, setCity] = useState('');
    const [cast, setCast] = useState('');
    const [degree, setDegree] = useState('');
    const [institute, setInstitute] = useState('');
    const [disease, setDisease] = useState('');
    const [description, setDiscp] = useState('');
    const [photo, setPhoto] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
    const [error4, setError4] = useState('');
    const [error5, setError5] = useState('');
    const [error6, setError6] = useState('');
    const [error7, setError7] = useState('');
    const [error8, setError8] = useState('');
    const [error9, setError9] = useState('');
    const [error10, setError10] = useState('');
    const [error11, setError11] = useState('');
    const [error12, setError12] = useState('');
    const [check1, setCheck1] = useState('right-input');
    const [check2, setCheck2] = useState('right-input');
    const [check3, setCheck3] = useState('right-input');
    const [check4, setCheck4] = useState('right-input');
    const [check5, setCheck5] = useState('right-input');
    const [check6, setCheck6] = useState('right-input');
    const [check7, setCheck7] = useState('right-input');
    const [check8, setCheck8] = useState('right-input');
    const [check9, setCheck9] = useState('right-input');
    const [check10, setCheck10] = useState('right-input');
    const [check11, setCheck11] = useState('right-input');
    const [check12, setCheck12] = useState('right-input');

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePassChange = (e) => {
        setPass(e.target.value);
    }

    const handleRePassChange = (e) => {
        setRepass(e.target.value);
    }

    const handleDateChange = (e) => {
        setDOB(e.target.value);
    }

    const handleOccupationChange = (e) => {
        setOccupation(e.target.value);
    }

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    }

    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleCastChange = (e) => {
        setCast(e.target.value);
    }

    const handleDegreeChange = (e) => {
        setDegree(e.target.value);
    }

    const handleInstituteChange = (e) => {
        setInstitute(e.target.value);
    }

    const handleDiseaseChange = (e) => {
        setDisease(e.target.value);
    }

    const handleDiscpChange = (e) => {
        setDiscp(e.target.value);
    }

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreviewUrl(null);
        }
    };

    const AddUser = async (event) => {

        event.preventDefault();

        const gender = document.getElementById('gender').value;
        const religion = document.getElementById('religion').value;
        const status = document.getElementById('status').value;
        const single = document.getElementById('single').value;
        const children = document.getElementById('children').value;
        const smoking = document.getElementById('smoking').value;
        const drinking = document.getElementById('drink').value;
        const mood = document.getElementById('mood').value;

        if (name.trim() === '') {
            setError1('please enter your name');
            setCheck1('wrong-input');
            return;
        } else {

            setError1('');
            setCheck1('right-input');
        }

        if (pass.trim() === '') {
            setError2('please enter a password');
            setCheck2('wrong-input');
            return;
        } else if (pass.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
            setError2('atleast 8 and 1 special character');
            setCheck2('wrong-input');
            return;
        } else {

            setError2('');
            setCheck2('right-input');
        }

        if (repass.trim() === '') {
            setError3('please re-enter your password');
            setCheck3('wrong-input');
            return;
        } else {

            setError3('');
            setCheck3('right-input');
        }

        if (pass !== repass) {
            setError3('passwords do not match');
            setCheck3('wrong-input');
            return;
        } else {
            setError3('');
            setCheck3('right-input');
        }

        if (email.trim() === '') {
            setError4('please enter your email');
            setCheck4('wrong-input');
            return;
        } else {

            setError4('');
            setCheck4('right-input');
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError4('please enter a valid email');
            setCheck4('wrong-input');
            return;
        } else {
            setError4('');
            setCheck4('right-input');
        }
        if (occupation.trim() === '') {

            setError5('please enter your occupation');
            setCheck5('wrong-input');
            return;

        } else {

            setError5('');
            setCheck5('right-input');
        }
        if (dob.trim() === '') {

            setError6('please select your date of birth');
            setCheck6('wrong-input');
            return;

        } else {

            setError6('');
            setCheck6('right-input');
        }

        if (company.trim() === '') {

            setError7('please enter your institute');
            setCheck7('wrong-input');
            return;

        } else {

            setError7('');
            setCheck7('right-input');
        }
        if (nationality.trim() === '') {

            setError8('please enter your city');
            setCheck8('wrong-input');
            return;

        } else {

            setError8('');
            setCheck8('right-input');
        }
        if (city.trim() === '') {

            setError9('please your living area');
            setCheck9('wrong-input');
            return;

        } else {

            setError9('');
            setCheck9('right-input');
        }
        if (cast.trim() === '') {

            setError10('please enter your cast');
            setCheck10('wrong-input');
            return;

        } else {

            setError10('');
            setCheck10('right-input');
        }

        if (degree.trim() === '') {

            setError11('please enter your degree');
            setCheck11('wrong-input');
            return;

        } else {

            setError11('');
            setCheck11('right-input');
        }

        if (institute.trim() === '') {

            setError12('please enter your institute');
            setCheck12('wrong-input');
            return;

        } else {

            setError12('');
            setCheck12('right-input');
        }

        const user = {
            
            email,
            name,
            pass,
            religion,
            gender,
            dob,
            occupation,
            company,
            nationality,
            city,
            cast,
            degree,
            institute,
            status,
            single,
            children,
            smoking,
            drinking,
            mood,
            disease,
            description
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('photo', photo);

        const PhotoSend = await fetch("http://localhost:8081/photo", {

            method: 'POST',
            body: formData
        });

        const response = await fetch("http://localhost:8081/", {

            method: 'POST',
            body: JSON.stringify(user),
            headers: {

                'Content-Type': 'application/json'
            }

        });

    }

    return (

        <div>
            <NavBar />
            <div className='signup-head'>

                <div className="background-image-signup"></div>
                <div className="background-overlay"></div>
            </div>
            <div className='signup-head-content'>

                <h1 className='signup-heading'>Just a Step Away from a new Innovation in your life</h1>
                <p className='signup-para'>Discover the perfect match for your heart's desires on our cutting-edge
                    dating platform. Join now to embark on an exhilarating journey of romance,
                    where meaningful connections await. Our user-friendly interface,
                    advanced matching algorithms, and diverse community ensure that you'll
                    find someone who truly captures your imagination. Don't wait any longer
                    SignUp today and unlock a world of endless possibilities in the realm of love.</p>
            </div>
            <div className='additional-container'>
                <div className='additional-backgroundimage'></div>
            <div className='signup-box'>
                <form onSubmit={AddUser}>
                    <div className='seperate'>
                        <h3 className='seperator'>Personal Detailes:</h3>
                    </div>
                    <div className='signup-input'>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Full Name</label>
                            <input type='text'
                                className='signup-field'
                                placeholder='Enter Username'
                                value={name}
                                onChange={handleNameChange}
                                id={check1}
                            ></input>
                            {error1 && <div className='signup-error'>{error1}</div>}
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Password</label>
                            <input type='password'
                                className='signup-field'
                                placeholder='Enter Password'
                                value={pass}
                                onChange={handlePassChange}
                                id={check2}
                            ></input>
                            {error2 && <div className='signup-error'>{error2}</div>}
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Re-Enter Password</label>
                            <input type='password'
                                className='signup-field'
                                placeholder='Re-Enter Password'
                                value={repass}
                                onChange={handleRePassChange}
                                id={check3}
                            ></input>
                            {error3 && <div className='signup-error'>{error3}</div>}
                        </div>
                    </div>
                    <div className='signup-input'>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Email</label>
                            <input type='text'
                                className='signup-field'
                                placeholder='Enter Your Email'
                                value={email}
                                onChange={handleEmailChange}
                                id={check4}
                            ></input>
                            {error4 && <div className='signup-error'>{error4}</div>}
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Religion</label>
                            <select
                                className='signup-field'
                                id='religion'
                            >
                                <option>Muslim</option>
                                <option>Shia</option>
                                <option>Christian</option>
                                <option>Jewish</option>
                                <option>Hindu</option>
                                <option>Buddhist</option>
                                <option>Aethist</option>
                            </select>
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Gender</label>
                            <select
                                className='signup-field'
                                id='gender'
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>LGBTQIA+++</option>
                            </select>
                        </div>
                    </div>

                    <div className='signup-input'>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Date of Birth</label>
                            <input type='date'
                                className='signup-field'
                                placeholder='Enter Date of Birth'
                                value={dob}
                                onChange={handleDateChange}
                                id={check5}
                            ></input>
                            {error5 && <div className='signup-error'>{error5}</div>}
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Occupation</label>
                            <input type='text'
                                className='signup-field'
                                placeholder='Enter Your Occupation'
                                value={occupation}
                                onChange={handleOccupationChange}
                                id={check6}
                            ></input>
                            {error6 && <div className='signup-error'>{error6}</div>}
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Company</label>
                            <input type='text'
                                className='signup-field'
                                placeholder='Enter Company Name'
                                value={company}
                                onChange={handleCompanyChange}
                                id={check7}
                            ></input>
                            {error7 && <div className='signup-error'>{error7}</div>}
                        </div>
                    </div>
                    <div className='signup-input'>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Country</label>
                            <input type='text'
                                className='signup-field'
                                placeholder='Enter Country Name'
                                value={nationality}
                                onChange={handleNationalityChange}
                                id={check8}
                            ></input>
                            {error8 && <div className='signup-error'>{error8}</div>}
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>City</label>
                            <input type='text'
                                className='signup-field'
                                placeholder='Enter City'
                                value={city}
                                onChange={handleCityChange}
                                id={check9}
                            ></input>
                            {error9 && <div className='signup-error'>{error9}</div>}
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Cast</label>
                            <input type='text'
                                className='signup-field'
                                placeholder='Enter Your Cast'
                                value={cast}
                                onChange={handleCastChange}
                                id={check10}
                            ></input>
                            {error10 && <div className='signup-error'>{error10}</div>}
                        </div>
                    </div>
                    <div className='seperate'>
                        <h3 className='seperator'>Education Detailes:</h3>
                    </div>
                    <div className='signup-input'>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Degree</label>
                            <input type='text'
                                className='signup-field'
                                placeholder='Current or Last Degress'
                                value={degree}
                                onChange={handleDegreeChange}
                                id={check11}
                            ></input>
                            {error11 && <div className='signup-error'>{error11}</div>}
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Institute</label>
                            <input type='text'
                                className='signup-field'
                                placeholder='Institute Name'
                                value={institute}
                                onChange={handleInstituteChange}
                                id={check12}
                            ></input>
                            {error12 && <div className='signup-error'>{error12}</div>}
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Status</label>
                            <select
                                className='signup-field'
                                id='status'
                            >
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>
                    <h3 className='seperator'>Status and Habits:</h3>
                    <div className='signup-input'>
                        <div className='signup-input-unit'>

                            <label className='signup-label'>Martial Status</label>
                            <select
                                className='signup-field selector'
                                id='single'
                            >
                                <option>Married</option>
                                <option>Single</option>
                                <option>Widow</option>
                            </select>
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Have Children</label>
                            <select
                                className='signup-field selector'
                                id='children'
                            >
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Do Smoking ?</label>
                            <select
                                className='signup-field selector'
                                id='smoking'
                            >
                                <option>Yes</option>
                                <option>No</option>
                                <option>Occasionaly</option>
                            </select>
                        </div>

                    </div>
                    <div className='signup-input'>
                        <div className='signup-input-unit'>

                            <label className='signup-label'>Do Drinking ?</label>
                            <select
                                className='signup-field selector'
                                id='drink'
                            >
                                <option>Yes</option>
                                <option>No</option>
                                <option>Occasionaly</option>
                            </select>
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Mood, Most of the Time</label>
                            <select
                                className='signup-field selector'
                                id='mood'
                            >
                                <option>Happy: I feel happy most of the time.</option>
                                <option>Sad: I feel sad most of the time.</option>
                                <option>Anxious: I feel anxious most of the time.</option>
                                <option>Caring: I feel caring about people and things</option>
                                <option>Tired: I feel tired most of the time.</option>
                                <option>Excited: I feel excited most of the time.</option>
                                <option>Disappointed: I feel disappointed most of the time.</option>
                                <option>Lonely: I feel lonely most of the time.</option>
                                <option>Emotional: I feel emotional most of the time.</option>
                                <option>Healthy: I feel healthy most of the time.</option>
                                <option>Numb: I feel emotionally numb most of the time.</option>
                            </select>
                        </div>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Any Disease</label>
                            <input type='text'
                                placeholder='Any Disease or Disability (Optional)'
                                className='signup-field'
                                onChange={handleDiseaseChange}
                                value={disease}
                            >
                            </input>
                        </div>

                    </div>
                    <h3 className='seperator'>Personal Description:</h3>
                    <div className='signup-input'>
                        <div className='signup-input-unit'>
                            <label className='signup-label'>Descrription</label>
                            <textarea
                                id='textarea'
                                rows='10'
                                cols='10'
                                onChange={handleDiscpChange}
                                value={description}
                                placeholder='Enter Your Hobbies, Choices, Traits, or anything you want to tell about you. (Optional)'
                            ></textarea>
                        </div>
                    </div>
                    <div className='preview-container'>
                        {imagePreviewUrl && <img src={imagePreviewUrl} alt='Preview' style={{ width: '200px', height: '200px', objectFit: 'cover' }} />}

                    </div>
                    <label className='pic-label'>Upload Your Picture: </label>
                    <input type="file" accept="image/jpeg, image/png, image/jpg" id='photo' onChange={handlePhotoChange}></input>
                    <div className='submit-button-container'>
                        <button type='submit' className='signup-button'>Sign Up</button>
                        <Link to='/'><button className='cancel-button'>cancel</button></Link>
                    </div>
                </form>

            </div>
            
            </div>

        </div>
    );

}
export default SignUp;