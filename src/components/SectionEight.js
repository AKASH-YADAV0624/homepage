import { faArrowRightLong, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionEight=()=>{
    return(
        <div className="flex flex-col w-full items-center py-5 px-24 max-md:px-9 max-sm:px-2">
          <div className="flex flex-col items-center">
          <h1 className="text-[14px] text-[#EB8D15] text-[normal]">EXPLORE OUR BLOGS</h1>
          <h1 className="text-[32px] text-[#3C2109] font-bold py-2 text-center">Accelerate Digital Transformation</h1>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-5 my-9">
            <div className="w-[32%] mb-3 max-md:w-[45%] max-sm:w-[100%]">
                <img src="images/digital.png" alt="img" />
                <h2 className="font-medium text-[14px] text-[#667084] pt-5 pb-3">Prabhash Mishra • 1 Jan 2023 • Today </h2>
                <h1 className="font-bold text-[22px] text-[#1A1A1A] flex justify-between">Small business & Startup <FontAwesomeIcon icon={faArrowTrendUp} /></h1>
                <p className="font-medium text-[15px] text-[#667084] py-3">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
                <div className="flex gap-2">
                    <h2>Tax & Audit</h2>
                    <h2>Management</h2>
                </div>

            </div>

            <div className="w-[32%] mb-3 max-md:w-[45%] max-sm:w-[100%]">
                <img src="images/digital1.png" alt="img" />
                <h2 className="font-medium text-[14px] text-[#667084] pt-5 pb-3">Mahesh Kumar • 1 Jan 2023</h2>
                <h1 className="font-bold text-[22px] text-[#1A1A1A] flex justify-between">Scale-Up Company Offer <FontAwesomeIcon icon={faArrowTrendUp} /></h1>
                <p className="font-medium text-[15px] text-[#667084] py-3">Mental models are simple expressions of complex processes or relationships.</p>
                <div className="flex gap-2">
                    <h2>Tax & Audit</h2>
                    <h2>Management</h2>
                </div>

            </div>

            <div className="w-[32%] mb-3 max-md:w-[45%] max-sm:w-[100%]">
                <img src="images/digital.png" alt="img" />
                <h2 className="font-medium text-[14px] text-[#667084] pt-5 pb-3">Rakhi Verma • 1 Jan 2023</h2>
                <h1 className="font-bold text-[22px] text-[#1A1A1A] flex justify-between">Growing Business Package <FontAwesomeIcon icon={faArrowTrendUp} /></h1>
                <p className="font-medium text-[15px] text-[#667084] py-3">Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
                <div className="flex gap-2">
                    <h2>Tax & Audit</h2>
                    <h2>Management</h2>
                </div>

            </div>

            <div className="w-[32%] mb-3 max-md:w-[45%] max-sm:w-[100%]">
                <img src="images/digital2.png" alt="img" />
                <h2 className="font-medium text-[14px] text-[#667084] pt-5 pb-3">Karan Kumar • 1 Jan 2023</h2>
                <h1 className="font-bold text-[22px] text-[#1A1A1A] flex justify-between">Scale-Up Company Offer  <FontAwesomeIcon icon={faArrowTrendUp} /></h1>
                <p className="font-medium text-[15px] text-[#667084] py-3">Collaboration can make our teams stronger, and our individual designs better.</p>
                <div className="flex gap-2">
                    <h2>Tax & Audit</h2>
                    <h2>Management</h2>
                </div>

            </div>

            <div className="w-[32%] mb-3 max-md:w-[45%] max-sm:w-[100%]">
                <img src="images/digital3.png" alt="img" />
                <h2 className="font-medium text-[14px] text-[#667084] pt-5 pb-3">Richa Singh • 1 Jan 2023</h2>
                <h1 className="font-bold text-[22px] text-[#1A1A1A] flex justify-between">Small business & Startup <FontAwesomeIcon icon={faArrowTrendUp} /></h1>
                <p className="font-medium text-[15px] text-[#667084] py-3">JavaScript frameworks make development easy with extensive features and functionalities.</p>
                <div className="flex gap-2">
                    <h2>Tax & Audit</h2>
                    <h2>Management</h2>
                </div>

            </div>

            <div className="w-[32%] mb-3 max-md:w-[45%] max-sm:w-[100%]">
                <img src="images/digital4.png" alt="img" />
                <h2 className="font-medium text-[14px] text-[#667084] pt-5 pb-3">Miss Nora• 1 Jan 2023</h2>
                <h1 className="font-bold text-[22px] text-[#1A1A1A] flex justify-between">Small business & Startup <FontAwesomeIcon icon={faArrowTrendUp} /></h1>
                <p className="font-medium text-[15px] text-[#667084] py-3">Starting a community doesn’t need to be complicated, but how do you get started?</p>
                <div className="flex gap-2">
                    <h2>Tax & Audit</h2>
                    <h2>Management</h2>
                </div>

            </div>

          </div>
            <button className="flex items-center px-2 w-44 bg-[#1C4670] text-[#FFFFFF] h-12 rounded my-9 gap-5 max-sm:my-3  ">Show more blogs <FontAwesomeIcon icon={faArrowRightLong} /></button>
        </div>
    )
}

export default SectionEight;