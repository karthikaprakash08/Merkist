import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';

function Lets_Go() {
    const [email, setEmail] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [isValid, setIsValid] = useState(true);
    const navigate = useNavigate();
    const Context = useContext(UserContext);

    function checkemail() {
        // Updated regular expression to accept email addresses like "karthiks.p@company.com"
        if (CompanyName!="") {
            setIsValid(true);
            Context.LetsGoEmail(email);
            Context.setCompanyName(CompanyName);
            navigate('/Details');
        } else {
            setIsValid(false);
        }
    }

    return (
        <div className='lets_go d-flex'>
            <div className='logo_container d-flex justify-content-center align-items-center'>
                <img src="/lets_go_logo.png" className='img-fluid' alt="Let's Go Logo" />
            </div>
            <div className='lets_go_container d-flex justify-content-center align-items-center'>
                <div className='content-container'>
                    <div className='lets_go_img d-flex flex-column bg-white'>
                        <img src="/main-img.jpg" className='lets_go_image img-fluid object-fit-cover' alt="Let's Go Image" />
                        <div className='lets_go_form d-flex flex-column align-items-center'>
                            <div className='d-flex flex-column align-items-center'>
                                <div className='lets_go_form_text' style={{textAlign:"center"}}>
                                    Bringing together tools,<br/> resources and innovation in a <br/>single interface!
                                </div>
                            </div>
                            <form className='w-100' style={{padding:"0rem 3rem "}}>
                                <div className="form mb-3 w-100">
                                    <input 
                                        type="email" 
                                        style={{color:"#0f5132", fontWeight:"600", height:"45px"}} 
                                        className={`form-control email-input ${isValid ? "" : "is-invalid"}`} 
                                        id="floatingInput" 
                                        placeholder="Enter Company Name" 
                                        value={CompanyName}
                                        onChange={(event) => {
                                            setCompanyName(event.target.value)
                                            // Validate email format as it's being typed
                                            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                            if (event.target.value!="") {
                                                setIsValid(true);
                                            } else {
                                                setIsValid(false);
                                            }
                                        }}
                                    />
                                    {!isValid && (
                                        <div className="invalid-feedback">
                                            Please enter your company name.
                                        </div>
                                    )}
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn1" 
                                    style={{width:"100%", padding:"8px 20px", borderRadius:"50px", fontSize:"20px"}} 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        checkemail();
                                    }}
                                >
                                    Let’s do this!
                                </button>
                            </form>
                            <div className='others d-flex'>
                                <FontAwesomeIcon className='icon-adjust ' icon={faAngleDown} />
                                <select 
                                    className="form-select custom-select" 
                                    aria-label="Default select example" 
                                    style={{padding:"0px 20px",border:"none"}}
                                >
                                    <option value="1" style={{color:"black"}}>English</option>
                                    <option value="2" style={{color:"black"}}>Tamil</option>
                                    <option value="3" style={{color:"black"}}>Hindi</option>
                                </select>
                                <a href='#'>Help</a>
                                <a href='#'>Contact</a>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <div className='add-img' style={{display:"flex",justifyContent:"flex-end",fontSize:"0px",right:"0px",bottom:"0px",position:"absolute",zIndex:"1"}}>
                    <img src='/mer-add.png' height="150px" ></img>
                </div> */}
            </div>
        </div>
    );
}

export default Lets_Go;