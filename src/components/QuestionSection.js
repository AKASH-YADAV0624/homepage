import { faAngleRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const QuestionSection=()=>{
    return(
        <div className="flex flex-col items-center w-full bg-[#FAFAFA] px-24 py-16 max-sm:px-2 max-sm:py-5">
               <h1 className="text-[14px] text-[#EB8D15]" >FAQ</h1>
               <h1 className="font-bold text-[32px] text-[#3C2109]" >Frequent Ask Questions </h1>

               <div className="flex flex-col gap-2 w-full my-9" >
                <div className="flex justify-between bg-[#FFFFFF] items-center px-2 rounded border-2 py-5">
                    <h1 className="text-[#0D1216] text-[16px] font-medium" >Can I recover deleted files from desktop with this software?</h1>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div className="flex justify-between bg-[#FFFFFF] items-center px-2 rounded border-2 py-5">
                    <h1 className="text-[#0D1216] text-[16px] font-medium" >Can I recover deleted files from desktop with this software?</h1>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div className="flex justify-between bg-[#FFFFFF] items-center px-2 rounded border-2 py-5">
                    <h1 className="text-[#0D1216] text-[16px] font-medium" >Can I recover deleted files from desktop with this software?</h1>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div className="flex justify-between bg-[#FFFFFF] items-center px-2 rounded border-2 py-5">
                    <h1 className="text-[#0D1216] text-[16px] font-medium" >Can I recover deleted files from desktop with this software?</h1>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div className="flex justify-between bg-[#FFFFFF] items-center px-2 rounded border-2 py-5">
                    <h1 className="text-[#0D1216] text-[16px] font-medium" >Can I recover deleted files from desktop with this software?</h1>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                
               </div>
                <button className="flex items-center justify-center w-44 bg-[#1C4670] text-[#FFFFFF] h-12 rounded  gap-5   "> Show more <FontAwesomeIcon icon={faArrowRightLong} /></button>
        </div>
    )
}

export default QuestionSection;