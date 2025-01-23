import React from "react";

const AppContainer=()=>{
    return(
        <div className="flex justify-between px-24 pt-16 bg-[#1C4670] max-lg:flex-wrap max-md:px-9 max-sm:px-2">
            <div className="w-[40%] max-lg:w-[100%]">
             <h1 className="font-extrabold text-[32px] text-[#FFFFFF]" >Manage Your Services by your
             Mobile Phone </h1>
             <p className="text-[16px] text-[#AAB5CD] my-3">Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </p>   
             <h1 className="text-[16px] mt-9 font-normal text-[#FFFFFF]">Get the App</h1>
             <div className="flex my-3 ">
                <img src="images/playstore.png" alt="playstore" className="w-[40%] text-start" />
                <img src="images/appstore.png" alt="appstore" className="w-[40%] text-start" />
             </div>

            </div>
            <div className="flex items-end w-[40%] gap-3 max-lg:w-[100%]">
                <img src="images/Phone2.png" alt="phone" className="flex  w-[50%] h-[50%]" />
                <img src="images/Phone1.png" alt="phone" className="w-[50%]" />

            </div>

        </div>
    )
}

export default AppContainer;