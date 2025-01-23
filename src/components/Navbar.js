import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars, faEnvelope, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  // State to handle the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  // Close the mobile menu when clicking outside (useful for better UX)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar (Contact and Social Media) */}
      <div className="flex items-center justify-end w-full bg-[#1C4670]">
        <div className="flex items-center gap-5 justify-center py-3 pr-9 max-sm:flex max-sm:flex-col max-sm:w-full max-sm:px-2">
          <h3 className="text-[#FFFFFF]">
            <FontAwesomeIcon icon={faEnvelope} /> www.registerkaro.in
          </h3>
          <h3 className="text-[#FFFFFF]">
            <FontAwesomeIcon icon={faPhone} /> +918447746183
          </h3>
          <h3 className="flex gap-3 text-[#E6ECFD] text-xl">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faPinterest} />
          </h3>
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full flex items-center justify-between bg-[#FFFFFF] border-b-2 px-5 py-2">
        {/* Logo */}
        <div className="w-56 pl-5 max-sm:hidden">
          <img src="images/icon.png" alt="icon" />
        </div>

        {/* Navigation and actions */}
        <div className="flex justify-end items-center gap-7 sm:flex-row flex-col sm:px-5 sm:py-2 w-full relative">
          {/* Navigation Links (Regular menu visible on larger screens) */}
          <ul className="flex gap-9 text-[16px] sm:flex-row flex-col max-lg:hidden">
            <li>Home</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>About us</li>
          </ul>

          {/* Mobile Menu Toggle Button (Hamburger Icon) */}
          <button 
            className="lg:hidden block text-xl text-red-600 "
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Search Icon (only visible on larger screens) */}
          <FontAwesomeIcon icon={faMagnifyingGlass} className="lg:block hidden" />

          {/* "Talk an Expert" Button (only visible on larger screens) */}
          <button className="w-40 bg-[#FFA229] text-[#FFFFFF] h-12 rounded lg:block hidden">
            Talk An Expert
          </button>
        </div>

        {/* Mobile Menu (appears when toggle is active) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-full bg-[#FFFFFF] absolute top-10 left-0 z-10">
            <ul className="flex flex-col px-2">
              <li>Home</li>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>About us</li>
            </ul>

            {/* Add a close button inside mobile menu */}
            <button 
              className="absolute top-3 right-3 text-xl"
              onClick={closeMobileMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
