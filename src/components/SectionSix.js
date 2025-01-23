import { faBolt, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const SectionSix=()=>{
    return(
        <div className="flex justify-between  w-full bg-[#1C4670] px-24 py-24 max-lg:flex-col max-md:px-9 max-md:py-9">
            <div className="flex flex-col w-[40%] gap-7 max-lg:w-[100%]">
                <div>
            <h1 className="text-[32px] text-[#FFFFFF] font-bold py-5">0ur Video Introductions</h1>
              <p className="text-start text-[16px] text-[#AAB5CD]">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>   
            </div>
            <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLightbulb} className="text-[25px] text-[#FFA229]" />
            <div>
            <h1 className="text-[22px] text-[#FFFFFF] font-bold ">Explore ideas together</h1>
            <p className="text-start text-[16px] text-[#AAB5CD]">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>   
           
            </div>

            </div>
            <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faBolt} className="text-[25px] text-[#FFA229]" />
           
            <div>
            <h1 className="text-[22px] text-[#FFFFFF] font-bold ">Bring those ideas to life</h1>
            <p className="text-start text-[16px] text-[#AAB5CD]">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>   
            </div>
            </div>
            </div>

            <div className="w-[45%] max-lg:w-[60%] max-lg:pt-5 max-sm:w-[100%]">
                <img src="images/youtubeimg.png" alt="youtube"/>
            </div>
          </div>
    )
}

export default SectionSix;