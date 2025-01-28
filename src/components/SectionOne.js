import { faCirclePlay, faHandshake, faStar, faTableCellsLarge, faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const SectionOne=()=>{
    return(
        <div id="home"
        style={{
            backgroundImage: "url('/images/Section.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        
        className="w-full ">
            <div className=" w-[70vw]  py-16 pl-24 max-md:pl-9 max-md:w-full max-sm:px-2 max-sm:py-5">
                        <h4 className="text-[14px] font-semibold" ><FontAwesomeIcon icon={faStar} className="text-yellow-400" />  Google Rating   <FontAwesomeIcon icon={faStar} className="text-yellow-400" /><FontAwesomeIcon icon={faStar} className="text-yellow-400" /><FontAwesomeIcon icon={faStar} className="text-yellow-400" /><FontAwesomeIcon icon={faStar} className="text-yellow-400" /><FontAwesomeIcon icon={faStar} className="text-yellow-400" /> </h4>
            <h1 className="text-[48.3px] font-semibold max-sm:text-[30px]">Your trusted partner</h1>
            <h1 className="text-[48.3px] font-semibold max-sm:text-[30px]">for compliance business needs</h1>
            <p className="w-[43vw] text-[#333333] text-[20px] pt-5 max-md:w-[90%] max-sm:text-[15px]">An online business compliance platform that helps entrepreneurs and other individuals with various,<span className="text-[#4F4F4F] font-bold">registrations</span> ,<span className="text-[#4F4F4F] font-bold">tax filings</span> , and other <span className="text-[#4F4F4F] font-bold">legal matters</span>.</p>
           

            <div className="flex justify-between w-[75vh] mt-5 max-sm:flex-col max-sm:gap-2 max-sm:justify-normal max-sm:w-[100%]">
                <div className="flex items-center gap-2 ">
                    <div  className="w-[30px] h-[35px] text-[#4F4F4F]">

                <FontAwesomeIcon icon={faTableCellsLarge} className="w-full h-full" />
                    </div>
                <div>
                    <h1 className="text-xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#FFA229] to-[#1C4670]">4.5+</h1>
                    <p className="text-[#4F4F4F]">Customer Rating</p>
                </div>
                </div>
                <div  className="flex items-center gap-2 max-sm:flex max-sm:flex-wrap" >
                    <div  className="w-[30px] h-[35px] text-[#4F4F4F]">

                <FontAwesomeIcon icon={faUsers}  className="w-full h-full" />
                    </div>
                <div>
                    <h1 className="text-xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#FFA229] to-[#1C4670]">20,000+</h1>
                    <p className="text-[#4F4F4F]">Clients</p>
                </div>
                </div>
                <div className="flex items-center gap-2">
                    <div  className="w-[30px] h-[35px] text-[#4F4F4F]">

                <FontAwesomeIcon icon={faHandshake}  className="w-full h-full" />
                    </div>
                <div>
                    <h1 className="text-xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#FFA229] to-[#1C4670]">99.8%</h1>
                    <p className="text-[#4F4F4F]">Financial Stability</p>
                </div>
                </div>
            </div>
            <div className="flex items-center gap-3 max-sm:flex max-sm:flex-wrap max-sm:gap-2">
            <button className="w-52 bg-[#FFA229] mt-5 text-[#FFFFFF] h-12 rounded max-sm:w-24 max-sm:text-[12px] max-sm:h-9">Talk An Expert</button>
            <h3 className="flex pt-5  gap-2  font-semibold max-sm:pt-2"><FontAwesomeIcon icon={faCirclePlay} className="text-red-600 h-5 " /> See how it works</h3>

            </div>
            </div>
        </div>
    )
}

export default SectionOne;
