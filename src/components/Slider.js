import React from "react";

const Slider = () => {
  return (
    <div className="w-full bg-[#1C4670] px-24 py-20 max-lg:py-9 max-md:px-9 max-sm:px-2">
      <div>
      <h1 className="text-[32px] font-bold text-[#FFFFFF]">What people say about us</h1>
      </div>
      <div className="mt-20 flex gap-3 items-center  max-lg:flex-wrap">
        <img src="images/slider.png" alt="slider" className="w-[35%]  max-lg:w-[40%] max-md:w-[100%]" />
        <img src="images/slider.png" alt="slider" className="w-[35%] max-lg:w-[40%] max-md:w-[100%]" />
        <img src="images/slider.png" alt="slider" className="w-[35%] max-lg:w-[40%] max-md:w-[100%]" />

      </div>

      
    </div>
  );
};

export default Slider;
