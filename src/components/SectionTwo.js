import React from "react";

const SectionTwo=()=>{
    return(
        <div className="flex flex-col items-center bg-[#FFFFFF] w-full px-9 py-24  max-sm:px-2 max-sm:py-5">
            <h1 className="text-[#272D37] text-center font-bold text-[22px]">Trusted By Over 100+ Startups and freelance business</h1>
            <div className="flex items-center justify-center gap-7  mt-9 max-lg:flex-wrap ">
                <img src="images/group.png" alt="company logo" className="w-[137px] " />
                <img src="images/group1.png" alt="company logo" className="w-[137px] " />
                <img src="images/group1.png" alt="company logo" className="w-[137px] " />
                <img src="images/group2.png" alt="company logo" className="w-[137px] " />
                <img src="images/group3.png" alt="company logo" className="w-[137px] " />
                <img src="images/group4.png" alt="company logo" className="w-[137px] " />
            </div>
        </div>
    )
}

export default SectionTwo;