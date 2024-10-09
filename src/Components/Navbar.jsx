import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "C:/Users/rahul/OneDrive/Desktop/Programs/Web Dev/React/CollegeSite/src/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faAddressCard, faBuilding, faGraduationCap, faPerson, faBook, faEnvelope, faChalkboardUser, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';

function Navbar() {
  const [mobilescreen, setMobilescreen] = useState(false);
  
  return (
    <>
      <nav className="navbar bg-[#1A1C4E] w-full mx-auto shadow-lg z-[50] shadow-black/50 fixed top-0 left-0">
        <div className="flex items-center justify-between whitespace-nowrap">
          <Link to="/">
            <div className="nav-logo flex items-center">
              <img
                src={logo}
                alt="LOGO"
                className="logo rounded-full border-4"
              />            
              <div className="nav-title text-white font-bold">
                भारतीय सूचना प्रौद्योगिकी संस्थान, कोटा <br />
                Indian Institute of Information Technology Kota <br />
                <span className="importance">( An Institute of National Importance under an Act of Parliament )</span>
              </div>
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="menu items-center text-white">
            <ul className="flex items-center gap-7">
              <li className="cursor-pointer">ABOUT US</li>
              <li className="cursor-pointer">ADMINISTRATION</li>
              <li className="cursor-pointer">ADMISSION</li>
              <li className="cursor-pointer">PEOPLE</li>
              <li className="cursor-pointer">ACADEMICS</li>
              <li className="cursor-pointer">PLACEMENTS</li>
              <li className="cursor-pointer">FACILITIES</li>
              <li className="cursor-pointer">ALUMNI</li>
            </ul>
          </div>
          
          {!mobilescreen ? (
            <FontAwesomeIcon 
              icon={faBars} 
              size="2x" 
              className="menu-bar1 menu-bar  text-white z-[51]" 
              onClick={() => setMobilescreen(!mobilescreen)}
            />
          ) : (
            <FontAwesomeIcon 
              icon={faTimes} 
              size="2x" 
              className="menu-bar2 menu-bar text-white z-[52]" 
              onClick={() => setMobilescreen(!mobilescreen)}
            />
          )}
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobilescreen && (
        <div className="flex justify-center z-[50] menuMobile">            
          <div className="menu-bar-items rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.5)] bg-white pt-[3rem] p-[1rem] z-[49] text-left font-semibold absolute top-[1rem] w-[95%] ">
            <div className="bar bg-black w-[95%] mx-auto mb-[1rem] h-[1px] opacity-50 "></div>
            <ul className="p-[1rem] flex flex-col justify-center">
              <li className="cursor-pointer p-[1rem] border border-blue rounded-md mb-[2px] hover:bg-slate-400"><FontAwesomeIcon icon={faAddressCard}/> ABOUT US</li>
              <li className="cursor-pointer p-[1rem] border border-blue rounded-md mb-[2px] hover:bg-slate-400"><FontAwesomeIcon icon={faBuilding} /> ADMINISTRATION</li>
              <li className="cursor-pointer p-[1rem] border border-blue rounded-md mb-[2px] hover:bg-slate-400"><FontAwesomeIcon icon={faGraduationCap} /> ADMISSION</li>
              <li className="cursor-pointer p-[1rem] border border-blue rounded-md mb-[2px] hover:bg-slate-400"><FontAwesomeIcon icon={faPerson} /> PEOPLE</li>
              <li className="cursor-pointer p-[1rem] border border-blue rounded-md mb-[2px] hover:bg-slate-400"><FontAwesomeIcon icon={faBook} /> ACADEMICS</li>
              <li className="cursor-pointer p-[1rem] border border-blue rounded-md mb-[2px] hover:bg-slate-400"><FontAwesomeIcon icon={faEnvelope} /> PLACEMENTS</li>
              <li className="cursor-pointer p-[1rem] border border-blue rounded-md mb-[2px] hover:bg-slate-400"><FontAwesomeIcon icon={faChalkboardUser} /> FACILITIES</li>
              <li className="cursor-pointer p-[1rem] border border-blue rounded-md mb-[2px] hover:bg-slate-400"><FontAwesomeIcon icon={faNetworkWired} /> ALUMNI</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
