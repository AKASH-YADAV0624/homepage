import { faCreditCard, faEnvelope, faHeadset, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const SectionSeven=()=>{
    return(
        <div className="w-full py-5 max-sm:px-2">
            <div className="flex flex-col items-center w-full">
            <h1 className="text-[32px] text-[#000000] font-bold py-5 text-center">Our Happy Clients</h1>
              <p className="text-[16px] text-[#666666] w-[50%] text-center max-sm:w-[100%]">Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>   
            </div>

            <div className="w-[99%] py-9">
                <img src="images/clients.png" alt="happyclient" className="w-full"/>
                <h1 className="text-[15px] text-[#1C4670] text-center">Show more</h1>
            </div>
            <div className="flex justify-between w-full bg-[#FFA229] py-9 px-24 max-lg:px-9 max-md:flex-wrap max-md:justify-center">
                <div className="flex items-center gap-5">
                <FontAwesomeIcon icon={faNoteSticky} className="text-[35px] text-red-400" />
                <h2 className="text-[18px] text-[#3C2109] max-xl:text-[15px]">Fill up Application Form</h2>
                </div>
                <div className="flex items-center gap-5">
                <FontAwesomeIcon icon={faCreditCard} className="text-[35px] text-emerald-600" />
                <h2 className="text-[18px] text-[#3C2109] max-xl:text-[15px]">Make Online Payment</h2>
                </div>
                <div className="flex items-center gap-5">
                <FontAwesomeIcon icon={faHeadset} className="text-[35px] text-fuchsia-600" />
                <h2 className="text-[18px] text-[#3C2109] max-xl:text-[15px]">Executive will Process Application</h2>
                </div>
                <div className="flex items-center gap-5">
                <FontAwesomeIcon icon={faEnvelope} className="text-[35px] text-purple-900" />
                <h2 className="text-[18px] text-[#3C2109] max-xl:text-[15px]">Get Confirm Mail</h2>
                </div>

            </div>
        </div>
    )
}

export default SectionSeven;