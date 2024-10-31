import { Link } from "react-router-dom";
import reccoinBox from "../../assets/reccoin.png";
import reccoin_reward from "../../assets/reccoin_reward.png";

export default function EarnReccoin() {
    return <div className="bg-white w-full items-center pt-[95px] pb-[110px] px-4">
        <p className="text-primary60 text-[4.3125rem] font-semibold">
            Earn <br />Ecocollect
        </p>
        <img src={reccoinBox} alt="reccoin box" className="w-[398.99px] h-[344.56px]" />
    </div>
}

export function EarnReccoinReward() {
    return <div className="relative pb-24 pl-0 w-full items-center md:pl-6 md:h-[500px] md:pb-0 ">
    
            {/* bg-earnRecyloxBg bg-contain bg-no-repeat bg-right-bottom -scale-x-100 */}
               
               <p className="mb-8 mt-16 md:mb-0 md:h-[300px] text-[#005232] text-[16px]
                    font-montserrat font-[700]">
                Earn Ecocollect tokens for every item you recycle through <br /> 
                our waste management system. From plastic bottles to <br />
                paper and rubber, each contribution counts towards <br />
                building a more sustainable future. <br /> 
                The more you recycle, the more Ecocollect you earn!
               </p>

                <Link to={'/user-dashboard'} 
                    className='mb-8 py-2 px-8 bg-primary40 rounded-sm text-white font-black'> 
                    Earn Now!
                </Link>
                <img src={reccoin_reward} alt="" className="-bottom-5 absolute object-contain md:-bottom-10 -right-12" />
            </div>
            
          
    // </div>
}

