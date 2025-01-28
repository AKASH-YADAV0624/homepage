import React from "react";

const SectionFour=()=>{
    return(
       <div id="about" className="flex justify-between w-full px-24 py-24 max-lg:flex-col max-md:py-9 max-md:px-9 max-sm:px-2 max-sm:py-5">
              <div className="w-[45%] max-lg:w-[100%]">
              <h1 className="text-[14px] text-[#EB8D15] text-[normal]">WELCOME TO REGISTERKARO.IN</h1>
              <h1 className="text-[32px] text-[#272D37] font-bold py-5">About <span className="text-[#EB8D15]">Register Karo</span> </h1>
              <p className="text-start text-[16px] text-[#0D1216]">We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.</p>
              <p className="text-start text-[16px] text-[#0D1216] pt-5">I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
              <button className="w-44 bg-[#1C4670] text-[#FFFFFF] h-12 rounded my-9  ">Learn more</button>
              </div>
              <div className="w-[45%] max-lg:w-[100%]">
                <img src="images/aboutimg.png" alt="aboutImage" className="w-full" />
              </div>
       </div>
    )
}

export default SectionFour;