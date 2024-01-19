import React, { useState } from "react";
import "./Registration.css";
import NavBar from "./NavBar";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
      const regnavigate = useNavigate();
      const [regData, setRegdata] = useState({
            email: "",
            name: "",
            password: "",
            religion: "Select an option",
            caste: "",
            confirmPassword: "",
            city: "",
            area: "",
            searchingfor: "Select an option",
            domain: "",
            occupation: "",
            company: "",
            description: "",
      });
      const [regerrors, setRegerrors] = useState({});
      const handleRegChange = (e) => {
            const { id, value } = e.target;
            setRegdata((prevData) => ({
                  ...prevData,
                  [id]: value,
            }));
      };

      const validateReg = () => {
            const newErrors = {};

            if (!regData.name.trim()) {
                  newErrors.name = "Name is required";
            }
            else if (regData.religion.trim() === "Select an option") {
                  newErrors.religion = "Religion is required";
            }
            else if (!regData.caste.trim()) {
                  newErrors.caste = "Caste is required";
            }
            else if (!regData.email.trim()) {
                  newErrors.email = "Email is required";
            } else if (!isvalidEmail(regData.email)) {
                  newErrors.email = "Invalid email format";
            }
            else if (!regData.password.trim()) {
                  newErrors.password = "Password is required";
            }
            else if (!regData.confirmPassword.trim()) {
                  newErrors.confirmPassword = "Password is required";
            }
            else if (regData.password !== regData.confirmPassword) {
                  newErrors.confirmPassword = "Passwords do not match";
            }
            else if (regData.city.trim() === "Select an option") {
                  newErrors.city = "City is required";
            }
            else if (!regData.area.trim()) {
                  newErrors.area = "Area is required";
            }
            else if (regData.searchingfor.trim() === "Select an option") {
                  newErrors.searchingfor = "For whom is required";
            }
            else if (!regData.company.trim()) {
                  newErrors.company = "Company is required";
            }
            else if (!regData.occupation.trim()) {
                  newErrors.occupation = "occupation is required";
            }
            else if (!regData.domain.trim()) {
                  newErrors.domain = "Domain is required";
            }
            else if (!regData.description.trim()) {
                  newErrors.description = "Description is required";
            }

            setRegerrors(newErrors);
            return Object.keys(newErrors).length === 0;
      };
      const isvalidEmail = (email) => {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(email);
      };
      const data_server = async (Parent) => {
            try {
                  const responce = await fetch("http://localhost:8081/parent", {
                        method: 'POST',
                        body: JSON.stringify(Parent),
                        headers: {
                              'Content-Type': 'application/json'
                        },
                  });
                  if (responce.ok) {
                        console.log("Registration successful");
                        regnavigate("/login");
                  } else {
                        console.error("registration failed.");
                  }
            } catch (error) {
                  console.error("Erorr", error);
            }
      };
      const handleRegSubmit = async (e) => {
            e.preventDefault();
            const isFormValid = validateReg();
            if (isFormValid) {
                  const gender = regData.searchingfor === "son" ? "M" : "F";
                  const Parent = {
                        email: regData.email,
                        name: regData.name,
                        pass: regData.password,
                        religion: regData.religion,
                        caste: regData.caste,
                        city: regData.city,
                        area: regData.area,
                        searchingfor: gender,
                        domain: regData.domain,
                        occupation: regData.occupation,
                        company: regData.company,
                        description: regData.description,
                        gender: gender,
                  };
                  await data_server(Parent);
            } else {
                  console.log("Form validation failed. Please check the errors.");
            }
      };
      return (
            <div>
                  <NavBar />
                  <div className="registration-intro">
                        <div className="registration-intro-text">
                              <h1 className="reg-title">Perfect Match for Your Loved One</h1>
                              <p className="reg-text">We understand the importance of finding a life partner for your son or daughter.</p>
                              <p className="reg-text">We will assist you in this important journey towards lasting happiness and togetherness.</p>
                              <p className="reg-text">Register as a parent and let us help you discover the ideal match for your loved one.</p>
                              <p className="reg-text">Fostering meaningful relationships and facilitating lifelong connections.</p>
                        </div>
                  </div>
                  <div className="registration-section3">
                        <form className="personal-form">
                              <h2 className="personal-details">Registration Details</h2>
                              <div className="personal-line">
                                    <div className="personal-col">
                                          <label htmlFor="name">Name</label>
                                          <input type="text" id="name" className={`input-field ${regerrors.name ? "invalid" : ""}`} placeholder="Enter your name" value={regData.name} onChange={handleRegChange} />
                                          {regerrors.name && (<p className="regerror">{regerrors.name}</p>)}
                                    </div>
                                    <div className="personal-col">
                                          <label htmlFor="religion">Religion</label>
                                          <select id="religion" className={`input-field ${regerrors.religion ? "invalid" : ""}`} value={regData.religion} onChange={handleRegChange}>
                                                <option value="Select an option">Select an option</option>
                                                <option value="christian">Christian</option>
                                                <option value="hindu">Hindu</option>
                                                <option value="buddhist">Buddhist</option>
                                                <option value="muslim">Muslim</option>
                                                <option value="shia">Shia</option>
                                                <option value="Jewish">Jewish</option>
                                                <option value="Atheist">Aethist</option>
                                          </select>
                                          {regerrors.religion && (
                                                <p className="regerror">{regerrors.religion}</p>
                                          )}
                                    </div>
                                    <div className="personal-col">
                                          <label htmlFor="caste">Caste</label>
                                          <input type="text" id="caste" className={`input-field ${regerrors.caste ? "invalid" : ""}`} placeholder="Enter your caste" value={regData.caste} onChange={handleRegChange} />
                                          {regerrors.caste && (<p className="regerror">{regerrors.caste}</p>)}
                                    </div>
                              </div>
                              <div className="personal-line">
                                    <div className="personal-col">
                                          <label htmlFor="email">Email</label>
                                          <input type="email" id="email" className={`input-field ${regerrors.email ? "invalid" : ""}`} placeholder="Enter your email" value={regData.email} onChange={handleRegChange} />
                                          {regerrors.email && (<p className="regerror">{regerrors.email}</p>)}
                                    </div>
                                    <div className="personal-col">
                                          <label htmlFor="password">Password</label>
                                          <input type="password" id="password" className={`input-field ${regerrors.password ? "invalid" : ""}`} placeholder="Enter your password" value={regData.password} onChange={handleRegChange} />
                                          {regerrors.password && (<p className="regerror">{regerrors.password}</p>)}
                                    </div>
                                    <div className="personal-col">
                                          <label htmlFor="confirmPassword">Confirm Password</label>
                                          <input type="password" id="confirmPassword" className={`input-field ${regerrors.confirmPassword ? "invalid" : ""}`} placeholder="Confirm your password" value={regData.confirmPassword} onChange={handleRegChange} />
                                          {regerrors.confirmPassword && (<p className="regerror">{regerrors.confirmPassword}</p>)}
                                    </div>
                              </div>
                              <div className="personal-line">
                                    <div className="personal-col">
                                          <label htmlFor="country">City</label>
                                          <input type="text" id="city" className={`input-field ${regerrors.city ? "invalid" : ""}`} placeholder="Enter your city" value={regData.city} onChange={handleRegChange} />
                                          {regerrors.city && (<p className="regerror">{regerrors.city}</p>
                                          )}
                                    </div>
                                    <div className="personal-col">
                                          <label htmlFor="area">Area/Town</label>
                                          <input type="text" id="area" className={`input-field ${regerrors.area ? "invalid" : ""}`} placeholder="Enter your area" value={regData.area} onChange={handleRegChange} />
                                          {regerrors.area && (<p className="regerror">{regerrors.area}</p>)}
                                    </div>
                                    <div className="personal-col">
                                          <label htmlFor="searchingfor">Searching For</label>
                                          <select id="searchingfor" className={`input-field ${regerrors.searchingfor ? "invalid" : ""}`} value={regData.searchingfor} onChange={handleRegChange}>
                                                <option value="Select an option">Select an option</option>
                                                <option value="son">Son</option>
                                                <option value="daughter">Daughter</option>
                                          </select>
                                          {regerrors.searchingfor && (
                                                <p className="regerror">{regerrors.searchingfor}</p>
                                          )}
                                    </div>
                              </div>
                              <h2 className="personal-details">Job Details</h2>
                              <div className="personal-line">
                                    <div className="personal-col">
                                          <label htmlFor="company">Company</label>
                                          <input type="text" id="company" className={`input-field ${regerrors.company ? "invalid" : ""}`} placeholder="Enter your company" value={regData.company} onChange={handleRegChange} />
                                          {regerrors.company && (<p className="regerror">{regerrors.company}</p>)}
                                    </div>
                                    <div className="personal-col">
                                          <label htmlFor="occupation">Occupation</label>
                                          <input type="text" id="occupation" className={`input-field ${regerrors.occupation ? "invalid" : ""}`} placeholder="Enter your occupation" value={regData.occupation} onChange={handleRegChange} />
                                          {regerrors.occupation && (<p className="regerror">{regerrors.occupation}</p>)}
                                    </div>
                                    <div className="personal-col">
                                          <label htmlFor="domain">Domain</label>
                                          <input type="text" id="domain" className={`input-field ${regerrors.domain ? "invalid" : ""}`} placeholder="Enter your domain" value={regData.domain} onChange={handleRegChange} />
                                          {regerrors.domain && (<p className="regerror">{regerrors.domain}</p>)}
                                    </div>
                              </div>
                              <h2 className="personal-details">Describe What Are You Seeking?</h2>
                              <div className="personal-line">
                                    <div className="personal-col center-textarea">
                                          <textarea id="description" className={`input-field textarea-field ${regerrors.description ? "invalid" : "valid"}`} placeholder="Tell us about yourself" rows="5" value={regData.description}
                                                onChange={handleRegChange}></textarea>
                                          {regerrors.description && <p className="regerror">{regerrors.description}</p>}
                                    </div>
                              </div>
                        </form>
                        <div className="registration-section5">
                              <button onClick={handleRegSubmit}>Sign Up</button>
                              <Link to="/"><button>Cancel</button></Link>
                        </div>
                  </div>
            </div>
      );
}

export default Registration;

