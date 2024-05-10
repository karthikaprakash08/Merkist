import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Company_Details() {
  const blocksRef = useRef([]);

  useEffect(() => {
    const blocks = blocksRef.current;

    blocks.forEach(item => {
      let numElement = item.querySelector('.inner #number');
      let num = parseInt(numElement.innerText);
      let count = 0;
      let time = 2000 / num;
      let circle = item.querySelector('circle');

      const interval = setInterval(() => {
        if (count === num) {
          clearInterval(interval);
        } else {
          count += 1;
          numElement.innerText = count + '%';
        }
      }, time);

      circle.style.strokeDashoffset = num;
    });
  }, []);

  return (
    <div className='details'>
      <Nav />
      <div className="maincontainerdetails">
        <div className="detailtexts">
          <div className="leftcontent li-2">Company name</div>
          <div className="rightcontent li-2">Merkist</div>

          <div className="leftcontent li-2">Website </div>
          <div className="rightcontent li-2">merkist.com</div>

          <div className="leftcontent li-2 mbt-01">Page Rank</div>
          <div className="rightcontent li-2 mbt-01">7th on google, 5th on bing</div>

          <div className="leftcontent mbt-02">Social media </div>
          <div className="rightcontent  mbt-02">
            <FaFacebookSquare className="iconsoc"/>
            <FaInstagramSquare className="iconsoc"/>
            <FaYoutube className="iconsoc"/>
            <BsTwitterX className="iconsoc"/>
          </div>

          <div className="leftcontent li-2">Fonts used </div>
          <div className="rightcontent li-2">Raleway, Spartan</div>

          <div className="leftcontent li-2">Colour palletes </div>
          <div className="rightcontent li-2">Green, white, palr white, blue</div>

          <div className="leftcontent li-2 mbt-02">Keywords</div>
          <div className="rightcontent li-2 mbt-02">
            Marketing, management, tools,
            <br />
            socialmedia
          </div>

          {/* <div className="leftcontent li-2">Company category </div>
          <div className="rightcontent li-2">Marketing aggregator</div>

          <div className="leftcontent li-2">Website visits</div>
          <div className="rightcontent li-2">7.2 M</div>

          <div className="leftcontent li-2">Website visits demography</div>
          <div className="rightcontent li-2">India, UAE, USA, UK </div>

          <div className="leftcontent li-2 mbt-01">Bounce rate </div>
          <div className="rightcontent li-2 mbt-01">40%</div> */}
        </div>

        <div className="block" ref={el => blocksRef.current[0] = el}>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">
                  45%
                </div>
              </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className='svg-2' version="1.1" width="300px" height="300px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#073b1f" />
                  <stop offset="100%" stopColor="#052f19" />
                </linearGradient>
              </defs>
              <circle cx="150" cy="150" r="130" strokeWidth="10" fill="none" />
            </svg>

          </div>
        </div>
        

      </div>
      <br/>
      <br/>
      <div>
        <div style={{display:"flex", justifyContent:"center"}}>
          <Link to={"/Login"} style={{textDecoration:"none"}}>
            <button style={{ display: "flex", justifyContent: "center", fontWeight: "400", fontSize: "25px", padding: "6px",backgroundColor: "#184D32",color:"white",textDecoration:"none",borderRadius:"7px", border:"none", alignItems:"center",gap:"10px"}}>
              Show More <FontAwesomeIcon icon={faAnglesDown}/>
            </button>
          </Link>
        </div>
        <div className='add-img' style={{display:"flex",justifyContent:"flex-end",fontSize:"60px",paddingBottom:"60px"}}>
            <img src='/mer-add.png'></img>
        </div>
    </div>
      
    </div>
  );
}

export default Company_Details;
