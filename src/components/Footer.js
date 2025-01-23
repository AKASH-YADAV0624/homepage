import { faApple, faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer=()=>{
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scroll effect
        });
      };
    return(
        <div className="w-full bg-[#011B5B] px-28 py-9 max-lg:px-9 max-sm:px-2">
            <div className="flex justify-between  w-full max-lg:flex-wrap max-lg:justify-center max-lg:gap-5">
              <div className="w-[20%] max-lg:w-[100%] ">
                <p className="text-[16px] text-[#AAB5CD]  max-lg:text-[15px]">Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
                <div className="flex gap-5 text-[#FFFFFF] mt-3 ">
                <FontAwesomeIcon icon={faFacebook} className="text-[25px]  max-lg:text-[20px]"/>
                <FontAwesomeIcon icon={faGoogle} className="text-[25px] max-lg:text-[20px]" />
                <FontAwesomeIcon icon={faApple} className="text-[25px] max-lg:text-[20px]" />
                <FontAwesomeIcon icon={faInstagram} className="text-[25px] max-lg:text-[20px]" />
                </div>
              </div>
               <div className="flex justify-between w-[70%] gap-5 max-md:flex-wrap  max-md:w-[100%]">
              <div className=" ">
                <h1 className="text-[16px] text-[#FFA229] font-bold pb-2 max-lg:text-[14px]">START A BUSINESS</h1>
                <h2 className="text-[#AAB5CD]">Features</h2>
                <h2 className="text-[#AAB5CD]">Solutions</h2>
                <h2 className="text-[#AAB5CD]">Integrations</h2>
                <h2 className="text-[#AAB5CD]">Enterprise</h2>
                <h2 className="text-[#AAB5CD]">Solutions</h2>
              </div>

              <div className="">
                <h1 className="text-[16px] text-[#FFA229] font-bold pb-2">GOVERNMENT REGISTRATION</h1>
                <h2 className="text-[#AAB5CD]">Partners</h2>
                <h2 className="text-[#AAB5CD]">Community</h2>
                <h2 className="text-[#AAB5CD]">Developers</h2>
                <h2 className="text-[#AAB5CD]">App</h2>
                <h2 className="text-[#AAB5CD]">Blog</h2>
              </div>

              <div className="">
                <h1 className="text-[16px] text-[#FFA229] font-bold pb-2">COMPLIANCE & TAX</h1>
                <h2 className="text-[#AAB5CD]">Channels</h2>
                <h2 className="text-[#AAB5CD]">Scale</h2>
                <h2 className="text-[#AAB5CD]">Watch the Demo</h2>
                <h2 className="text-[#AAB5CD]">Our Competition</h2>
              </div>

              <div>
                <h1 className="text-[16px] text-[#FFA229] font-bold pb-2">BIS & CDSCO</h1>
                <h2 className="text-[#AAB5CD]">About Us</h2>
                <h2 className="text-[#AAB5CD]">News</h2>
                <h2 className="text-[#AAB5CD]">Leadership</h2>
                <h2 className="text-[#AAB5CD]">Media Kit</h2>
              </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center my-9">
             <FontAwesomeIcon icon={faCircleArrowUp} className="text-[40px] text-[#FFA229] py-2 cursor-pointer" onClick={scrollToTop} />
                <h1 className="text-[#AAB5CD] text-center">© 2024 Registerkaro. All Rights Reserved.</h1>
            </div>

        </div>
    )
}

export default Footer;
