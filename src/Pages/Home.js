import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../Context/UserContext';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import {
  BiSolidDownArrowCircle,
  BiSolidUpArrowCircle,
  BiSolidRightArrow,
} from "react-icons/bi";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


function Home() {
  const Context = useContext(UserContext);
  const [color, setColor] = useState("yellow");
  const [colortwo, setColortwo] = useState("green");
  const [colorthree, setColorthree] = useState("pink");
  const [hide, setHide] = useState(false);
  const [newshide, setNewshide] = useState(true);
  const [staticProgressBar, setStaticProgressBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setStaticProgressBar(true);
    } else {
      setStaticProgressBar(false);
    }
  };

  return (
    // <div>{Context.Email}</div>
    <div className="detailmain">
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

        <div className="leftcontent li-2">Company category </div>
        <div className="rightcontent li-2">Marketing aggregator</div>

        <div className="leftcontent li-2">Website visits</div>
        <div className="rightcontent li-2">7.2 M</div>

        <div className="leftcontent li-2">Website visits demography</div>
        <div className="rightcontent li-2">India, UAE, USA, UK </div>

        <div className="leftcontent li-2 mbt-01">Bounce rate </div>
        <div className="rightcontent li-2 mbt-01">40%</div>

        <div className="leftcontent mbt-02">Competitors </div>
        <div className="rightcontent mbt-02">Buffer, Hootsuite, zoho, salesforce</div>

        <div className="leftcontent mbt-02">If product-technology stack</div>
        <div className="rightcontent mbt-02"></div>

        <div className="leftcontent ">Ads</div>
        <div className="rightcontent flex ">
          <div  style={{
              height: "50px",
              width: "120px",
              backgroundColor: "rgba(128, 128, 128, 0.502)",
              borderRadius: "10px",
            }}></div>
          <div  style={{
              height: "50px",
              width: "120px",
              backgroundColor: "rgba(128, 128, 128, 0.502)",
              borderRadius: "10px",
            }}></div>
          <i onClick={() => setHide((p) => !p)}>
          {hide ? <BiSolidDownArrowCircle /> : <BiSolidUpArrowCircle />}
          </i>
          </div>
            <>
            {
              hide && (
            <>

                <div className="ddone"></div>
                <div className="ddtwo"></div>
              
            </>
            )}
            
            </>
          
        
        <div className="leftcontent mb">News</div>
        <div className="rightcontent flex mb">
          <div
            style={{
              height: "50px",
              width: "120px",
              backgroundColor: "rgba(128, 128, 128, 0.502)",
              borderRadius: "10px",
            }}
          ></div>
          <div
            style={{
              height: "50px",
              width: "120px",
              backgroundColor: "rgba(128, 128, 128, 0.502)",
              borderRadius: "10px",
            }}
          ></div>
          <i onClick={() => setNewshide((p) => !p)}>
          {hide ? <BiSolidDownArrowCircle /> : <BiSolidUpArrowCircle />}
          </i>
        </div>

        <div className={newshide ? "hidden" : ""}>
        
            <div className="ddo"></div>
            <div className="ddt"></div>
          
        </div>
      </div>
      

      <div className={`progressbar ${staticProgressBar ? "static" : ""}`}>
        <div className="progressbardesign" style={{marginTop:"100px"}}>
          <h1
            style={{ marginBottom: "20px", fontSize: "75px", fontWeight:"700" }}
            className="merkinglogo"
          >
            Merking
          </h1>
          <div className="firstpalete">
            <div
              className="firstrounded animations delay-03"
              style={{ backgroundColor: color }}
            ></div>
            <div
              className="firstmiddle animations delay-03"
              style={{ backgroundColor: color }}
            ></div>
            <div
              className="firstmiddle animations delay-03"
              style={{ backgroundColor: color }}
            ></div>
            <div
              className="firstmiddle  animations delay-02"
              style={{ backgroundColor: color, opacity: 0.6 }}
            ></div>
            <div
              className="firstmiddle  animations delay-02"
              style={{ backgroundColor: color, opacity: 0.5 }}
            ></div>
            <div
              className="firstmiddle  animations delay-02"
              style={{ backgroundColor: color, opacity: 0.4 }}
            ></div>
            <div
              className="firstmiddle  animations delay-01"
              style={{ backgroundColor: color, opacity: 0 }}
            ></div>
            <div
              className="firstmiddle  animations delay-01"
              style={{ backgroundColor: color, opacity: 0 }}
            ></div>
            <div
              className="firstmiddle  animations delay-01"
              style={{ backgroundColor: color, opacity: 0 }}
            ></div>
            <div
              className="firstrounded  animations delay-01"
              style={{ backgroundColor: color, opacity: 0 }}
            ></div>
            <span className="percentagecolor ">
              {" "}
              <span className="animations delaynumbers-01 ft-1">2</span>
              <span className="animations delaynumbers-02 ft-1">0</span>
              <span className="animations delaysymbol-01 ft-1">%</span>
            </span>
          </div>

          <div className="secondpalete">
            <div
              className="secondrounded animations delay-03"
              style={{ backgroundColor: colortwo }}
            ></div>
            <div
              className="secondmiddle  animations delay-03"
              style={{ backgroundColor: colortwo }}
            ></div>
            <div
              className="secondmiddle  animations delay-03"
              style={{ backgroundColor: colortwo }}
            ></div>
            <div
              className="secondmiddle  animations delay-02"
              style={{ backgroundColor: colortwo }}
            ></div>
            <div
              className="secondmiddle  animations delay-02"
              style={{ backgroundColor: colortwo }}
            ></div>
            <div
              className="secondmiddle  animations delay-02"
              style={{ backgroundColor: colortwo }}
            ></div>
            <div
              className="secondmiddle  animations delay-01"
              style={{ backgroundColor: colortwo }}
            ></div>
            <div
              className="secondmiddle  animations delay-01"
              style={{ backgroundColor: colortwo }}
            ></div>
            <div
              className="secondmiddle animations delay-01"
              style={{ backgroundColor: colortwo }}
            ></div>
            <div
              className="secondrounded2 animations delay-01"
              style={{ backgroundColor: colortwo }}
            ></div>
            <span className="percentagecolor">
              <span className="animations delaynumbers-01 ft-1">7</span>
              <span className="animations delaynumbers-02 ft-1">0</span>
              <span className="animations delaysymbol-01 ft-1">%</span>
            </span>
          </div>

          <div className="thirdpalete">
            <div
              className="thirdrounded  animations delay-03"
              style={{ backgroundColor: colorthree }}
            ></div>
            <div
              className="thirdmiddle  animations delay-03"
              style={{ backgroundColor: colorthree }}
            ></div>
            <div
              className="thirdmiddle  animations delay-03"
              style={{ backgroundColor: colorthree }}
            ></div>
            <div
              className="thirdmiddle  animations delay-02"
              style={{ backgroundColor: colorthree, opacity: 0.5 }}
            ></div>
            <div
              className="thirdmiddle  animations delay-02"
              style={{ backgroundColor: colorthree, opacity: 0.5 }}
            ></div>
            <div
              className="thirdmiddle  animations delay-02"
              style={{ backgroundColor: colorthree, opacity: 0.4 }}
            ></div>
            <div
              className="thirdmiddle  animations delay-01"
              style={{ backgroundColor: colorthree, opacity: 0 }}
            ></div>
            <div
              className="thirdmiddle  animations delay-01"
              style={{ backgroundColor: colorthree, opacity: 0 }}
            ></div>
            <div
              className="thirdmiddle  animations delay-01"
              style={{ backgroundColor: colorthree, opacity: 0 }}
            ></div>
            <div
              className="thirdrounded animations delay-01 "
              style={{ backgroundColor: colorthree, opacity: 0 }}
            ></div>
            <span className="percentagecolor">
              <span className="animations delaynumbers-01 ft-1">1</span>
              <span className="animations delaynumbers-02 ft-1">0</span>
              <span className="animations delaysymbol-01 ft-1">%</span>
            </span>
          </div>
          <div className="nextbtn">
            <Link to='/Letsconnect'>
            <a href="#" className="btnnext">
              Next <BiSolidRightArrow className="arrowbtn" />
            </a>
            </Link>
          </div>
          {/* <>
            <img src={logo} alt="logo" className="logosizing" />
          </> */}
        </div>
      </div>

      </div>
    </div>
    
  )
}

export default Home