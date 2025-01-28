import { faBolt, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionSix = () => {
  return (
    <div className="flex justify-between w-full bg-[#1C4670] px-24 py-24 max-lg:flex-col max-md:px-9 max-md:py-9">
      <div className="flex flex-col w-[40%] gap-7 max-lg:w-[100%]">
        <div>
          <h1 className="text-[32px] text-[#FFFFFF] font-bold py-5">
            Our Video Introductions
          </h1>
          <p className="text-start text-[16px] text-[#AAB5CD]">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
        </div>
        {/* First Hoverable Section */}
        <div className="flex gap-2 items-center group hover:bg-[#2D5E85] hover:rounded-lg p-4 transition-all">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-[25px] text-[#FFA229] group-hover:text-[#FFC45C] transition-all"
          />
          <div>
            <h1 className="text-[22px] text-[#FFFFFF] font-bold group-hover:text-[#FFC45C] transition-all">
              Explore ideas together
            </h1>
            <p className="text-start text-[16px] text-[#AAB5CD] group-hover:text-[#FFFFFF] transition-all">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.
            </p>
          </div>
        </div>
        {/* Second Hoverable Section */}
        <div className="flex gap-2 items-center group hover:bg-[#2D5E85] hover:rounded-lg p-4 transition-all">
          <FontAwesomeIcon
            icon={faBolt}
            className="text-[25px] text-[#FFA229] group-hover:text-[#FFC45C] transition-all"
          />
          <div>
            <h1 className="text-[22px] text-[#FFFFFF] font-bold group-hover:text-[#FFC45C] transition-all">
              Bring those ideas to life
            </h1>
            <p className="text-start text-[16px] text-[#AAB5CD] group-hover:text-[#FFFFFF] transition-all">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[45%] max-lg:w-[60%] max-lg:pt-5 max-sm:w-[100%]">
        <img
          src="images/youtubeimg.png"
          alt="youtube"
          className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default SectionSix;
