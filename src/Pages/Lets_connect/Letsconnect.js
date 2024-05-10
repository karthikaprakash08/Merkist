import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";

import "./letsconnect.css";
import { SiHubspot } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { SiAsana } from "react-icons/si";
import { SiClickup } from "react-icons/si";
import { RiSlackLine } from "react-icons/ri";
import { FaSkype } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { LiaCheckDoubleSolid } from "react-icons/lia";

const Letsconnect = () => {
   const [connectFacebook, setConnectFacebook] = useState(false);
  const [connectInstagram, setConnectInstagram] = useState(false);
  const [connectTwitter, setConnectTwitter] = useState(false);
  const [connectYouTube, setConnectYouTube] = useState(false);
  const [connectWhatsApp, setConnectWhatsApp] = useState(false);

  return (
<div style={{ margin: "70px", fontFamily: 'Raleway, sans-serif', marginLeft:"120px",marginBottom:"0px" }}>
<header>
        <Row  style={{ marginRight:"60px" }}>
          <Col>
            <img src="/Merkist-Logo-2.png" alt="Logo" style={{ height: '80px', marginRight: '50px', verticalAlign: 'middle', marginTop:"-40px" }} />
          </Col>
          <Col>
            <h4 className='lets4' style={{ position:'absolute', left:'1300px',top:"70px"}} >Help</h4>
          </Col>
        </Row>
      </header>

      <main>
        <h1 className='lets' style={{ fontSize: "150px",color: "gainsboro" }}>Let's Connect</h1>
        <h3 className='lets1' style={{ color: "#184d31", marginTop: '15px',fontWeight:"100px" }}>Now let’s get connect</h3>

        <div style={{ marginTop: '40px', color: "#184d31" }}>
          {/* Social Media Icons with names */}
          <Row>
            <Col xs={12} sm={6} md={4} lg={2}>
              <div>
                <a href="your_facebook_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <FontAwesomeIcon icon={faFacebook} size="3x" style={{  marginLeft: '20px' }}></FontAwesomeIcon>
                  <h5 className='lets2'>Facebook</h5>
                  <button className={`btn ${connectFacebook ? 'connected' : ''}`} onClick={() => setConnectFacebook(prevConnect => !prevConnect)}> {connectFacebook ? 'Connected' : 'Connect'}
                </button>
                </a>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <div>
                <a href="your_instagram_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <FontAwesomeIcon icon={faInstagram} size="3x" style={{  marginLeft: '25px' }} />
                  <h5 className='lets2'>Instagram</h5>
                  <button className={`btn ${connectInstagram ? 'connected' : ''}`} onClick={() => setConnectInstagram(prevConnect => !prevConnect)}> {connectInstagram ? 'Connected' : 'Connect'}
                </button>
                </a>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <div>
                <a href="your_twitter_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <BsTwitterX  style={{  marginLeft: '25px',fontSize:"45px" }} />
                  <h5  className='lets2' style={{  marginLeft: '15px' }}>Twitter</h5>
                  <button className={`btn ${connectTwitter ? 'connected' : ''}`} onClick={() => setConnectTwitter(prevConnect => !prevConnect)}>
          {connectTwitter ? 'Connected' : 'Connect'}
        </button>
                </a>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <div>
                <a href="your_youtube_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <FontAwesomeIcon icon={faYoutube} size="3x"  style={{  marginLeft: '25px' }} />
                  <h5 style={{  marginLeft: '10px' }} className='lets2'>YouTube</h5>
                  <button className={`btn ${connectYouTube ? 'connected' : ''}`} onClick={() => setConnectYouTube(prevConnect => !prevConnect)}> {connectYouTube ? 'Connected' : 'Connect'}
                </button>
                </a>
              </div>
            </Col> </Row>
            <Row style={{ marginTop: '40px' }}>
            <Col xs={12} sm={6} md={4} lg={2}>
              <div>
                <a href="your_whatsapp_link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <FontAwesomeIcon icon={faWhatsapp} size="3x"  style={{  marginLeft: '30px' }} />
                  <h5 className='lets2'>WhatsApp</h5>
                  <button className={`btn ${connectWhatsApp ? 'connected' : ''}`} onClick={() => setConnectWhatsApp(prevConnect => !prevConnect)}> {connectWhatsApp ? 'Connected' : 'Connect'}
                </button>
                </a>
              </div>
            </Col>
            </Row>
            <Row style={{ marginTop: '40px',color:'#184d31' }}>
                <Col >
                   <Link to="../FullDetails" style={{ marginTop: '40px',color:'#184d31' }}> Back </Link>
                </Col>
                <Col >
                <Link to='/Secure' style={{ marginTop: '40px',color:'#184d31' }}> Skip </Link>
                </Col>
                </Row>
        </div>
      </main>

      <section className='searchbar'>
        <div className='heading-container'>
          <div id='head-crm'>
            <h2>CRM & Other tools</h2>
          </div>

          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
              placeholder="Type to search..."
            />
          </div>

          <div className='letsconnect-icons-container'>
            <div className='hubspot-icons'>
            <SiHubspot/>

            </div>
            <h3>Hubspot</h3>
            <span  className='heading-container1'>+</span>
          </div>

          
          <div className='letsconnect-icons-container'>
            <div className='hubspot-icons'>
            <FaTrello />
            </div>
            <h3>Trello</h3>
            <span className='heading-container2'>+</span>
          </div>

          
          <div className='letsconnect-icons-container'>
            <div className='hubspot-icons'>
            <SiAsana/>
            </div>
            <h3>Asana</h3>
            <span className='heading-container3'>+</span>
          </div>

          
          <div className='letsconnect-icons-container'>
            <div className='hubspot-icons'>
            <SiClickup />
            </div>
            <h3>Clickup</h3>
            <span className='heading-container4'>+</span>
          </div>

          
          <div className='letsconnect-icons-container'>
            <div className='hubspot-icons'>
            <RiSlackLine />
            </div>
            <h3>Stack</h3>
            <span className='heading-container5'>+</span>
          </div>

          
          <div className='letsconnect-icons-container'>
            <div className='hubspot-icons'>
            <FaSkype />
            </div>
            <h3>Skype</h3>
            <span className='heading-container6'>+</span>
          </div>

          
          <div className='letsconnect-icons-container'>
            <div className='hubspot-icons'>
            <RiWhatsappFill />
            </div>
            <h3>Whatsapp</h3>
            <span><LiaCheckDoubleSolid /></span>
          </div>

      </div>
      </section>
    </div>
  );
};

export default Letsconnect;
