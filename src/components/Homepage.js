import React from "react";
import Navbar from "./Navbar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import Slider from "./Slider";
import QuestionSection from "./QuestionSection";
import AppContainer from "./AppContainer";
import AchievementContainer from "./AchievmentContainer";
import NewsLetter from "./NewsLetter";
import CompanyLogoContainer from "./CompanyLogoContainer";
import Footer from "./Footer";

const Homepage =()=>{
    return(
        <>
       <Navbar/>
       <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
       <SectionFour/>
       <SectionFive/>
       <SectionSix/>
       <SectionSeven/>
       <SectionEight/>
       <Slider/>
       <QuestionSection/>
       <AppContainer/>
       <AchievementContainer/>
       <NewsLetter/>
       <CompanyLogoContainer/>
       <Footer/>
       </>
    )
}

export default Homepage;