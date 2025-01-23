import { faCircleCheck, faFaceSmile, faShieldHalved, faUserTie } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionFive=()=>{
    return(
        <div className="w-full px-24 py-24 max-lg:px-16 max-lg:py-16 max-md:px-9 max-sm:px-2">
            <div className="flex justify-between flex-wrap gap-2">
                <div className="w-[45%] max-xl:w-[100%]">
                <h1 className="text-[14px] text-[#EB8D15] text-[normal]">WELCOME TO REGISTERKARO.IN</h1>
              <h1 className="text-[32px] text-[#272D37] font-bold py-5">Why Choose Register Karo</h1>
              <p className="text-start text-[16px] text-[#0D1216]">It is with consistent services and results that build trust with the people and that in
              turn help us to serve the business better.</p>   
                </div>
                <div className="flex w-[45%] gap-5 max-xl:w-[100%] max-sm:flex-wrap ">
                <div className="flex flex-col items-center w-72 bg-red-100 rounded max-sm:w-[100%]">
              <FontAwesomeIcon icon={faShieldHalved} className="text-[40px] text-[#F45C20] py-5" />
              <h1 className="text-[20px] text-[#000000] font-medium px-4">Confidential & Safe</h1>
              <p className="text-[#666666] text-center pt-3 pb-9 px-2">All your private information is safe with us</p>

              </div> 

              <div className="flex  flex-col items-center w-72 bg-emerald-100 rounded max-sm:w-[100%]">
              <FontAwesomeIcon icon={faCircleCheck} className="text-[40px] text-[#F45C20] py-5" />
              <h1 className="text-[20px] text-[#000000] font-medium px-4">No Hidden Fee</h1>
              <p className="text-[#666666] text-center pt-3 pb-9 px-2">Everything is put before you with
              no hidden charges or conditions</p>

              </div>
                </div>
             
            </div>

            <div className="flex mt-5 justify-end gap-5 max-lg:flex-wrap max-lg:justify-normal ">
            <div className="flex flex-col items-center w-72 bg-red-100 rounded max-sm:w-[100%]">
              <FontAwesomeIcon  icon={faFaceSmile} className="text-[40px] text-[#F45C20] py-5" />
              <h1 className="text-[20px] text-[#000000] font-medium px-4">Guaranteed Satisfaction</h1>
              <p className="text-[#666666] text-center pt-3 pb-9 px-2">We ensure that you stay 100%
              satisfied with our offered services</p>

              </div>

              <div className="flex flex-col items-center w-72 bg-emerald-100 rounded max-sm:w-[100%]">
              <FontAwesomeIcon icon={faUserTie}  className="text-[40px] text-[#F45C20] py-5" />
              <h1 className="text-[20px] text-[#000000] font-medium px-4">Expert CA/CS Assistance</h1>
              <p className="text-[#666666] text-center pt-3 pb-9 px-2">Prompt support from our in-house
              expert professionals</p>

              </div>

              <div className="flex flex-col items-center w-72 bg-white border-2 border-yellow-400 rounded max-sm:w-[100%]">
              <FontAwesomeIcon icon={faShieldHalved} className="text-[40px] text-[#F45C20] py-5 " />
              <h1 className="text-[20px] text-[#000000] font-medium px-4">Confidential & Safe</h1>
              <p className="text-[#666666] text-center pt-3 pb-9 px-2">All your private information is safe with us</p>

              </div>
            </div>
        </div>
    )
}

export default SectionFive;