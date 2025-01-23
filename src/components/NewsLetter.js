import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const NewsLetter=()=>{
    return(
        <div className="flex flex-col items-center w-full py-9 bg-gradient-to-r  from-[#FFA229] to-[#2F5795] max-sm:px-2">
          <div className="flex flex-col items-center ">
          <h1 className="text-[14px] text-[#FFFFFF] text-[normal]">1% OF THE INDUSTRY</h1>
          <h1 className="text-[32px] text-[#FFFFFF] text-center font-bold py-2 max-md:text-[20px] ">Welcome to your new digital reality. Now.</h1>
          </div>

          <div className="flex w-[30%] my-5 max-md:w-[60%] max-sm:w-[100%]">
            <input placeholder="Enter Your Email" className="w-[100%] rounded-l-lg pl-2 "/>
            <button className="text-[#FFFFFF] bg-[#FFA229] p-3 rounded-r-lg">Submit</button>
          </div>

          <div className="flex gap-3 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
            <h1 className="text-[#FFFFFF] gap-2 "><FontAwesomeIcon icon={faCircleCheck} /> Instant results</h1>
            <h1 className="text-[#FFFFFF] gap-2"><FontAwesomeIcon icon={faCircleCheck} /> User-friendly interface </h1>
            <h1 className="text-[#FFFFFF] gap-2"><FontAwesomeIcon icon={faCircleCheck} /> Personalized customization </h1>
          </div>
        </div>
    )
}

export default NewsLetter;