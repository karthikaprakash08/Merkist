import React, { useContext, useEffect, useRef, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../Context/UserContext';
import emailjs from '@emailjs/browser';
import { child, get, getDatabase, ref, set } from 'firebase/database';
import app from '../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [SignupEmail, setSignupEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);
    const [isValidSignup, setIsValidSignup] = useState(true);
    const [IsSignupEmail, setIsSignupEmail] = useState(true);
    const [IsSignupValidEmail, setIsSignupValidEmail] = useState(true);
    const [IsSignupCompanyName, setIsSignupCompanyName] = useState(true);
    const [IsSignupValidCompanyName, setIsSignupValidCompanyName] = useState(true);
    const [IsSignupPhone, setIsSignupPhone] = useState(true);
    const [IsSignupValidPhone, setIsSignupValidPhone] = useState(true);

    const navigate = useNavigate();
    const Context = useContext(UserContext);
    const form = useRef();

    const showToast = (message, type) => {
        toast[type](message);
    };

    useEffect(()=>{
        if(Context.Email!=""){
            setIsEmpty(false)
            if(email==""){
                setEmail(Context.Email)
            }

            if(SignupEmail==""){
                setSignupEmail(Context.Email)
            }
        }

        
    },[])

    function checkEmailExists() {
        const emailRegex =  /^[a-zA-Z]+[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email !== ''&& emailRegex.test(email) && !email.includes("@gmail.com")) {
            const dbRef = ref(getDatabase(app));
            get(child(dbRef, 'users')).then((snapshot) => {
                if (snapshot.exists()) {
                    let isEmailExists = false;
                    for (let key in snapshot.val()) {
                        if (snapshot.val()[key].email === email) {
                            isEmailExists = true;
                            generateOTP(email);
                            form.current.classList.remove('sign-up-mode');
                            showToast('Please check your email for OTP', 'success');
                            setTimeout(() => {
                                navigate("../OTP")
                            }, 2000);
                            break;
                        }
                    }
                    if (!isEmailExists) {
                        showToast('No Account with such Email Id exists! Try SignUp', 'error');
                    }
                } else {
                    showToast('No Account with such Email Id exists! Try SignUp', 'error');
                }
            }).catch((error) => {
                console.error(error);
            });
        } else {
            setIsEmpty(false);
            showToast('Check Email', 'error');
        }
    }

    function generateOTP(email) {
        let digits = '0123456789';
        let OTP = '';
        let len = digits.length;
        for (let i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * len)];
        }
        Context.SendOTP(OTP);
        emailjs.send('service_wnlcs83', 'template_y78e0ec', {
            to: email,
            sendername: 'MERKIST',
            subject: 'Login Verification',
            message: 'The OTP is '+OTP+'. Please use this OTP to login to your Merkist account. We welcome you.'
        }, 'jQGvRQQZ-qG6O7vNY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    function signupUser() {
        const nameRegex = /^[a-zA-Z ]+$/;
        const emailRegex =  /^[a-zA-Z]+[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phoneRegex = /^[6-9][0-9]{9}$/;

        if ( (!emailRegex.test(SignupEmail) && SignupEmail.includes("@gmail.com")) || !nameRegex.test(CompanyName) || !phoneRegex.test(Phone) || SignupEmail === '' || CompanyName === '' || Phone === '') {
            showToast('Please enter valid details for signup.', 'error');
            return;
        }

        const dbRef = ref(getDatabase(app));
        get(child(dbRef, 'users')).then((snapshot) => {
            let isEmailExists = false;
            if (snapshot.exists()) {
                for (let key in snapshot.val()) {
                    if (snapshot.val()[key].email === SignupEmail) {
                        console.log("signup")
                        showToast('Email Already Exists! Try Login', 'error');
                        setIsValidSignup(false);
                        isEmailExists = true;
                        break;
                    }
                }
                if (!isEmailExists) {
                    saveUserDetails();
                }
            } else {
                saveUserDetails();
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    function saveUserDetails() {
        let digits = '0123456789';
        let Id = '';
        let len = digits.length;
        for (let i = 0; i < 6; i++) {
            Id += digits[Math.floor(Math.random() * len)];
        }

        const db = getDatabase(app);
        set(ref(db, 'users/' + Id), {
            CompanyName: CompanyName,
            email: SignupEmail,
            Phone: Phone
        }).then(() => {
            showToast('Signup Successful!', 'success');
            form.current.classList.remove('sign-up-mode');
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="container" ref={form}>
            <ToastContainer></ToastContainer>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} className='i' />
                            <input
                                type="email"
                                placeholder="Email"
                                id='email'
                                defaultValue={Context.Email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                    setIsEmpty(event.target.value == '');
                                }}
                            />
                        </div>
                        {isEmpty && (
                            <div className="invalid-feedback" style={{ display: "block", fontWeight: "600", paddingLeft: "160px" }}>
                                Please enter your email address.
                            </div>
                        )}
                        <input
                            type="submit"
                            value="Receive OTP"
                            className="btn btn2 solid"
                            onClick={(e) => {
                                e.preventDefault();
                                checkEmailExists();
                            }}
                        />
                    </form>

                    <form className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} className='i' />
                            <input
                                type="text"
                                placeholder="Company Name"
                                onChange={(event) => {
                                    setCompanyName(event.target.value);
                                    setIsSignupCompanyName(event.target.value !== '');
                                    setIsSignupValidCompanyName(/^[a-zA-Z ]+$/.test(event.target.value));
                                }}
                            />
                        </div>
                        {!IsSignupCompanyName && (
                            <div className="invalid-feedback" style={{ display: "block", fontWeight: "600", paddingLeft: "160px" }}>
                                Please enter your Company Name.
                            </div>
                        )}
                        {!IsSignupValidCompanyName && (
                            <div className="invalid-feedback" style={{ display: "block", fontWeight: "600", paddingLeft: "160px" }}>
                                Please enter a valid Company Name.
                            </div>
                        )}
                        <div className="input-field">
                            <FontAwesomeIcon icon={faEnvelope} className='i' />
                            <input
                                type="email"
                                placeholder="Email"
                                defaultValue={Context.Email}
                                onChange={(event) => {
                                    setSignupEmail(event.target.value);
                                    setIsSignupEmail(event.target.value !== '');
                                    let validemail = /^[a-zA-Z]+[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(event.target.value)
                                    console.log(validemail)
                                    setIsSignupValidEmail(validemail && !event.target.value.includes("@gmail.com"))
                                }}
                            />
                        </div>
                        {!IsSignupEmail && (
                            <div className="invalid-feedback" style={{ display: "block", fontWeight: "600", paddingLeft: "160px" }}>
                                Please enter your Email.
                            </div>
                        )}
                        {!IsSignupValidEmail && (
                            <div className="invalid-feedback" style={{ display: "block", fontWeight: "600", paddingLeft: "160px" }}>
                                Please enter a valid Email.
                            </div>
                        )}
                        <div className="input-field">
                            <FontAwesomeIcon icon={faPhone} className='i' />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                onChange={(event) => {
                                    setPhone(event.target.value);
                                    setIsSignupPhone(event.target.value !== '');
                                    setIsSignupValidPhone(/^[6-9][0-9]{9}$/.test(event.target.value));
                                }}
                            />
                        </div>
                        {!IsSignupPhone && (
                            <div className="invalid-feedback" style={{ display: "block", fontWeight: "600", paddingLeft: "160px" }}>
                                Please enter your Phone Number.
                            </div>
                        )}
                        {!IsSignupValidPhone && (
                            <div className="invalid-feedback" style={{ display: "block", fontWeight: "600", paddingLeft: "160px" }}>
                                Please enter a valid Phone Number.
                            </div>
                        )}
                        <br />
                        <input
                            type='submit'
                            className="btn btn2"
                            value="Sign up"
                            onClick={(e) => {
                                e.preventDefault();
                                signupUser();
                            }}
                        />
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h2>New here ?</h2>
                        <p>
                            Join us in our new venture of learning about your business
                        </p>
                        <button
                            className="btn btn2 transparent"
                            id="sign-up-btn btn2"
                            onClick={(e) => {
                                e.preventDefault();
                                form.current.classList.add("sign-up-mode");
                            }}
                        >
                            Sign up
                        </button>
                    </div>
                    <img src="login.svg" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h2>One of us ?</h2>
                        <p>
                            Welcome again companion, Login to explore.
                        </p>
                        <button
                            className="btn btn2 transparent"
                            id="sign-in-btn btn2"
                            onClick={(e) => {
                                e.preventDefault();
                                form.current.classList.remove("sign-up-mode");
                            }}
                        >
                            Sign in
                        </button>
                    </div>
                    <img src="signup.svg" className="image" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;