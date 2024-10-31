import { useState } from "react"
import About from "../homepage_components/about";
import { EarnReccoinReward } from "../homepage_components/earnReccoin";
import aboutUsWhiteIcon from '../../assets/aboutUsWhiteIcon.svg'
import aboutUsBlackIcon from '../../assets/aboutUsBlackIcon.svg'
import earnReccoinWhiteIcon from '../../assets/earnReccoinWhiteIcon.svg'
import earnReccoinBlackIcon from '../../assets/earnReccoinBlackIcon.svg'

const AboutUsAndEarnRecoin = () => {


  return  <section className="container mx-auto w-full">
        
        <div className="w-[90%] mx-auto flex flex-col items-center justify-between md:flex-row  ">
            <div className="w-[50%]">
                <button  className= 'font-montserrat font-black text-lg flex flex-row items-center border rounded-[10px] px-12 py-2 mr-8 bg-primary40 text-white'>
                    <img src={ aboutUsWhiteIcon} alt=" about us icon" className="mr-4"/>About Us
                </button>
                < About/>
            </div>
           <div className="mt-20 w-[50%] md:mt-0">
            <button className={ `ml-0 md:ml-6 font-montserrat font-black text-lg flex flex-row items-center  border rounded-[10px] px-12 py-2 bg-primary40 text-white`  }>
                    <img src={earnReccoinWhiteIcon} alt="earn Ecocollect icon" className="mr-4" />Earn Ecocollect Token
                </button>
                <EarnReccoinReward/>
           </div>
        </div>


        
    </section>
  
}

export default AboutUsAndEarnRecoin