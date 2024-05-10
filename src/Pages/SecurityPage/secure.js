// import React , { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";

import "./secure.css";
import { TbFaceId } from "react-icons/tb";
import { FaFingerprint } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbPasswordMobilePhone } from "react-icons/tb";
import { MdOutlinePassword } from "react-icons/md";




const secure = () => {
//    const [connectFacebook, setConnectFacebook] = useState(false);
//   const [connectInstagram, setConnectInstagram] = useState(false);
//   const [connectTwitter, setConnectTwitter] = useState(false);
//   const [connectYouTube, setConnectYouTube] = useState(false);
//   const [connectWhatsApp, setConnectWhatsApp] = useState(false);

  return (
<div style={{ margin: "70px", fontFamily: 'Raleway, sans-serif', marginLeft:"120px" }}>
<header>
        <Row  style={{ marginRight:"60px" }}>
          <Col>
            <img src="/detail.logo.png" alt="Logo" style={{ width: '250px', height: '120px', marginRight: '50px', verticalAlign: 'middle', marginTop:"-40px" }} />
          </Col>
          <Col>
            <h4 className='lets4' style={{ position:'absolute', left:'1300px',top:"70px"}} >Help</h4>
          </Col>
        </Row>
      </header>

      <main>
        <h2 className='lets' style={{ fontSize: "100px",color: "gainsboro", fontWeight:"700" }}>initiate</h2>
        <h1 className='lets' style={{ fontSize: "120px",color: "gainsboro", marginTop:"-30px" }}>Secure Connections!</h1>
        

        <div style={{ marginTop: '40px', color: "#184d31" }}>
          {/* Social Media Icons with names */}
          <Row>
            <Col xs={12} sm={6} md={4} lg={2}>
              <div>
                {/* <a href="your_facebook_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }} className="icons-container"> */}
                <Link to='../Dashboard' style={{ textDecoration: 'none', color: 'inherit' }} className="icons-container">
                  <TbFaceId style={{fontSize:"60px" }}/>
                  <h5 className='lets2'>Face Id</h5>
                  <button className='btn'>select</button>
                  </Link>
                {/* </a> */}
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <div>
                {/* <a href="your_instagram_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                <Link to='../Dashboard' style={{ textDecoration: 'none', color: 'inherit' }} className="icons-container">
                  <FaFingerprint style={{fontSize:"60px"  }} />
                  <h5 className='lets2'>Finger Print</h5>
                  <button className='btn'>select</button>
                {/* </a> */}
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <div>
                {/* <a href="your_twitter_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                <Link to='../Dashboard' style={{ textDecoration: 'none', color: 'inherit' }} className="icons-container">
                <TbPasswordMobilePhone style={{fontSize:"60px" }} />
                  <h5  className='lets2'>Pin</h5>
                {/* </a> */}
                <button className='btn'>select</button>
                  </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <div>
                {/* <a href="your_youtube_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                <Link to='../Dashboard' style={{ textDecoration: 'none', color: 'inherit' }} className="icons-container">
                  <RiLockPasswordFill style={{fontSize:"60px"  }} />
                  <h5 className='lets2'>Password</h5>
                {/* </a> */}
                <button className='btn'>select</button>
                  </Link>
              </div>
            </Col> 
        
            <Col xs={12} sm={6} md={4} lg={2}>
              <div style={{marginLeft:"140px"}} >
                {/* <a href="your_whatsapp_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                <Link to='../Dashboard' style={{ textDecoration: 'none', color: 'inherit' }} className="icons-container">
                <MdOutlinePassword style={{fontSize:"60px" }} />
                  <h5 className='lets2'>OTP</h5>                  
                {/* </a> */}
                <button className='btn'>select</button>
                <br></br>
                <p style={{fontSize:"8px"}}>[Default Login]</p>
                  </Link>
              </div>
            </Col>
            </Row>
            <Row style={{ marginTop: '40px',color:'#184d31' }}>
                <Col >
                   <Link to={"../Letsconnect"} style={{ marginTop: '90px',color:'#184d31' }}> Back </Link>
                </Col>
                {/* <Col >
                <Link style={{ marginTop: '40px',color:'#184d31' }}> Skip </Link>
                </Col> */}
                </Row>
        </div>
      </main>

      
    </div>
  );
};

export default secure;
