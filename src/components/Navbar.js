import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faMagnifyingGlass, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ sections }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close the mobile menu when clicking a menu item
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu(); // Close menu on mobile
  };

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-end w-full bg-[#1C4670] text-sm">
        <div className="flex items-center gap-5 py-3 pr-9 max-sm:flex-col max-sm:px-2 max-sm:w-full text-[#FFFFFF]">
          <h3>
            <FontAwesomeIcon icon={faEnvelope} /> www.registerkaro.in
          </h3>
          <h3>
            <FontAwesomeIcon icon={faPhone} /> +918447746183
          </h3>
          <div className="flex gap-3 text-[#E6ECFD] text-xl">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="relative w-full flex items-center justify-between bg-[#FFFFFF] border-b-2 px-5 py-3">
        {/* Logo */}
        <div className="w-56 pl-5 max-sm:hidden">
          <img src="images/icon.png" alt="icon" />
        </div>

        {/* Navigation and Actions */}
        <div className="flex items-center justify-end gap-2 w-full">
          {/* Navigation Links */}
          <ul className="hidden lg:flex gap-9 text-[16px] cursor-pointer">
            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-[#FFA229]"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("services")}
              className="hover:text-[#FFA229]"
            >
              Our Services
            </li>
            <li
              onClick={() => scrollToSection("blog")}
              className="hover:text-[#FFA229]"
            >
              Blog
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#FFA229]"
            >
              Contact Us
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="hover:text-[#FFA229]"
            >
              About us
            </li>
          </ul>

          {/* Hamburger Icon (Mobile) */}
          <button
  className="lg:hidden text-xl text-black"
  onClick={toggleMobileMenu}
  aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
>
  <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
</button>


          {/* Search and Talk Button (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-5">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-600 cursor-pointer"
            />
            <button className="w-40 bg-[#FFA229] text-[#FFFFFF] h-12 rounded hover:opacity-90">
              Talk An Expert
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-20 transition-transform duration-300">
            <ul className="flex flex-col items-center justify-center gap-6 h-full text-lg text-gray-700">
              <li onClick={() => scrollToSection("home")} className="hover:text-[#FFA229]">Home</li>
              <li onClick={() => scrollToSection("services")} className="hover:text-[#FFA229]">Our Services</li>
              <li onClick={() => scrollToSection("blog")} className="hover:text-[#FFA229]">Blog</li>
              <li onClick={() => scrollToSection("contact")} className="hover:text-[#FFA229]">Contact Us</li>
              <li onClick={() => scrollToSection("about")} className="hover:text-[#FFA229]">About us</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
